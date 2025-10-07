import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Chat,
  CreditCard,
  DoctorAvatar,
  HouseIcon,
  Logo,
  VeritcalMore,
  PeopleGroup,
  Setting,
} from "../assets";
import { Menu, X } from "lucide-react";

const navlist = [
  { title: "home", icon: HouseIcon },
  { title: "patients", icon: PeopleGroup },
  { title: "schedule", icon: Calendar },
  { title: "message", icon: Chat },
  { title: "transactions", icon: CreditCard },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3.5 2xl:py-4.5 mt-1 lg:px-4 xl:px-6 rounded-full relative">
      <img
        src={Logo}
        alt="logo"
        className="h-6 sm:h-7 md:h-8 xl:h-10 2xl:h-12"
      />

      {/* desktop nav */}
      <div className="hidden lg:flex lg:gap-5 xl:gap-8">
        {navlist.map((item) => {
          const isActive = item.title === "patients";
          return (
            <div
              key={item.title}
              className={cn(
                "flex items-center lg:gap-1.5 xl:gap-2 body-emphasized-14pt capitalize cursor-pointer transition-all duration-300",
                "rounded-[41px] py-2",
                isActive
                  ? "bg-active-1 px-3"
                  : "hover:bg-active-1 hover:px-3 hover:scale-[1.05] hover:shadow-sm"
              )}
            >
              <img src={item.icon} alt={item.title} className="max-h-4" />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>

      {/* right section */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* doctor info */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <img
              src={DoctorAvatar}
              alt="dr avatar"
              className="size-8 md:size-10"
            />
            <div className="flex flex-col">
              <div className="body-emphasized-14pt xl:text-sm lg:text-xs text-xs md:text-sm">
                Dr. Jose Simmons
              </div>
              <div className="body-secondary-info-14pt text-xs">
                General Practitioner
              </div>
            </div>
          </div>

          <hr className="w-[1.25px] h-8 md:h-10 bg-border" />

          <div className="flex items-center gap-2">
            <img src={Setting} alt="setting" className="size-4 md:size-4.5" />
            <img
              src={VeritcalMore}
              alt="more options"
              className="size-4 md:size-4.5"
            />
          </div>
        </div>

        {/* mobile menu button */}
        <button
          className="flex items-center justify-center p-2 rounded-md lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* sidebar header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img src={Logo} alt="logo" className="h-8" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* navigation items */}
        <div className="p-4 flex flex-col gap-2">
          {navlist.map((item, index) => {
            const isActive = item.title === "patients";
            return (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-3 body-emphasized-14pt capitalize cursor-pointer transition-all duration-300 ease-in-out",
                  "rounded-[41px] py-3 px-4",
                  isActive
                    ? "bg-active-1"
                    : "hover:bg-active-1 active:bg-active-1"
                )}
                onClick={() => setMenuOpen(false)}
              >
                <img src={item.icon} alt={item.title} className="size-5" />
                <div className="text-base">{item.title}</div>
              </div>
            );
          })}
        </div>

        {/* mobile doctor info  */}
        <div className="absolute bottom-6 left-2 right-2 flex items-center">
          <div className="flex items-center gap-3 py-4 px-1.5 bg-gray-50 rounded-2xl">
            <img
              src={DoctorAvatar}
              alt="dr avatar"
              className="size-12 rounded-full"
            />
            <div className="flex flex-col flex-1">
              <div className="body-emphasized-14pt text-sm">
                Dr. Jose Simmons
              </div>
              <div className="body-secondary-info-14pt text-xs">
                General Practitioner
              </div>
            </div>
          </div>

          {/* mobile setting */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <img
              src={Setting}
              alt="setting"
              className="size-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={VeritcalMore}
              alt="more options"
              className="size-6 cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
      </div>

      {/* backdrop for mobile sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
