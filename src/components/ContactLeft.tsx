import {  FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Akintunde James</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a motivated software developer with a strong interest in UI/UX design and a drive to enhance my knowledge of application structure and practical programming skills. Proficient in web/advanced programming, debugging, and app development, I am actively seeking opportunities to make meaningful contributions to project success.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1(586)4203739</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">burnout38x@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/*<a href="https://www.youtube.com/@reactjsBD" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
  </a>*/}
          <a
            href="https://www.linkedin.com/in/james-akintunde-584059249/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          {/*<a href="https://www.facebook.com/Noorlalu143/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
</a>*/}
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
