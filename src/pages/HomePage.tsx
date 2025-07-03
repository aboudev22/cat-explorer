import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// HomePage.tsx
export default function HomePage() {
  const location = useLocation();
  const images: string[] = location.state?.images || [];

  console.log("Images reçues:", images);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-neutral-900 p-4 grid grid-cols-4 gap-4"
    >
      {images.map((url, i) => (
        <motion.img
          key={i}
          src={url}
          alt="cat"
          className="rounded-lg w-52 h-52 object-cover"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </motion.div>
  );
}
