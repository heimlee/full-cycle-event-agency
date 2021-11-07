import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const setFormEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFormEvent);
    return () => {
      window.removeEventListener("mousemove", setFormEvent);
    }
  }, []);

  return position;
};
