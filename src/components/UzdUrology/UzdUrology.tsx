import type React from 'react';
import styles from './UzdUrology.module.css';
import GalleryUzd from '../../components/GalleryUzd/GalleryUzd';
import { ArrowRight } from 'lucide-react';

interface UzdUrologyProps {
  backgroundColor?: string;
}

const UzdUrology: React.FC<UzdUrologyProps> = ({
  backgroundColor = '#f8fafc',
}) => {
  // Приклад даних для першої галереї
  const galleryImages1 = [
    {
      src: '/images/UzdUrology/usd1і.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd2і.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd3.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd4.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd5.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd6.jpg',
      width: 600,
      height: 400,
    },
    // Додайте інші зображення за потреби
  ];

  // Приклад даних для другої галереї
  const galleryImages2 = [
    {
      src: '/images/UzdUrology/usd7.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd8.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd9.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd10.jpg',
      width: 600,
      height: 400,
    },
    {
      src: '/images/UzdUrology/usd11.jpg',
      width: 600,
      height: 400,
    },
    // Додайте інші зображення за потреби
  ];

  return (
    <div className={styles.outerWrapper} style={{ backgroundColor }}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Верхня секція */}
          <div className={styles.topSection}>
            <h1 className={styles.title}>
              УЗД нирок і сечового міхура в Чернівцях
            </h1>
            <ul className={styles.featuresList}>
              <li>
                <ArrowRight className={styles.arrow} />
                Оперуючий лікар сам робить узд
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                УЗД виконується на апараті експертного класу
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                Можливі виконання лікувальних процедур під час виконання УЗД
              </li>
            </ul>
          </div>

          {/* Середня секція */}
          <div className={styles.middleSection}>
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>
                ПОКАЗАННЯ ДЛЯ УЗД НИРОК І СЕЧОВОГО МІХУРА
              </h2>
              <p className={styles.description}>
                Для запобігання виникнення будь-яких захворювань лікарі
                рекомендують використовувати ультразвукову діагностику хоча б
                раз на рік. Та все ж таки існує ряд показань, коли
                УЗ-діагностика є першочерговим джерелом необхідної для лікаря
                інформації. Зокрема, такий метод дослідження призначають, коли
                спостерігається:
              </p>
              <ul className={styles.symptomsList}>
                <li>біль в паху чи нижній частині живота;</li>
                <li>кровянисті виділення;</li>
                <li>рідке або часте сечовипускання;</li>
                <li>травми попереку;</li>
                <li>змінюється забарвлення сечі;</li>
                <li>пересадка нирки;</li>
                <li>запальні процеси.</li>
              </ul>
              <p className={styles.additionalInfo}>
                Часом ультразвукову діагностику нирок і сечівника пропонують
                здійснити при підозрі на гінекологічні чи урологічні
                захворювання.
              </p>
            </div>
            <div className={styles.gallerySection}>
              <GalleryUzd
                images={galleryImages1}
                galleryId="uzd-gallery-1"
                initialZoom={1}
              />
            </div>
          </div>

          {/* Нижня секція */}
          <div className={styles.bottomSection}>
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>
                КОЛИ ВАРТО РОБИТИ УЗД НИРОК І СЕЧОВОГО МІХУРА
              </h2>
              <p className={styles.description}>
                Ультразвукову діагностику сечівника і нирок дає можливість
                визначити наявність:
              </p>
              <ul className={styles.symptomsList}>
                <li>опущення нирок;</li>
                <li>циститу;</li>
                <li>гострого або ж хронічного пієлонефриту;</li>
                <li>гломерулонефриту (враження клубків нирок);</li>
                <li>пухлини;</li>
                <li>кісти;</li>
                <li>травм нирок або сечівника;</li>
                <li>каменів у нирках</li>
              </ul>
              <p className={styles.additionalInfo}>
                Окрім цього, ультразвуковий апарат дозволяє повною мірою
                проглянути нирки, їхню форму, розміри, положення, внутрішню
                будову, порожнину та її становище, простежити розвиток верхнього
                сечового шляху.
              </p>
            </div>
            <div className={styles.gallerySection}>
              <GalleryUzd
                images={galleryImages2}
                galleryId="uzd-gallery-2"
                initialZoom={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UzdUrology;
