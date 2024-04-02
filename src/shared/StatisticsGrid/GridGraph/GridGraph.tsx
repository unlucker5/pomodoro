import React, { useEffect, useState } from 'react';
import styles from './gridgraph.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { BarChart,BarPlot } from '@mui/x-charts/BarChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { useDispatch } from 'react-redux';
import { selectDayIndex, updateDayTime, updateDays } from '../../../store/totalStatistics/reducer';


export function GridGraph() {
  const today = useSelector((state: RootState) => state.todayStatistics.todayShort);
  const fullToday = useSelector((state: RootState) => state.todayStatistics.todayLong);
  const todayTotaltime = useSelector((state: RootState) => state.todayStatistics.totalTime);
  const todayTotalPomodoro = useSelector((state: RootState) => state.todayStatistics.totalPomodoro);
  const todayTimeOnPause = useSelector((state: RootState) => state.todayStatistics.timeOnPause)
  const todayStops = useSelector((state: RootState) => state.todayStatistics.stops)
  const days = useSelector((state: RootState) => state.totalStatistics.days);

  const formatedToday = today.charAt(0).toUpperCase() + today.slice(1);
  const formatedFullToday = fullToday.charAt(0).toUpperCase() + fullToday.slice(1);

  const dispatch = useDispatch()
  const [arrayUpdated, setArrayUpdated] = useState(false);

  useEffect(() => {
    dispatch(updateDayTime({
      day: formatedToday,
      newFullDay: formatedFullToday,
      newTime: todayTotaltime,
      newTotalPomodoro: todayTotalPomodoro,
      newTimeOnPause: todayTimeOnPause,
      newStops: todayStops,
    }));
    dispatch(updateDays('thisWeek'))
    setArrayUpdated(true);
  }, [dispatch, formatedToday, todayTotaltime, todayTotalPomodoro, todayTimeOnPause, todayStops]);



  const handleBarClick = (event:any) => {
    const rectElement = event.target; 
    const parentElement = rectElement.parentNode;
    const index = Array.from(parentElement.children).indexOf(rectElement); 
    dispatch(selectDayIndex(index-2));
  };

  

  return (
    <div className={styles.wrapper}>
      {arrayUpdated && (
      <ResponsiveChartContainer
        series={[{ data: days.map((time) => Math.floor(time.totalTime / 60)), type: 'bar' }]}
        xAxis={[{ scaleType: 'band', data: days.map((day) => day.day)}]}
       
        // yAxis={[{ scaleType: 'band', data: days.map((time) => calculateSegmentedTimeToHoursMin(time.time, 25, true))}]}
      > 
        <BarPlot color="#EA8A79"  onClick={(event:any) => handleBarClick(event)}/>
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="right" scaleType="band" />
      </ResponsiveChartContainer>
      )}
      
      </div>
  );
}

