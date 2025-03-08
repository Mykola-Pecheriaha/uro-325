import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Cards.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  className,
}) => {
  return (
    <Link href={linkUrl}>
      <div className={`${styles.card} ${className || ''}`}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            width={250}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
