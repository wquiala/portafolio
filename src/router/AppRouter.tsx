import { AboutMe, Contact, Experience, Projects, Skills } from "@/pages";
import { Education } from "@/pages/Education";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about_me" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
};
