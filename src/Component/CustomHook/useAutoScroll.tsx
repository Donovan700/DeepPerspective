import { useEffect } from 'react';

const useAutoScroll = (scrollContainerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        if (scrollTop === scrollHeight - clientHeight) {
          scrollContainerRef.current.scrollTop = scrollHeight;
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainerRef]);
};

export default useAutoScroll;
