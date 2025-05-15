import React, { useState, useEffect } from "react";
import BootScreen from "./Components/BootScreen";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import "./App.css";

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!bootComplete) return <BootScreen />;

  return (
    <div className="h-screen flex flex-col bg-black text-green-400 font-mono">
      <Header />
      <div className="flex flex-1">
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <main className="flex-1 p-4 overflow-auto">
          {selectedMenu === "about" && <AboutSection />}
          {selectedMenu === "projects" && <ProjectsSection />}
          {selectedMenu === "experience" && <ExperienceSection />}
        </main>
      </div>
    </div>
  );
}

export default App;
