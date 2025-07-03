import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import NavBar from "../components/NavBar";

export default function HomePage() {
  const location = useLocation();
  const images: string[] = location.state?.images || [];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-neutral-900 p-5 flex flex-col items-center overflow-hidden"
    >
      <NavBar />
      <p className="text-sm bg-pink-500 w-fit px-5 rounded-full text-pink-900 font-bold mb-4">
        Explore over 10 000 happy cats images
      </p>

      <h1 className="text-3xl lg:text-8xl font-black mb-10 text-center text-pink-500">
        Explore the world of cats with CatExplorer
      </h1>

      {/* Conteneur du scroll horizontal */}
      <div className="w-full h-[60vh] flex items-center">
        <motion.div
          ref={containerRef}
          className="flex gap-8 items-center h-full overflow-x-auto px-[30vw] py-10 hide-scrollbar"
        >
          {images.map((url, i) => (
            <ImageCard
              key={i}
              url={url}
              index={i}
              totalItems={images.length}
              scrollProgress={scrollXProgress}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
