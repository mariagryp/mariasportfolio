import { navigation } from "../../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[18px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-primary dark:text-light font-bold hover:text-accent dark:hover:text-accent cursor-pointer"
              key={index}
            >
              <NavLink
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
