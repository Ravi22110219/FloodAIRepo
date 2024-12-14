import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { FaHeart, FaDownload } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

import styles from "./ResearchShowCaseHomePage.module.css";

const eventPhotos = {
  "short-title": [
    // { src: 'https://princeschoolsikar.com/assets/result/12-2022.jpg', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    // { src: 'https://princeschoolsikar.com/assets/result/12-2022.jpg', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    // { src: 'https://princeschoolsikar.com/assets/result/12-2022.jpg', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    // { src: 'https://princeschoolsikar.com/assets/result/12-2022.jpg', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    { src: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'A boy surrounded by beautiful nature' },
    // Add more photos here
  ],
  "longer-title": [
    { src: 'https://jpsschooljaisinghpura.github.io/.ac.in/back_to_school_facebook_cover_34.jpg', alt: 'What a beautiful scenery this sunset' },
    // Add more photos here
  ],
  "another-title": [
    { src: 'https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg', alt: 'The Beach. Me. Alone. Beautiful' },
    // Add more photos here
  ]
};


const ResearchShowCaseHomePage = () => {
  const { event } = useParams();
  const photos = eventPhotos[event] || [];

  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [gridSize, setGridSize] = useState(3);
  const [likedImages, setLikedImages] = useState(new Array(photos.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 13;
  
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const handleImageClick = (index) => {
      setModalImageIndex(index);
  };

  const handleCloseModal = () => {
      setModalImageIndex(null);
  };

  const handlePrevImage = (e) => {
      if (e) e.stopPropagation();
      setModalImageIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNextImage = (e) => {
      if (e) e.stopPropagation();
      setModalImageIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const handleGridSizeChange = (e) => {
      setGridSize(e.target.value);
  };

  const handleKeyDown = (e) => {
      if (modalImageIndex !== null) {
          if (e.key === 'ArrowLeft') {
              handlePrevImage();
          } else if (e.key === 'ArrowRight') {
              handleNextImage();
          }
      }
  };

  const handleLikeClick = (index) => {
      setLikedImages((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] = !newLikes[index];
          return newLikes;
      });
  };

  const handleDownloadClick = (src) => {
      const link = document.createElement('a');
      link.href = src;
      link.download = src.split('/').pop();
      link.click();
  };

  const handlePageChange = (page) => {
      setCurrentPage(page);
  };

  useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [modalImageIndex]);

  const handleMouseDown = (e) => {
      startX.current = e.clientX;
      isDragging.current = true;
  };

  const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
      if (!isDragging.current) return;
      const diffX = currentX.current - startX.current;
      if (diffX > 50) {
          handlePrevImage();
      } else if (diffX < -50) {
          handleNextImage();
      }
      isDragging.current = false;
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = photos.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(photos.length / imagesPerPage);

  return (
    <>
        <div className="w-full bg-gray-800 h-40  flex items-center justify-center">
        <div className="w-5/6 mx-auto">
            <h1 className="text-center text-white text-4xl"><GrGallery className="inline mr-2" />Photoes</h1>
        </div>
    </div>

        <div className={`${styles.lightGreyBackground} ${styles.contentContainer}`}>
            <div className={styles.gridButtons}>
                <label htmlFor="gridSizeRange" className={styles.formLabel}>Grid Size: {gridSize}</label>
                <input
                    type="range"
                    className={styles.formRange}
                    min="1"
                    max="5"
                    step="1"
                    id="gridSizeRange"
                    value={gridSize}
                    onChange={handleGridSizeChange}
                />
            </div>

            <div className={styles.photoGrid}>
                {currentImages.map((photo, index) => (
                    <div className={styles.photoColumn} key={index} style={{ flex: `1 1 calc(${90 / gridSize}% - 1rem)` }}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className={styles.photo}
                            onClick={() => handleImageClick(indexOfFirstImage + index)}
                        />
                        <div className={styles.overlay}>
                            <button
                                className={`${styles.iconButtons} ${likedImages[index] ? styles.liked : ''}`}
                                onClick={() => handleLikeClick(index)}
                            >
                                <FaHeart />
                            </button>
                            <button
                                className={styles.iconButtons}
                                onClick={() => handleDownloadClick(photo.src)}
                            >
                                <FaDownload />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                <div className={styles.paginationBar}>
                    <button
                        className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        «
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.active : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        »
                    </button>
                </div>
            </div>
        </div>

        {modalImageIndex !== null && (
            <div
                className={styles.modal}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onClick={handleCloseModal}
            >
                <span className={styles.closeButton} onClick={handleCloseModal}>×</span>
                <button className={`${styles.navButton} ${styles.left}`} onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
                    ‹
                </button>
                <button className={`${styles.navButton} ${styles.right}`} onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
                    ›
                </button>
                <button className={styles.downloadButton} onClick={() => handleDownloadClick(photos[modalImageIndex].src)}>
                    ↓
                </button>
                <div className={styles.modalContent}>
                    <img src={photos[modalImageIndex].src} alt={photos[modalImageIndex].alt} className={styles.modalImage} />
                </div>
            </div>
        )}
    </>
);
};

export default ResearchShowCaseHomePage;
