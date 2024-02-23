import React from 'react';

interface TopProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollToTop: React.FC<TopProps> = ({ scrollContainerRef }) => {
  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <button onClick={handleScrollToTop}>Défiler en haut</button>
  );
};

export default ScrollToTop;