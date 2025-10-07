import { ArrowDown } from "@/assets";
import { diagnoseReports } from "@/constants";

const DiagnoseReport = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {diagnoseReports.map((item) => (
        <div
          key={item.title}
          className="flex flex-col justify-start py-4 px-5 xl:w-50 2xl:w-57 rounded-lg text-dark-sm"
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
            {item.output !== "Normal" && (
              <img src={ArrowDown} alt="arrow-down" className="size-3" />
            )}
            <span className="text-xs 2xl:text-sm">{item.output}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagnoseReport;
