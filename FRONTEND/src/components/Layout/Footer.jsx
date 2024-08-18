import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithZeeshu.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100077367023818"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@sparksurya2656 "} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/surya-yadav-b51007218/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sparks__surya731/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;