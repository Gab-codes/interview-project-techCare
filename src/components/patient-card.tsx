import React from "react";
interface InfoItem {
  icon: string;
  title: string;
  value: string;
}

interface PatientCardProps {
  name: string;
  avatar: string;
  info: InfoItem[];
}

const PatientCard: React.FC<PatientCardProps> = ({ name, avatar, info }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xs max-lg:pt-6 p-4 md:px-10 lg:p-3 xl:p-5 flex flex-col items-center w-full">
      <img
        src={avatar}
        alt={name}
        className="lg:size-25 xl:size-40 2xl:size-50 rounded-full object-cover  2xl:mt-2 mb-3 2xl:mb-5"
      />
      <h2 className="lg:text-lg lg:tracking-tighter xl:tracking-normal text-dark-sm font-bold xl:card-title-24pt mb-6 2xl:mb-8">
        {name}
      </h2>

      <div className="w-full flex flex-col gap-5 mb-8">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={item.icon} className="size-8 xl:size-10.5" alt="icon" />
            <div className="flex flex-col">
              <span className="lg:text-xs xl:text-sm font-medium text-dark-sm">
                {item.title}
              </span>
              <span className="capitalize lg:text-xs xl:text-sm font-bold">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full xl:w-3/4 py-4 px-0.75 my-2 lg:tracking-tight lg:text-xs font-bold xl:tracking-normal xl:body-emphasized-14pt bg-active-1 hover:bg-active-1/75 cursor-pointer rounded-full transition-colors">
        Show All Information
      </button>
    </div>
  );
};

export default PatientCard;
