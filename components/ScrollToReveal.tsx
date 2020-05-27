import React, {
  ReactElement,
  useRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import mapRange from "../utils/mapRange";

interface Props {
  children: ReactNode;
  opacity: [number, number];
}

export default function ScrollToReveal({
  children,
  opacity,
}: Props): ReactElement {
  const wrapper = useRef<HTMLDivElement>(null);
  const [currentOpacity, setCurrentOpacity] = useState(opacity[0]);

  let scheduledAnimationFrame = false;

  const readAndUpdatePage = () => {
    if (wrapper?.current !== null) {
      const scrollTop = wrapper.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      let progress = (scrollTop + 200) / windowHeight;

      if (progress > 1) {
        progress = 1;
      } else if (progress < 0) {
        progress = 0;
      } else {
      }

      const mappedProgress = mapRange(progress, opacity[0], opacity[1], 1, 0);

      setCurrentOpacity(mappedProgress);
      scheduledAnimationFrame = false;
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      if (scheduledAnimationFrame) {
        return;
      }

      scheduledAnimationFrame = true;
      requestAnimationFrame(readAndUpdatePage);
    };
  }, []);

  return (
    <div ref={wrapper} style={{ opacity: currentOpacity.toFixed(2) }}>
      {children}
    </div>
  );
}
