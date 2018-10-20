import moment from "moment-timezone";

export const isDay = time => {
  return time > "05:00:00" && time < "21:00:00";
};

export const getDate = timezone => {
  return (
    `${moment()
      .tz(`${timezone}`)
      .format("dddd")}, ` +
    `${moment()
      .tz(`${timezone}`)
      .format("MMMM")} ` +
    `${moment()
      .tz(`${timezone}`)
      .format("D")}, ` +
    `${moment()
      .tz(`${timezone}`)
      .format("YYYY")}`
  );
};

export const getTime = timezone => {
  return (
    `${moment()
      .tz(`${timezone}`)
      .format("HH")}:` +
    `${moment()
      .tz(`${timezone}`)
      .format("mm")}:` +
    `${moment()
      .tz(`${timezone}`)
      .format("ss")}`
  );
};

export const getFutureDay = (day, timezone) => {
  return moment(new Date())
    .add(day, "days")
    .tz(`${timezone}`)
    .format("dddd");
};
