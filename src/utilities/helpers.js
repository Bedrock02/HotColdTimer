export const formatTime = (value) => {
  const minutes = Math.floor(value/60);
  const seconds = value % 60;
  const minutes_format = minutes > 0 ? `${minutes}`: '00';
  let seconds_format;
  if (seconds > 0) {
    seconds_format = seconds >= 10 ? seconds : `0${seconds}`;
  } else {
    seconds_format = '00'
  }
  return `${minutes_format}:${seconds_format}`;
};
