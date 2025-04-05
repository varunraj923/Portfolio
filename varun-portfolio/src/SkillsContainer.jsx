import React from "react";
import Skills from "./Skills";


const SkillsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around ml-16">
      {/* Column-wise layout for small screens */}
      <Skills
        title="Languages"
        img1={"https://img.icons8.com/?size=100&id=13441&format=png&color=000000"}
        img2={"https://img.icons8.com/?size=100&id=7655&format=png&color=000000"}
        img3={"https://img.icons8.com/?size=100&id=13679&format=png&color=000000"}
        img4={"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"}
        para="My favorite languages for systems programming, software engineering, and data analysis."
      />

      <Skills
        title="Front-End"
        img1={"https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"}
        img2={"https://img.icons8.com/?size=100&id=20909&format=png&color=000000"}
        img3={"https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000"}
        img4={"https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"}
        para="My preferred technologies for front-end web development and component design."
      />

      <Skills
        title="Back-End"
        img1={"https://img.icons8.com/?size=100&id=0RLm5POuaxVN&format=png&color=000000"}
        img2={"https://img.icons8.com/?size=100&id=hKw7Mn8TNTuz&format=png&color=000000"}
        img3={"https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000"}
        img4={"https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"}
        para="My preferred technologies for back-end web programming and database architecture."
      />
{/* https://img.icons8.com/?size=100&id=22813&format=png&color=000000 */}
      <Skills
        title="Tools"
        img1={"https://img.icons8.com/?size=100&id=XCNhMfBsqfX1&format=png&color=000000"}
        img2={"https://img.icons8.com/?size=100&id=20906&format=png&color=000000"}
        img3={"https://img.icons8.com/?size=100&id=62856&format=png&color=000000"}
        img4={"https://img.icons8.com/?size=100&id=22813&format=png&color=000000"}
        para="My favorite tools for version control, code editing, and container orchestration."
      />
    </div>
  );
};

export default SkillsContainer;
