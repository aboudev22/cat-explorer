import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [percent, setPercent] = useState(100);
  const count = useMotionValue(0);
  const [displayer, setDisplayer] = useState(0);

  useEffect(() => {
    const controls = animate(count, percent, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplayer(Math.floor(latest));
      },
    });

    return () => controls.stop();
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl font-bold text-amber-100">{displayer}%</p>
        <div className="rounded-md bg-white/20">
          <motion.div
            transition={{ ease: "linear" }}
            style={{ scaleX: displayer / 100 }}
            className="w-full md:w-sm origin-left h-10 rounded-md bg-amber-100"
          />
        </div>
      </div>
    </div>
  );
}
