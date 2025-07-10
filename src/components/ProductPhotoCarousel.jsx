import React, { useState } from 'react'
import productDetail1 from "../assets/product-detail-1.jpg";
import productDetail2 from "../assets/product-detail-2.jpg";
import { ChevronRight, ChevronLeft } from 'lucide-react';

function ProductPhotoCarousel() {
  const photos = [productDetail1, productDetail2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevPhoto = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const goToPhoto = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div> 
      <div className="relative">
        <img
          src={photos[currentIndex]}
          className="w-[21.75rem] h-[17.313rem] md:w-[31.625rem] md:h-[28.125rem]"
        />
        <button
          onClick={prevPhoto}
          className="absolute top-1/2 left-4 hover:cursor-pointer"
        >
          <ChevronLeft color="#FFFFFF" size={44} />
        </button>
        <button
          onClick={nextPhoto}
          className="absolute top-1/2 right-4 hover:cursor-pointer"
        >
          <ChevronRight color="#FFFFFF" size={44} />
        </button>
      </div>
      <div className="flex gap-4 mt-4 justify-start">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            onClick={() => goToPhoto(index)}
            className={`w-16 h-16 cursor-pointer ${currentIndex === index ? "opacity-50" : "opacity-100"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductPhotoCarousel