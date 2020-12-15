import moment from "moment";

export const timeDiff = time => {
  let startTime = moment(time);
  let endTime = moment();

  let minDiff = endTime.diff(startTime, "minutes");
  let hoursDiff = endTime.diff(startTime, "hours");
  let daysDiff = endTime.diff(startTime, "days");
  let weeksDiff = endTime.diff(startTime, "weeks");
  let monthsDiff = endTime.diff(startTime, "months");
  let yearsDiff = endTime.diff(startTime, "years");

  if (minDiff < 2) 
    return 'Just Now';
  else if (minDiff <= 59)
    return `${minDiff}m ago`;
  else if (hoursDiff === 1) 
    return `1h ago`;
  else if (hoursDiff <= 23)
    return `${hoursDiff}h ago`;
  else if (hoursDiff > 23 && daysDiff <= 6)
    return `${daysDiff}d ago`;
  else if (daysDiff >= 7 && daysDiff < 14)
    return `1w ago`;
  else if (daysDiff >= 14 && daysDiff < 30)
    return `${weeksDiff}w ago`;
  else if (daysDiff >= 30 && daysDiff <= 40)
    return `1m ago`;
  else if (daysDiff > 40 && daysDiff < 365)
    return `${monthsDiff}w ago`;
  else if (daysDiff >= 365 && daysDiff < 730)
    return `about an year ago`;
  else if (daysDiff >= 730)
    return `${yearsDiff}y ago`;
  else 
    return "";
};