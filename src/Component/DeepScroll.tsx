import React, { useRef, useEffect, useState } from 'react';
import "./DeepScroll.css"; // Assurez-vous d'importer les styles CSS nécessaires

interface DeepScrollProps {
  data: string[];
}

const DeepScroll: React.FC<DeepScrollProps> = ({ data }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculer le numéro de page suivant
      const nextPage = (currentPage + 1) % data.length;
      setCurrentPage(nextPage);
    }, 1000); // Changer de page toutes les 1 seconde

    return () => {
      clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
    };
  }, [currentPage, data.length]);

  return (
    <div className="deep-scroll">
      <div className="carousel-container" ref={carouselRef}>
        {data.map((item, index) => (
          <div key={index} className={`page ${currentPage === index ? 'active' : ''}`}>
            <div className="content">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeepScroll;
