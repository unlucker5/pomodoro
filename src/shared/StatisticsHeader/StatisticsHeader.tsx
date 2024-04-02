import React, { useState } from 'react';
import styles from './statisticsheader.module.css';
// import Select from 'react-select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { updatePeriod, updateDays } from '../../store/totalStatistics/reducer';

const options = [
  {value: "thisWeek", label:'Эта неделя' },
  {value: "lastWeek", label:'Прошедшая неделя' },
  {value: "twoWeeksAgo", label:'2 недели назад' }
] 



export function StatisticsHeader() {
  const [period, setPeriod] = useState('thisWeek')
  const statedPeriod = useSelector((state: RootState) => state.totalStatistics.period);

  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value)
    dispatch(updatePeriod(event.target.value))
    dispatch(updateDays(event.target.value))
    console.log(event.target.value)
  };
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Ваша активность</h2>
      <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <Select
          id="simple-select"
          value={period}
          onChange={handleChange}
        >
          {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
