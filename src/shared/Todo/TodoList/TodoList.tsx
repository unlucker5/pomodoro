import React, { useEffect, useRef, useState } from 'react';
import styles from './todolist.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { calculateSegmentedTimeToHoursMin } from '../../../util/timeManipulations';
import { PopUp } from './PopUp';
import { useDispatch } from 'react-redux';
import { editAction } from '../../../store/actions/reducer';


export function TodoList() {
  const actions = useSelector((state: RootState) => state.actions);
  const filteredActions = actions.filter((action) => action.text !== '');
  const totalDuration = actions.reduce((total, action) => total + action.time, 0);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(-1);
  const [activeInputIndex, setActiveInputIndex] = useState(-1);
  const popUpRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleOptionsButtonClick = (index: number) => {
    setPopUpOpen(true);
    setPopUpIndex(index);
  };

  const handleEditAction = (index: number) => {
    setActiveInputIndex(index); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
        setPopUpOpen(false);
        setPopUpIndex(-1);
        setActiveInputIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 0) {
      dispatch(editAction({ index, newText: value }));
    }
  };

  return (
    <ul className={styles.list}>
      {filteredActions.length > 0 ? (
        filteredActions.map((action, index) => {
          return (
            <li className={styles.listItem} key={index}>
              <div className={styles.number}>{action.time}</div>
              <input
                className={styles.listItemText}
                value={action.text}
                onChange={(e) => handleInputChange(index, e.target.value)}
                ref={activeInputIndex === index ? (inputRef) => inputRef && inputRef.focus() : null }
                disabled= {activeInputIndex !== index}
              />
              <button
                className={styles.optionsButton}
                onClick={() => handleOptionsButtonClick(index)}
              ></button>
              {popUpOpen && popUpIndex === index && (
                <div ref={popUpRef}>
                  <PopUp index={index} onEdit={handleEditAction} />
                </div>
              )}
            </li>
          );
        })
      ) : (
        <div aria-label='Тут будет список ваших дел'></div>
      )}
      <div className={styles.time} aria-label='Суммарное время по всем задачам'>
        {totalDuration > 0 ? calculateSegmentedTimeToHoursMin(totalDuration, 25, false) : ''}
      </div>
    </ul>
  );
}