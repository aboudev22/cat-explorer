import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function OrbitingCatButton() {
  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
      {/* Orbite visible seulement au survol */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute w-32 h-32 group-hover:flex hidden"
      >
        {/* Emoji positionné au bord de l’orbite */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl">
          🐈‍⬛
        </div>
      </motion.div>

      {/* Bouton principal */}
      <button className="relative z-[2] group bg-pink-500 flex gap-2 justify-center items-center px-4 py-2 rounded-md cursor-pointer hover:bright">
        <p className="text-sm text-amber-50 font-bold">
          Explore more than 10.000
        </p>
        <MoveRight color="oklch(98.7% 0.022 95.277)" />
      </button>
    </div>
  );
}
