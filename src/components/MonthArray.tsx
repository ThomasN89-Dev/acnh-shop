const MONTHS = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

function MonthCalendar({ monthArray, timesByMonth }) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-3">
      {MONTHS.map((month, i) => {
        const monthNum = i + 1;
        const isAvailable = monthArray.includes(monthNum);
        const time = timesByMonth[monthNum];

        return (
          <div
            key={month}
            className={`flex flex-col items-center rounded-lg p-1 text-xs min-w-24 flex-wrap
              ${isAvailable ? "bg-red-100 text-red-600 font-bold" : "bg-gray-100 text-gray-400"}`}
          >
            <span>{month}</span>
            {isAvailable && <span>✕</span>}
            {isAvailable && time !== "NA" && (
              <span className="text-[10px] text-center leading-tight">
                {time}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MonthCalendar;
