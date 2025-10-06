import { cn } from "@/lib/utils";
import { HorizontalMore, Search } from "@/assets";
import { patients } from "@/constants";

const Patients = () => {
  return (
    <div className="bg-white rounded-2xl py-3 lg:w-65 xl:w-85 2xl:w-91.75 h-full">
      <div className="flex justify-between py-2 px-5">
        <div className="text-xl font-bold">Patients</div>
        <img src={Search} alt="search" />
      </div>

      {/* <-- scroll container: overflow-y enabled and custom-scrollbar class applied */}
      <div
        className="flex flex-col gap-2 mt-8 mb-3 overflow-y-auto overflow-x-hidden h-110 custom-scrollbar px-0"
        style={{ maxHeight: "calc(100% - 64px)" }} // adjust 64px if your header/footer heights differ
      >
        {patients.map((patient) => {
          const isActive = patient.isActive === true;

          return (
            <div
              key={patient.name}
              role="button"
              tabIndex={0}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex items-center justify-between w-full px-5 py-4 transition-transform duration-300 ease-in-out",
                isActive
                  ? "bg-active-2"
                  : "hover:bg-active-2/60 hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-active-1/60"
              )}
            >
              <div className="flex gap-2.5 items-center">
                <img
                  src={patient.avatar}
                  alt={patient.name}
                  className="size-9 lg:size-10 2xl:size-12"
                />
                <div className="flex flex-col">
                  <div className="body-emphasized-14pt">{patient.name}</div>
                  <div className="flex gap-2">
                    <div className="text-sm">{patient.gender}, </div>
                    <div className="body-secondary-info-14pt">
                      {patient.age}
                    </div>
                  </div>
                </div>
              </div>

              <img src={HorizontalMore} alt="more icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Patients;
