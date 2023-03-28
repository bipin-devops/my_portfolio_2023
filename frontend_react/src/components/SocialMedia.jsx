import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/bipin-raj-sitoula/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a
        href="https://www.facebook.com/bpnsitoula21/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>

      <a
        href="https://github.com/bipin-devops"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
