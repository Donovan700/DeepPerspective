import React from 'react';

interface BottomProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollToBottom: React.FC<BottomProps> = ({ scrollContainerRef }) => {
  const handleScrollToBottom = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  return (
    <button onClick={handleScrollToBottom}>Défiler en bas</button>
  );
};

export default ScrollToBottom;
