import { InfoIcon, ExperienceIcon, EducationIcon, IconStack } from "./Icons";

export const HeaderAPP: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-4 text-lg">
      <div className="justify-between">
        <a
          href="#acerca"
          className="flex-row justify-center cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        >
          <InfoIcon /> Acerca de mi
        </a>
        <a
          href="#experiencia"
          className="flex-row justify-center cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        >
          <ExperienceIcon /> Experiencia
        </a>
        <a
          href="#estudios"
          className="flex-row justify-center cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        >
          <EducationIcon /> Estudios
        </a>
        <a
          href="#estudios"
          className="flex-row justify-center cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        >
          <IconStack /> Mi stack
        </a>
      </div>
    </div>
  );
};
