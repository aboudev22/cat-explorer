import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";

export default function App() {
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoader(true);
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  return <>{!isLoader ? <Loader /> : navigate("/home")}</>;
}
