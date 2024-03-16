import { useEffect, useState } from "react"

function useDetectHover(elementId,threshold) {
    const [hovered, setHovered] = useState(false)
    
    function handleMouseLeave(event) {
      const element = document.getElementById(elementId);
      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Ampliar el área de detección al dejar el componente
      const isHovered = (
        mouseX >= left - threshold &&
        mouseX <= left + width + threshold &&
        mouseY >= top - threshold &&
        mouseY <= top + height + threshold
      );

      setHovered(isHovered);
    }
    useEffect(()=>{
        const myElement = document.getElementById(elementId)
        myElement.addEventListener('mouseenter', ()=>{
          setHovered(true)
        })
       myElement.addEventListener('mouseleave',handleMouseLeave)
      },[])

  return {hovered}
}

export default useDetectHover