export const today = () => {
  let today = new Date(Date.now());
  return today.getDay();
};

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const getTodayString = (val) => {
  return daysOfWeek[val];
};
