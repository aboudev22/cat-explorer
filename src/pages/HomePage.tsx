import clsx from "clsx";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const itemsProps = [
  { top: 20, left: 0, rotate: -10, color: "#fb2c36", y: -500, x: 0 },
  { top: -20, left: 150, rotate: -6, color: "#fb2c36", y: -200, x: -110 },
  { top: 0, left: 250, rotate: -3, color: "#fb2c36", y: -200, x: 0 },
  { top: -20, left: 400, rotate: -5, color: "#fb2c36", y: -200, x: 250 },
  { top: -5, left: 500, rotate: 2, color: "#fb2c36", y: -200, x: 400 },
  { top: 10, left: 600, rotate: 1, color: "#fb2c36", y: -200, x: 560 },
  { top: 20, left: 700, rotate: 6, color: "#fb2c36", y: -200, x: 610 },
  { top: 20, left: 800, rotate: 8, color: "#fb2c36", y: -200, x: 800 },
  { top: 20, left: 900, rotate: 10, color: "#fb2c36", y: -200, x: 920 },
  { top: 0, left: 1000, rotate: 10, color: "#fb2c36", y: -200, x: 1010 },
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: (custom: { x: number; y: number }) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
  }),
  animate: { opacity: 1, y: 0, x: 0 },
};

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-amber-50 p-5 flex flex-col items-center overflow-hidden will-change-transform"
    >
      <NavBar />
      <p className="text-sm bg-pink-500 w-fit px-5 rounded-full text-pink-900 font-bold mb-4">
        Explore over 10 000 happy cats images
      </p>

      <h1 className="text-3xl lg:text-8xl font-black mb-10 text-center text-pink-500">
        Explore the world of cats with CatExplorer
      </h1>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative flex h-72 w-2/3"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.img
            variants={itemVariants}
            custom={{ x: itemsProps[i].x, y: itemsProps[i].y }}
            layoutId={`img-${i + 1}`}
            whileHover={{ scale: 1.2, rotate: 0, zIndex: 20 }}
            src={`/src/assets/cat${i + 1}.jpg`}
            style={{
              top: itemsProps[i].top,
              left: itemsProps[i].left,
              rotate: itemsProps[i].rotate,
            }}
            className={clsx(
              "object-cover absolute rounded-2xl w-52 h-52 shadow-2xl/30 border-8 border-pink-500 cursor-pointer",
              `z-[${i + 10}]`
            )}
            alt={`cat-${i + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
