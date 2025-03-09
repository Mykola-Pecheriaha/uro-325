'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import styles from './GalleryWithThumbnails.module.css';
import type { FC } from 'react';

export type ImageType = {
  src: string;
  width: number;
  height: number;
};

interface GalleryWithThumbnailsProps {
  images: ImageType[];
  galleryId: string;
  initialZoom?: number;
}

const GalleryWithThumbnails: FC<GalleryWithThumbnailsProps> = ({
  images,
  galleryId,
  initialZoom = 1,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(initialZoom);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  if (images.length === 0) {
    return <div className={styles.noImages}>Немає доступних зображень</div>;
  }

  const currentImage = images[currentImageIndex];
  const scaledWidth = currentImage.width * zoomLevel;
  const scaledHeight = currentImage.height * zoomLevel;

  return (
    <div className={styles.galleryWrapper} id={galleryId}>
      <div
        className={styles.galleryContainer}
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
        }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={`Зображення ${currentImageIndex + 1}`}
            width={scaledWidth}
            height={scaledHeight}
            layout="responsive"
            objectFit="cover"
            quality={75}
            priority={true}
          />
        </div>
        <button
          onClick={handlePrev}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Наступне зображення"
        >
          <ChevronRight />
        </button>
        <div className={styles.controlsContainer}>
          <div className={styles.zoomControls}>
            <button
              onClick={handleZoomOut}
              className={styles.zoomButton}
              aria-label="Зменшити"
            >
              <Minus size={16} />
            </button>
            <span className={styles.zoomLevel}>
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className={styles.zoomButton}
              aria-label="Збільшити"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails Section */}
      <div className={styles.thumbnailsContainer}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Перейти до зображення ${index + 1}`}
            aria-current={index === currentImageIndex}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={`Мініатюра ${index + 1}`}
              width={80}
              height={80}
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryWithThumbnails;
