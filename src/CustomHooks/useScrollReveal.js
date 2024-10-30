import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const titlesRef = useRef([]);
  const imagesRef = useRef([]);
  const textBoxesRef = useRef([]);

  const handleRef = (refArray, index, el) => {
    refArray.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setTimeout(() => {
            //     entry.target.classList.add('active');
            //   }, 100);
            entry.target.classList.add('active');
          } else {
            // setTimeout(() => {
            //     entry.target.classList.remove('active');
            //   }, 100);
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold:0.85, 
        rootMargin:'45% 0px 0px 0px'
        // rootMargin:'0px 0px 28%' 
    } 
    );

    const elements = [...titlesRef.current, ...imagesRef.current, ...textBoxesRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return { titlesRef, imagesRef, textBoxesRef, handleRef };
};

export default useScrollReveal;
