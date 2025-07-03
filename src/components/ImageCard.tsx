import { motion, useTransform, type MotionValue } from "framer-motion";

export default function ImageCard({
  url,
  index,
  totalItems,
  scrollProgress,
}: {
  url: string;
  index: number;
  totalItems: number;
  scrollProgress: MotionValue<number>;
}) {
  // Calcul de la position relative
  const centerPosition = index / totalItems;
  const xRange = [
    (index - 1) / totalItems,
    centerPosition,
    (index + 1) / totalItems,
  ];

  // Animation de la hauteur (200px au centre, 400px aux bords)
  const height = useTransform(scrollProgress, xRange, [350, 280, 350], {
    clamp: false,
  });

  return (
    <motion.img
      src={url}
      alt="cat"
      style={{ height }}
      className="w-52 rounded-md object-cover shadow-lg"
    />
  );
}
