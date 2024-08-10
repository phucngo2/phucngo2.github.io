import { useEffect, useRef } from "react";

export const useObserver = (callback, elementRef) => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        if (callback) {
          callback(first);
        }
      }
    })
  );

  useEffect(() => {
    if (observer?.current) {
      observer.current.observe(elementRef.current);
    }

    return () => observer?.current?.disconnect();
  }, []);

  return { observer };
};
