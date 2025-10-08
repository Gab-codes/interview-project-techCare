import {
  HeartBPM,
  RespitoryRate,
  ArrowDown,
  Temperature,
  ArrowUp,
} from "@/assets";
import type { DiagnoseHistoryItem } from "@/types";

const DiagnoseReport = ({ data }: { data: DiagnoseHistoryItem }) => {
  const diagnoseReports = [
    {
      title: "Respiratory Rate",
      value: data.respiratory_rate.value + " bpm",
      color: "#E0F3FA",
      image: RespitoryRate,
      level: data.respiratory_rate.levels,
    },
    {
      title: "Temperature",
      value: data.temperature.value + "°F",
      color: "#FFE6E9",
      image: Temperature,
      level: data.temperature.levels,
    },
    {
      title: "Heart Rate",
      value: data.heart_rate.value + " bpm",
      color: "#FFE6F1",
      image: HeartBPM,
      level: data.heart_rate.levels,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {diagnoseReports.map((item) => (
        <div
          key={item.title}
          className="flex flex-col justify-start py-4 px-5 xl:max-w-50 2xl:max-w-57 rounded-lg text-dark-sm"
          style={{ backgroundColor: item.color }}
        >
          <div className="bg-white rounded-full p-1 w-fit">
            <img
              src={item.image}
              alt={item.title}
              className="size-18 xl:size-20 2xl:size-24"
            />
          </div>
          <div className="mt-2 font-medium">{item.title}</div>
          <div className="lg:text-2xl 2xl:text-3xl font-extrabold">
            {item.value}
          </div>

          <div className="pt-3 flex items-center gap-1">
            {(() => {
              const trendIcon = item.level.includes("Higher")
                ? ArrowUp
                : item.level !== "Normal"
                ? ArrowDown
                : null;

              return trendIcon ? (
                <img src={trendIcon} alt="trend-icon" className="size-3" />
              ) : null;
            })()}
            <span className="text-xs 2xl:text-sm">{item.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagnoseReport;
