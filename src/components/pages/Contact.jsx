import React from "react";
//import icons and text for the contact info
import { contact } from "../../data";

const Contact = () => {
  return (
    <section className="section items-center justify-center lg:bg-cover lg:bg-center flex flex-col dark:bg-dark dark:text-light lg:bg-no-repeat overflow-hidden ">
      <div className="flex flex-col  items-center">
        {/* section title */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="section-title text-dark dark:text-light">
            Contact me:
          </h2>
        </div>

        <div className="text-primary dark:text-light flex items-center justify-center lg:gap-x-5 flex-row">
          {/* info */}

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-8 ">
            {/* map through the contact items to get necessary data */}
            {contact.map((item, index) => {
              const { icon, title, subtitle } = item;
              return (
                <div className="flex lg:flex-col items-center" key={index}>
                  <div className="text-accent w-14 h-14 flex justify-center pr-2 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div className="flex flex-col text-left lg:items-center gap-x-5 ">
                    <h4 className="font-body text-xl mb-1 text-primary dark:text-light ">
                      {title}
                    </h4>
                    <div className="flex gap-2">
                      <p className="mb-1">{subtitle}</p>
                      <a className="text-base font-bold mb-3" href={item.href}>
                        {item.description}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
