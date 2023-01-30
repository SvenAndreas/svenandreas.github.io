import { useRef, useEffect } from "react";
// import _ from 'lodash'

const useScrollEffect = () => {
  const imageRef = useRef(null);

  useEffect(() => {
   
    const windowSize = window.screen.availWidth;
    if (windowSize > '1000'){
      let handleScroll = () => {
      imageRef.current.style.transform = `translateY(${window.pageYOffset}px)`;
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // } else {
    //   let handleScroll = _.debounce(() => {
    //     imageRef.current.style.transform = `translateY(${window.pageYOffset}px)`;
    //   }, 1);
    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }
    
    
  }, []);

  return imageRef;
};

export default useScrollEffect;

