import "./App.css";
import Dock from "./animated_components/Dock.jsx";
import { VscHome } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscTools } from "react-icons/vsc";
import { VscFolderLibrary } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";

function App() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () => alert("About Me!"),
    },
    {
      icon: <VscTools size={18} />,
      label: "Skills",
      onClick: () => alert("Skills!"),
    },
    {
      icon: <VscFolderLibrary size={18} />,
      label: "Projects",
      onClick: () => alert("Projects!"),
    },
    {
      icon: <VscHeart size={18} />,
      label: "Interests",
      onClick: () => alert("Interests!"),
    },
    {
      icon: <VscMail size={18} />,
      label: "Contact Me",
      onClick: () => alert("Contact Me!"),
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold underline">Digbijaya Lenka</h1>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      ;
    </>
  );
}

export default App;
