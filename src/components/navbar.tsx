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
    <nav
      className="flex justify-between items-center bg-white px-4 py-3.5 2xl:py-4.5 mt-1 lg:px-4 xl:px-6 rounded-full relative"
      aria-label="Main navigation"
    >
      <img
        src={Logo}
        alt="Company logo"
        className="h-6 sm:h-7 md:h-8 xl:h-10 2xl:h-12"
      />

      <div className="hidden lg:flex lg:gap-5 xl:gap-8" role="menubar">
        {navlist.map((item) => {
          const isActive = item.title === "patients";
          return (
            <button
              key={item.title}
              type="button"
              role="menuitem"
              aria-current={isActive ? "page" : undefined}
              tabIndex={0}
              className={cn(
                "flex items-center lg:gap-1.5 xl:gap-2 body-emphasized-14pt capitalize transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-active-1",
                "rounded-[41px] py-2",
                isActive
                  ? "bg-active-1 px-3"
                  : "hover:bg-active-1 hover:px-3 hover:scale-[1.05] hover:shadow-sm"
              )}
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="max-h-4"
              />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <img
              src={DoctorAvatar}
              alt="Profile of Dr. Jose Simmons"
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
            <button
              aria-label="Settings"
              className="focus-visible:ring-2 focus-visible:ring-active-1 rounded-md"
            >
              <img src={Setting} alt="" className="size-4 md:size-4.5" />
            </button>
            <button
              aria-label="More options"
              className="focus-visible:ring-2 focus-visible:ring-active-1 rounded-md"
            >
              <img src={VeritcalMore} alt="" className="size-4 md:size-4.5" />
            </button>
          </div>
        </div>

        <button
          className="flex items-center justify-center p-2 rounded-md lg:hidden focus-visible:ring-2 focus-visible:ring-active-1"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img src={Logo} alt="Company logo" className="h-8" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-active-1"
            aria-label="Close menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-2">
          {navlist.map((item, index) => {
            const isActive = item.title === "patients";
            return (
              <button
                key={index}
                type="button"
                className={cn(
                  "flex items-center gap-3 body-emphasized-14pt capitalize transition-all duration-300 ease-in-out rounded-[41px] py-3 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-active-1",
                  isActive
                    ? "bg-active-1"
                    : "hover:bg-active-1 active:bg-active-1"
                )}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="text-base">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-6 left-2 right-2 flex max-sm:gap-3 items-center">
          <div className="flex items-center gap-3 py-4 px-1.5 bg-gray-50 rounded-2xl">
            <img
              src={DoctorAvatar}
              alt="Profile of Dr. Jose Simmons"
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

          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              aria-label="Settings"
              className="focus-visible:ring-2 focus-visible:ring-active-1 rounded-md"
            >
              <img src={Setting} alt="" className="size-6" />
            </button>
            <button
              aria-label="More options"
              className="focus-visible:ring-2 focus-visible:ring-active-1 rounded-md"
            >
              <img src={VeritcalMore} alt="" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 animate-fadeIn"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
