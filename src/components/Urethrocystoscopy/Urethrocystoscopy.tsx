import type React from 'react';
import styles from './Urethrocystoscopy.module.css';
import GalleryUrethrocystoscopy from '../../components/GalleryUrethrocystoscopy/GalleryUrethrocystoscopy';
import { ArrowRight } from 'lucide-react';
import type { ImageType } from '../../components/GalleryUrethrocystoscopy/GalleryUrethrocystoscopy';

interface UrethrocystoscopyProps {
  backgroundColor?: string;
}

const Urethrocystoscopy: React.FC<UrethrocystoscopyProps> = ({
  backgroundColor = '#E6F0FAFF',
}) => {
  // Перший набір зображень для верхньої галереї
  const galleryImages1: ImageType[] = [
    {
      src: '/images/Urethrocystoscopy/scopiya.jpg',
      width: 500,
      height: 350,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya1.jpg',
      width: 500,
      height: 525,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya2.jpg',
      width: 500,
      height: 380,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya10.jpg',
      width: 500,
      height: 600,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya4.jpg',
      width: 500,
      height: 430,
    },
  ];

  // Другий набір зображень для нижньої галереї
  const galleryImages2: ImageType[] = [
    {
      src: '/images/Urethrocystoscopy/scopiya7.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya5.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya6.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya8.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/Urethrocystoscopy/scopiya9.jpg',
      width: 400,
      height: 400,
    },
  ];

  // Використовуємо плейсхолдери, якщо зображення недоступні
  const placeholderImages1: ImageType[] = [
    {
      src: '/placeholder.svg?height=400&width=400&text=Процедура+1',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=Процедура+2',
      width: 400,
      height: 400,
    },
  ];

  const placeholderImages2: ImageType[] = [
    {
      src: '/placeholder.svg?height=400&width=400&text=Обладнання+1',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=Обладнання+2',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=Обладнання+3',
      width: 400,
      height: 400,
    },
  ];

  const useGalleryImages1 =
    galleryImages1.length > 0 ? galleryImages1 : placeholderImages1;
  const useGalleryImages2 =
    galleryImages2.length > 0 ? galleryImages2 : placeholderImages2;

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Уретроцистоскопія</h1>

        <p className={styles.fullWidthText}>
          Ендоскопічні методи дослідження іноді бувають єдино правильним вибором
          для діагностики урологічних захворювань уретри, сечового міхура,
          сечоводів, нирок та визначення причини захворювання. До того ж дані
          методи мають високу точність, інформативність та достовірність.
        </p>

        {/* Перша секція з галереєю */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.subtitle}>
              Які показання до цистоскопії, уретроскопії?
            </h2>
            <p>Показаннями для проведення цих процедур є:</p>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight className={styles.arrow} />
                підозра на наявність запалення у сечовому міхурі, уретрі
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                діагностика пухлин сечового міхура, сечоводу, ниркової балії
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                наявність домішки крові у сечі
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                сексуальна дисфункція
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                аномалія розвитку органів сечостатевої системи
              </li>
            </ul>
            <p className={styles.note}>
              Показання до цієї процедури може визначити лише лікар-уролог.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.galleryWrapper}>
              <GalleryUrethrocystoscopy
                images={useGalleryImages1}
                galleryId="urethrocystoscopy-gallery-1"
                initialZoom={1}
              />
            </div>
          </div>
        </div>

        {/* Друга секція з галереєю */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.subtitle}>
              Які протипоказання до цистоскопії, уретроскопії, нефроскопії?
            </h2>
            <p>Протипоказаннями до цих процедур є:</p>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight className={styles.arrow} />
                гострі запальні процеси в органах сечостатевої системи (гострий
                уретрит, цистит, простатит, орхіт)
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                захворювання, через які порушується процес зсідання крові
                (гемофілія)
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                алергічна реакція на знеболювальні препарати
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                патологічне звуження уретри
              </li>
            </ul>

            <h2 className={styles.subtitle}>Можливі ускладнення цистоскопії</h2>
            <p>Серед ускладнень виділяють:</p>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight className={styles.arrow} />
                кровотеча. Після процедури невелика кількість крові в сечі
                вважається нормальною, але значне виділення крові це тривожний
                симптом і привід терміново звернутися до лікаря
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                інфекція сечового міхура
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                біль та дискомфорт (тимчасові, можуть тривати від кількох годин
                до кількох днів)
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.galleryWrapper}>
              <GalleryUrethrocystoscopy
                images={useGalleryImages2}
                galleryId="urethrocystoscopy-gallery-2"
                initialZoom={1}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.note}>
            Після проведення цистоскопії можливе виконання контрольного УЗД — ця
            діагностична процедура допомагає переконатися, що обстеження пройшло
            успішно, а стінки сечового міхура не пошкоджені.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Urethrocystoscopy;
