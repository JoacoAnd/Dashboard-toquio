import React, {useState} from 'react';
import {Button} from './ButtonScroll';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        <i className="fa-solid fa-arrow-up"></i>
    </Button>
  );
}
  
export default ScrollButton;