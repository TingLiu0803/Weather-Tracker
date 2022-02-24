export const convertToDayInWeek = (seconds) => {
  let timeInDay = "";
  if (seconds) {
    timeInDay = new Date(seconds * 1000).toLocaleString("en-US", {
      weekday: "long",
      timeZone: "America/Toronto"
    });
  }
  return timeInDay;
};
