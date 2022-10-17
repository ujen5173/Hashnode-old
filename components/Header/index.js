import Image from "next/image";
import Hamburger from "public/icons/hamburger";
import LogoWithText from "public/icons/logoWithText";
import Moon from "public/icons/moon";
import Notification from "public/icons/notification";
import Pen from "public/icons/pen";
import Sun from "public/icons/sun";
import DEFAULT_PROFILE from "public/images/default.webp";
import { useContext } from "react";
import {
  DEFAULT_BUTTON_ICON_SIZE,
  DEFAULT_ICON_SIZE,
  DEFAULT_LOGO_HEIGHT,
  DEFAULT_LOGO_WIDTH,
  DEFAULT_PROFILE_SIZE,
} from "utils/constant";
import { Context } from "utils/context/main";

const Header = () => {
  const { theme, setTheme } = useContext(Context);

  return (
    <header className="w-full bg-white dark:bg-primary-dark-200 border-b border-text-dark-200 dark:border-primary-dark-400 mb-spacing">
      <div className="2xl:container w-full mx-auto px-4 py-4 flex gap-spacing items-center justify-between">
        <div className="flex items-center gap-4">
          <Hamburger
            w={DEFAULT_ICON_SIZE}
            h={DEFAULT_ICON_SIZE}
            className="block lg:hidden fill-black dark:fill-text-dark-500"
          />
          <LogoWithText
            w={DEFAULT_LOGO_WIDTH}
            h={DEFAULT_LOGO_HEIGHT}
            className="fill-black dark:fill-white"
          />
        </div>

        <div className="hidden lg:flex relative w-full">
          <input
            type="text"
            placeholder="Search for tags, people, articles, and many more"
            className="outline-none w-full px-6 py-2 rounded-full bg-gray-100 placeholder-text-light-300 border border-text-dark-300"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-white px-2 py-1 rounded-md border border-text-dark-300 text-sm">
            /
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full btn-primary hidden md:flex">
            <Pen w={DEFAULT_BUTTON_ICON_SIZE} h={DEFAULT_BUTTON_ICON_SIZE} />
            <span>Write</span>
          </button>
          <button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <Sun
                w={DEFAULT_ICON_SIZE}
                h={DEFAULT_ICON_SIZE}
                className="fill-black dark:fill-text-dark-500"
              />
            ) : (
              <Moon
                w={DEFAULT_ICON_SIZE}
                h={DEFAULT_ICON_SIZE}
                className="fill-black dark:fill-text-dark-500"
              />
            )}
          </button>
          <button>
            <Notification
              w={DEFAULT_ICON_SIZE}
              h={DEFAULT_ICON_SIZE}
              className="hidden md:flex fill-black dark:fill-text-dark-500"
            />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <button>
              <Image
                src={DEFAULT_PROFILE}
                width={DEFAULT_PROFILE_SIZE}
                height={DEFAULT_PROFILE_SIZE}
                className="object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
