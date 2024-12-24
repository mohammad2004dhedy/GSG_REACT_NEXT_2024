import "./date.style.css"
const DateBanner = () => {
  const Days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const CurrentDate: Date = new Date();
  const CurrentDay = Days[CurrentDate.getDay()];
  const CurrentMonth = Months[CurrentDate.getMonth()].slice(0, 3);
  return (
    <div className="date-banner">
      <h1>
        {CurrentDay}, <span>{CurrentDate.getDate()} {CurrentMonth}</span>
      </h1>
    </div>
  );
};
export default DateBanner;
