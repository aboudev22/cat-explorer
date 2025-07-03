import { motion } from "framer-motion";
import { Cat } from "lucide-react";

const items = ["Explore", "Breed", "Favorites"];

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Cat size={25} color="#f6339a" strokeWidth={4} />
        <p className="text-xl text-pink-500 font-black">CatExplorer</p>
      </div>
      <div className="flex gap-4 ml-14">
        {items.map((item) => (
          <p className="text-pink-500 text-xl cursor-pointer font-black">
            {item}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="py-2 px-3 font-black text-xl rounded-xl bg-neutral-800 text-pink-500 cursor-pointer"
        >
          Log In
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="py-2 px-3 font-black text-xl rounded-xl bg-pink-500 cursor-pointer"
        >
          Sign Up
        </motion.button>
      </div>
    </nav>
  );
}
