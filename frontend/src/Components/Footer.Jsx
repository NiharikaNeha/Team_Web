import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-indigo-950 to-black text-white mt-20 overflow-hidden">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: "+=20",
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Logo */}
        <motion.h2
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_#9333ea]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          .WebTech
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
           We are a team dedicated to providing the best websites and services to our customers.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg text-white text-xl"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 25px #a855f7",
                rotate: 10,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Links */}
        <motion.ul
          className="flex flex-wrap justify-center space-x-6 mt-10 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {["Home", "Services", "Gallery", "Reviews", "Contact"].map(
            (item, i) => (
              <motion.li
                key={i}
                className="cursor-pointer hover:text-purple-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.li>
            )
          )}
        </motion.ul>

        {/* Bottom text */}
        <motion.div
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          © {new Date().getFullYear()} .WebTech, All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
