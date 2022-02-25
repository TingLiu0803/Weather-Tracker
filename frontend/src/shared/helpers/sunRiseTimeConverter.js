export const convertToSunRiseTime = (seconds) => {
  let timeInDay = "";
  if (seconds) {
    timeInDay = new Date(seconds * 1000).toLocaleString("en-US", {
      timeZone: "America/Toronto"
    });
  }
  return timeInDay;
};

export const convertoToSunsetTime = (seconds) => {
  let timeInDay = "";
  if (seconds) {
    timeInDay = new Date(seconds * 1000).toLocaleString("en-US", {
      timeZone: "America/Toronto"
    });
  }
  return timeInDay;
};

export const convertToFavDayInWeek = (seconds) => {
  let timeInDay = "";
  if (seconds) {
    timeInDay = new Date(seconds * 1000).toLocaleString("en-US", {
      weekday: "long",
      timeZone: "America/Toronto"
    });
  }
  return timeInDay;
};

export const convertToDataFormat = (seconds) => {
  let timeInDay = "";
  if (seconds) {
    timeInDay = new Date(seconds * 1000).toLocaleString("en-US", {
      timeZone: "America/Toronto"
    });
  }
  return timeInDay;
};
