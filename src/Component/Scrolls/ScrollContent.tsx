import React, { useRef, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import "./ScrollContent.css";

interface ScrollContentProps {
  data: string[];
  containerId: string;
  fullHeight?: boolean;
}

const ScrollContent: React.FC<ScrollContentProps> = ({ data, containerId, fullHeight = false }) => {
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId,
      smooth: true,
      duration: 500,
    });
  }, [data, containerId]);

  return (
    <div className={`scroll-item ${fullHeight ? 'full-height' : ''}`} id={containerId} ref={scrollContentRef} style={{ overflowY: 'auto' }}>
      {data.map((item, index) => (
        <div key={index} className="colored-item" style={{ fontSize: index === 0 ? '32px' : '16px' }}>{item}</div>
      ))}
    </div>
  );
};

export default ScrollContent;
