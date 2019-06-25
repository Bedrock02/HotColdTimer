import moment from 'moment';
export const formatTime = (ms) => {
  const duration = moment.duration(ms);
  return moment.utc(duration.asMilliseconds()).format("mm:ss");
};
