import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: "pointer" }}>
        <BsLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/bipin-raj-sitoula/",
              "_blank"
            )
          }
        />
      </div>
      <div style={{ cursor: "pointer" }}>
        <FaFacebookF
          onClick={() =>
            window.open("https://www.facebook.com/bpnsitoula21/", "_blank")
          }
        />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsGithub
          onClick={() =>
            window.open("https://github.com/bipin-devops", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
