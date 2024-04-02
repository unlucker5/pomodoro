import React, { useEffect, useRef } from 'react';
import styles from './deleteactionmodal.module.css';
import { useDispatch } from 'react-redux';
import { removeAction } from '../../../store/actions/reducer';

interface DeleteActionModalProps {
  index: number;
  modalOpen?: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DeleteActionModal({ index, setModalOpen }: DeleteActionModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeAction({ item: index + 1 }));
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.background} onClick={handleCancel}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.header}>Удалить задачу?</h2>
        <button className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
        <span className={styles.cancel} onClick={handleCancel}>Отмена</span>
        <span className={styles.cancelCross} onClick={handleCancel}></span>
      </div>
    </div>
  );
}