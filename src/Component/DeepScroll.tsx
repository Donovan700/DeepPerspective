import React, { useRef } from 'react';

const DeepScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-item">
          <h1>Hello</h1>
          <h1>Pandas</h1>
        </div>
      </div>
      <div className="scroll-controls">
        <button onClick={scrollToTop}>Défiler en haut</button>
        <button onClick={scrollToBottom}>Défiler en bas</button>
      </div>
    </div>
  );
};

export default DeepScroll;
