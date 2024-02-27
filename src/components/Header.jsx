import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import redux
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slice/themeSlice";

//import components
import { ReactComponent as LogoIcon } from "../assets/logo_dark.svg";
import { ReactComponent as LightLogoIcon } from "../assets/logo_light.svg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import NavMobile from "./nav-items/NavMobile";
//import Socials from "./Socials";
import Nav from "./nav-items/Nav";

const Header = () => {
  //redux theme state
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  //handle switch theme
  const handleThemeSwitch = () => {
    dispatch(toggleTheme());
  };

  //useEffect to implement theme mode to the entire page
  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="h-15 flex flex-col top-0 text-primary dark:bg-dark dark:text-light px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* left logo */}
        {/* the logo's changing depending on the theme mode */}
        <Link to="/">
          {theme === "light" ? (
            <LightLogoIcon className="size-32" />
          ) : (
            <LogoIcon className="size-32" />
          )}
        </Link>
        {/* right nav */}
        <div className="hidden lg:flex items-center">
          {/* nav is hidden when on the small screen */}
          <Nav className="hidden" />
          <button
            onClick={handleThemeSwitch} /* calling the switsh theme function */
            className="visible dark:text-light rounded-full w-10 h-10 pl-5"
          >
            {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
          </button>
        </div>
        {/* nav mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={handleThemeSwitch}
            className="dark:text-light rounded-full w-10 h-10 pr-5"
          >
            {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
          </button>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
