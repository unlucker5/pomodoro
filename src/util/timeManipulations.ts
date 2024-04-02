

export function convertToMinSec(seconds:number){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    
    return { minutes: formattedMinutes, seconds: formattedSeconds, roundedMinutes:minutes };
  }

export function calculateSegmentedTimeToHoursMin(q:number , segmentDuration:number, isSeconds:boolean){
  const totalMinutes = isSeconds ? (q / 60) : q * segmentDuration;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  let durationString = "";
  if (hours > 0) {
    if (!isSeconds){
      if (hours !== 1 && hours < 4) {
        durationString += "а";
      } if (hours > 4) {
        durationString += "ов";
      }
    } else {
      durationString += `${hours} ч`;
    }
  
  }
  if (minutes > 0) {
      if (hours > 0) {
        durationString += " ";
      }
      if (!isSeconds) {
      durationString += `${minutes} минут`;
      if (minutes % 10 === 1 && minutes !== 11) {
        durationString += "а";
      } else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes)) {
        durationString += "ы";
      } else {
        durationString += "";
      }
    } else {
      durationString += `${minutes} мин`;
    }
    
  }

  return durationString;  
}  

// export function calculateSecondsToMinutes (seconds: number) {

// }
  