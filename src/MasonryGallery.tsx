import React, { useState } from "react";

interface MasonryGalleryProps {
  images?: string[];
  className?: string;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  className = "",
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mock images with different heights for masonry effect
  const mockImages = [
    "https://picsum.photos/300/400?random=1",
    "https://picsum.photos/300/600?random=2",
    "https://picsum.photos/300/350?random=3",
    "https://picsum.photos/300/500?random=4",
    "https://picsum.photos/300/450?random=5",
    "https://picsum.photos/300/550?random=6",
    "https://picsum.photos/300/400?random=7",
    "https://picsum.photos/300/650?random=8",
    "https://picsum.photos/300/380?random=9",
    "https://picsum.photos/300/520?random=10",
    "https://picsum.photos/300/470?random=11",
    "https://picsum.photos/300/600?random=12",
    "https://picsum.photos/300/420?random=13",
    "https://picsum.photos/300/540?random=14",
    "https://picsum.photos/300/480?random=15",
  ];

  // Use provided images or fall back to mock images
  const displayImages = images && images.length > 0 ? images : mockImages;

  const openPopup = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        style={{ fontSize: "9px" }}
        className=" grid grid-cols-6 grid-rows-2 mb-6 text-yellow-900 gap-4 place-items-center"
      >
        <p>Graduation</p>
        <p>Personal</p>
        <p>Prewedding</p>
        <p>Modelling</p>
        <p>Badminton</p>
        <p className="col-start-2 row-start-2">Wedding</p>
        <p className="col-start-3 row-start-2">Futsal</p>
        <p className="col-start-4 row-start-2">Fun-Run</p>
        <p className="col-start-6 row-start-1">Birthday</p>
        <p className="col-start-5">Cinematic</p>
      </div>
      {/* Title */}
      {/* Masonry Grid */}
      <div className="columns-3 md:columns-2 lg:columns-3 gap-1 space-y-1">
        {displayImages.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openPopup(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full rounded shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onClick={closePopup}
          >
            ×
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] object-contain border-4 border-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
