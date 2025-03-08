import Image from 'next/image';
import type React from 'react';
import styles from './BigBord.module.css';
import CardsPrimma from '../CardsPrimma/CardsPrimma';

interface BigBoardProps {
  backgroundColor?: string;
}

const BigBoard: React.FC<BigBoardProps> = ({
  backgroundColor = '#D7F383FF',
}) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.background} style={{ backgroundColor }}></div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Left side - Text content */}
            <div className={styles.textContent}>
              <h1 className={styles.title}> Микола - лікар-</h1>
              <p className={styles.paragraph}>
                Ми пропонуємо сучасні методи діагностики та лікування
                урологічних захворювань.
              </p>
              <p className={styles.paragraph}>
                Наш підхід ґрунтується на високій кваліфікації та турботі про
                пацієнтів.
              </p>
              <p className={styles.paragraph}>
                Дізнайтеся більше у відповідних розділах сайту.
              </p>
            </div>

            {/* Right side - Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/images/doctor/doctorya.JPG"
                alt="Medical illustration"
                layout="responsive"
                width={400}
                height={500}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <CardsPrimma />
        </div>
      </div>
    </div>
  );
};

export default BigBoard;
