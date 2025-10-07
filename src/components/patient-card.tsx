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
    <div className="bg-white rounded-2xl shadow-xs p-5 flex flex-col items-center w-full">
      <img
        src={avatar}
        alt={name}
        className="size-30 xl:size-40 2xl:size-50 rounded-full object-cover mb-3"
      />
      <h2 className="card-title-24pt mb-8 2xl:mb-10">{name}</h2>

      <div className="w-full flex flex-col gap-5 mb-8">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={item.icon} className="size-10 xl:size-10.5" alt="icon" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-dark-sm">
                {item.title}
              </span>
              <span className="capitalize text-sm font-bold">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full xl:w-3/4 py-4 my-4  body-emphasized-14pt bg-active-1 hover:bg-active-1/75 cursor-pointer rounded-full transition-colors">
        Show All Information
      </button>
    </div>
  );
};

export default PatientCard;
