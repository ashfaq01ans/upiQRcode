import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900  text-gray-300 flex flex-col items-center justify-center px-6 py-8 rounded-t-2xl border-t border-gray-700 ">
      {/* Top Text */}
      <div className="flex flex-col items-center gap-2 text-sm md:text-base">
        <p className="flex items-center gap-2 opacity-50">
          Built with
          <span className="text-red-300 mt-1.5">❤</span>
          and React
          <FaReact className="text-blue-400 text-lg hover:rotate-180 transition duration-500" />
        </p>

        <p className="opacity-60">© 2026 Ashfaq Ansari.</p>
      </div>

      {/* Divider */}
      <div className=" w-full max-w-xs h-px bg-gray-700 my-5"></div>
      {/* Links */}
      <div className="flex items-center justify-center gap-8 my-12 text-xl ">
        <a
          href="#"
          target="_blank"
          className="  hover:scale-110 transition-all duration-300"
        >
          <FaGithub  />
        </a>

        <a
          href="#"
          target="_blank"
          className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
