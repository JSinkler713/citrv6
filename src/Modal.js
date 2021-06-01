import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  // container for state that will survive pass render cycles
  const elementRef = useRef(null)

  if (!elementRef.current) {
    // will only create once, and not recreate after each render
    elementRef.current = document.createElement('div')
  }

  useEffect(()=> {
    modalRoot.appendChild(elementRef.current);

    // cleanup when unmounting removes modal
    // functoin gets called on unmount
    return ()=> modalRoot.removeChild(elementRef.current)
  }, [])

  return createPortal(<div>{ children }</div>, elementRef.current);
}

export default Modal


