export const handleScroll = () => {
    const elements = document.querySelectorAll(".animated");
    elements.forEach(e=>{
      if(e && window.scrollY + 400 > e.offsetTop){
        e.classList.add('animate')
      }
      if (e && window.scrollY  < (e.offsetTop - 480) ){
        e.classList.remove('animate')
      }

    })
  };