import { Download } from "@/assets";

const LabResult = ({ labResultData }: { labResultData: string[] }) => {
  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl px-3 lg:px-2 py-4 xl:p-4 h-full">
      <h2 className="text-xl lg:text-lg font-bold text-dark-sm xl:card-title-24pt mb-1 2xl:mb-1.5">
        Lab Results
      </h2>

      <div className="flex flex-col gap-2 h-full overflow-y-auto custom-scrollbar">
        {labResultData.map((data) => (
          <div
            key={data}
            className="flex items-center hover:bg-background py-3 px-3 justify-between"
          >
            <span className="text-sm lg:text-xs 2xl:text-[13px]"> {data}</span>
            <img src={Download} alt="download icon" className="size-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResult;
