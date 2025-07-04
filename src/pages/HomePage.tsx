import clsx from "clsx";
import { motion } from "framer-motion";
import OrbitingCatButton from "../components/ButtonMore";
import NavBar from "../components/NavBar";
import IMAGES_PROPS from "../stores/heroImages";

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
        className="relative z-[8] flex h-72 w-2/3"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.img
            variants={itemVariants}
            custom={{ x: IMAGES_PROPS[i].x, y: IMAGES_PROPS[i].y }}
            layoutId={`img-${i + 1}`}
            whileHover={{ scale: 1.2, rotate: 0, zIndex: 20 }}
            src={`/src/assets/cat${i + 1}.jpg`}
            style={{
              top: IMAGES_PROPS[i].top,
              left: IMAGES_PROPS[i].left,
              rotate: IMAGES_PROPS[i].rotate,
              borderColor: IMAGES_PROPS[i].color,
            }}
            className={clsx(
              "object-cover absolute rounded-2xl w-52 h-52 shadow-2xl/30 border-8 border-l-fuchsia-500 cursor-pointer",
              `z-[${i + 10}]`
            )}
            alt={`cat-${i + 1}`}
          />
        ))}
      </motion.div>
      <OrbitingCatButton />
    </motion.div>
  );
}
