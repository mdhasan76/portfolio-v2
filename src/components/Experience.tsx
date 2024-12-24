import React from "react";

const Experience = () => {
  return (
    <div id="experience" className=" bg-gray-50 dark:bg-[#141414] py-16 px-5">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-8">Experience</h1>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-1 tracking-widest">
                Junior Developer (Backend)
              </h3>
              <p className="mb-3 font-thin tracking-widest italic">
                MindQuest Studio | April 2023 - December 2024
              </p>
              <p className="font-medium text-justify text-[18px] text-gray-600 dark:text-gray-200 leading-7">
                I have extensive experience working on large-scale ERP software,
                including Quest OS ERP and the backend of the Shukran Store
                E-Commerce App. Quest OS ERP is a comprehensive system designed
                to automate and manage modules such as sales, inventory,
                accounts, procurement, administration, HRM, logistics,
                workspace, and the e-commerce section. Throughout my career, I
                have developed over 500+ APIs, integrating functionalities
                seamlessly across systems. A notable achievement includes
                integrating the Zetko attendance device (IoT) with Quest OS ERP
                to streamline attendance management. Additionally, I have
                written advanced MongoDB aggregation queries to optimize data
                processing and analysis, further demonstrating my expertise in
                backend development and system design.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-1 tracking-widest">
                Web Developer (Intern)
              </h3>
              <p className="mb-3 font-thin tracking-widest italic">
                BongoDemy | February - March 2023
              </p>
              <p className="font-medium text-justify text-[18px] text-gray-600 dark:text-gray-200 leading-7">
                Collaborated with teammates, learned teamwork, and the best use
                of React.js, Tailwind. Figma to React.js conversion. Created
                accessible, responsive, and functional user interfaces with
                Pixel-perfect.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-8 mt-10 lg:mt-0">
              Education History
            </h1>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-1 tracking-widest">
                Higher School Certificate (HSC)
              </h3>
              <p className="mb-3 font-thin tracking-widest italic">
                Sarail Govt. College | 2019 - 2020
              </p>
              <p className="font-medium text-justify text-[18px] text-gray-600 dark:text-gray-200 leading-7">
                I graduated with a GPA of 4.50, specializing in Business
                Studies. During my studies, I was participated in social
                activities and organized game tournaments, which enhanced my
                teamwork, and event management skills. These experiences not
                only complemented my academic achievements but also enriched my
                overall development.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-1 tracking-widest">
                Secondary School Certificate (SSC)
              </h3>
              <p className="mb-3 font-thin tracking-widest italic">
                Sarail Annada Govt. High School | 2016 - 2018
              </p>
              <p className="font-medium text-justify text-[18px] text-gray-600 dark:text-gray-200 leading-7">
                I graduated with a GPA of 4.50, specializing in Business
                Studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
