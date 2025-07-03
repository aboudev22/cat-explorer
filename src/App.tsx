import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import useCatsImages from "./hooks/useCatsImages";

export default function App() {
  const navigate = useNavigate();
  const { data: images, isSuccess } = useCatsImages();

  useEffect(() => {
    if (!isSuccess || !images?.length) return;

    const preloadImages = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Erreur de chargement: ${src}`));
      });
    };

    const prepare = async () => {
      try {
        await Promise.all(images.map(preloadImages));
        setTimeout(() => {
          navigate("home", { state: { images } });
        }, 3000);
      } catch (error) {
        console.error("Erreur de préchargement : ", error);
      }
    };

    prepare();
  }, [isSuccess, images, navigate]);

  return <Loader />;
}
