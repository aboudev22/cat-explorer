import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const count = useMotionValue(0);
  const [displayer, setDisplayer] = useState(0);

  useEffect(() => {
    const controls = animate(count, 99, {
      duration: 0.8,
      onUpdate: (latest) => {
        setDisplayer(Math.floor(latest));
      },
    });

    return () => controls.stop();
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl font-bold text-pink-500">{displayer}%</p>
        <div className="rounded-md bg-white/20">
          <motion.div
            transition={{ ease: "linear" }}
            style={{ scaleX: displayer / 100 }}
            className="w-full md:w-sm origin-left h-10 rounded-md bg-pink-500"
          />
        </div>
      </div>
    </div>
  );
}
