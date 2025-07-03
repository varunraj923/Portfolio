import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostman,
} from 'react-icons/si';

const ExperienceCard = () => {
  return (
    <div className="w-full max-w-4xl p-6 mx-auto my-12 space-y-10">
      
      {/* SuperTrust Pvt. Ltd. */}
      <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQF0Y5PjK281yA/company-logo_200_200/company-logo_200_200/0/1652014291932/supertrust_homes_pvt_ltd_logo?e=2147483647&v=beta&t=i2zd7Sx_g5-_rp2YzVZDLgMY9hl6CNSsGpsQXM2g2gI"
              alt="SuperTrust Logo"
              className="object-contain w-10 h-10 rounded-md"
            />
            <h3 className="text-xl font-semibold">Web Developer Intern</h3>
          </div>
          <span className="text-sm text-blue-700 font-medium bg-blue-100 px-2 py-0.5 rounded-full">
            Apr 2025 – May 2025
          </span>
        </div>
        <p className="mb-1 text-sm text-gray-500">SuperTrust Pvt. Ltd. · Onsite · Noida, Uttar Pradesh</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>Designed and developed responsive web applications using React.js, JavaScript, and Tailwind CSS.</li>
          <li>Resolved high-priority bugs in the production environment to enhance reliability and client satisfaction.</li>
          <li>Optimized and updated website content to improve user engagement and experience.</li>
          <li>Collaborated with developers using Git and GitHub for efficient version control and workflow management.</li>
        </ul>

        <div className="mt-6">
          <h4 className="mb-2 text-sm font-semibold text-gray-600">Skills & Tools</h4>
          <div className="flex flex-wrap gap-4 text-2xl text-gray-700">
            <SiReact title="React.js" />
            <SiJavascript title="JavaScript" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiGit title="Git" />
            <SiGithub title="GitHub" />
          </div>
        </div>
      </div>

      {/* Bluestock Fintech */}
      <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQHP4iG3eYPHPA/company-logo_200_200/company-logo_200_200/0/1696913393804?e=2147483647&v=beta&t=HA4t0YUgW02oCMWaK5tRs4efzC-2EtEq_ftD3hpZw4E"
              alt="Bluestock Fintech Logo"
              className="object-contain w-10 h-10 rounded-md"
            />
            <h3 className="text-xl font-semibold">Software Development Intern</h3>
          </div>
          <span className="text-sm text-blue-700 font-medium bg-blue-100 px-2 py-0.5 rounded-full">
            Dec 2024 – Feb 2025
          </span>
        </div>
        <p className="mb-1 text-sm text-gray-500">Bluestock Fintech · Remote · Delhi, India</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>Designed and developed responsive web interfaces using React.js and Tailwind CSS.</li>
          <li>Contributed to the <b>IPO page</b> by implementing frontend components and improving data representation.</li>
          <li>Integrated RESTful APIs using Axios to streamline data flow and performance.</li>
          <li>Improved maintainability through automated testing and peer code reviews.</li>
          <li>Collaborated cross-functionally in Agile teams to ship high-impact features.</li>
        </ul>

        <div className="mt-6">
          <h4 className="mb-2 text-sm font-semibold text-gray-600">Skills & Tools</h4>
          <div className="flex flex-wrap gap-4 text-2xl text-gray-700">
            <SiJavascript title="JavaScript" />
            <SiReact title="React.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiGit title="Git" />
            <SiGithub title="GitHub" />
            <SiPostman title="Postman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;




