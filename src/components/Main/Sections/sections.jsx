import Section from "./Section";

import AccessAnywhere from "../../../assets/images/icon-access-anywhere.svg";
import Security from "../../../assets/images/icon-security.svg";
import AnyFile from "../../../assets/images/icon-any-file.svg";
import Collaboration from "../../../assets/images/icon-collaboration.svg";

const Sections = () => {
  const gridItems = [
    {
      image: AccessAnywhere,
      title: "Access your files, anywhere",
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      image: Security,
      title: "Security you can trust",
      text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      image: Collaboration,
      title: "Real-time collaboration",
      text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      image: AnyFile,
      title: "Store any type of file",
      text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <div className="section-container">
      {gridItems &&
        gridItems.map((item, index) => <Section key={index} {...item} />)}
    </div>
  );
};

export default Sections;
