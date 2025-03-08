import type React from 'react';
import styles from './KTUrology.module.css';
import GalleryKT from '../../components/GalleryKT/GalleryKT';
import type { ImageType } from '../../components/GalleryKT/GalleryKT';

interface KTUrologyProps {
  backgroundColor?: string;
}

const KTUrology: React.FC<KTUrologyProps> = ({
  backgroundColor = '#EEDCDCFF',
}) => {
  // Зображення для першої галереї - КТ Урокомплекс без контрасту
  const galleryImages1: ImageType[] = [
    { src: '/images/KTUrology/KT5.jpg', width: 600, height: 600 },
    {
      src: '/images/KTUrology/KT4.jpg',
      width: 400,
      height: 400,
    },
    { src: '/images/KTUrology/KT1.jpg', width: 400, height: 400 },
  ];

  // Зображення для другої галереї - КТ з контрастом
  const galleryImages2: ImageType[] = [
    {
      src: '/images/KTUrology/KT14.jpg',
      width: 500,
      height: 500,
    },
    {
      src: '/images/KTUrology/KT1.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/KTUrology/KT6.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/KTUrology/KT11.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/KTUrology/KT7.jpg',
      width: 400,
      height: 400,
    },
  ];

  // Плейсхолдери на випадок, якщо реальні зображення недоступні
  const placeholderImages1: ImageType[] = [
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+нирок',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+сечовидільної+системи',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+сечового+міхура',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+каменів+у+нирках',
      width: 400,
      height: 400,
    },
    {
      src: '//placeholder.svg?height=400&width=400&text=КТ+надниркових+залоз',
      width: 400,
      height: 400,
    },
  ];

  const placeholderImages2: ImageType[] = [
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+нирок+з+контрастом',
      width: 400,
      height: 400,
    },
    {
      src: '//placeholder.svg?height=400&width=400&text=КТ+сечовидільної+системи+з+контрастом',
      width: 400,
      height: 400,
    },
    {
      src: '//placeholder.svg?height=400&width=400&text=КТ+сечового+міхура+з+контрастом',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ+пухлини+нирки+з+контрастом',
      width: 400,
      height: 400,
    },
    {
      src: '/placeholder.svg?height=400&width=400&text=КТ-ангіографія+ниркових+судин',
      width: 400,
      height: 400,
    },
  ];

  // Перевірка наявності зображень і використання плейсхолдерів, якщо потрібно
  const useGalleryImages1 =
    galleryImages1.length > 0 ? galleryImages1 : placeholderImages1;
  const useGalleryImages2 =
    galleryImages2.length > 0 ? galleryImages2 : placeholderImages2;

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>КТ Урокомплекс (Сечостатева система)</h1>

        <p className={styles.fullWidthText}>
          МСКТ Урокомплекс – це дослідження органів черевної порожнини та
          органів малого таза без застосування контрастної речовини. Основний
          акцент при проведенні Урокомплекса робиться на сечостатеву систему,
          (сечовий міхур, передміхурова залоза, сечоводи, миски, нирки,
          надниркові залози) щоб виявити патології повязані з цими системами. Не
          дивлячись на те, що акцент робиться саме на сечостатеву систему, лікар
          радіолог не упускає з уваги і інші органи даної області. При виявленні
          патологій і захворювань не повязаних з основною метою обстеження наш
          лікар обовязково повідомить Вам про це і при потребі порекомендує
          дообстеження.
        </p>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <ul className={styles.arrowList}>
              <li>Гідронефроз</li>
              <li>Сечокамяна хвороба або МКБ</li>
              <li>Наявність конкрементів</li>
              <li>Пухлини сечоводів будь-якої локалізації</li>
              <li>Кісти</li>
              <li>Диференціальна діагностика аденоми наднирників</li>
              <li>Запальні процеси органів і тканин</li>
              <li>
                Визначення щільності конкременту (Дозволяє запропонувати
                ефективність літотрипсії та необхідну кількість сеансів
                дроблення каменів)
              </li>
              <li>Атеросклероз стінок великих судин</li>
              <li>Травма нирки</li>
              <li>
                Пієлонефрит, абсцес нирки (Базова візуалізація, більш конкретно
                дана патологія візуалізується із застосуванням контрастування)
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <GalleryKT
              images={useGalleryImages1}
              galleryId="kt-urology-gallery-1"
            />
          </div>
        </div>

        <h1 className={styles.centeredTitle}>
          КТ сечовидільної системи з контрастом
        </h1>

        <p className={styles.fullWidthText}>
          Для КТ-обстеження нирок використовується йодвмісна контрастна
          речовина, що «забарвлює» патологічні області, щоб вони стали гарно
          видимими на знімку. Безпечний для здоровя болюс вводиться за допомогою
          двоколбового інжектора (Medrad Stellant Dual) під контролем
          лікаря-анестезіолога. Пацієнт може відчувати жар, легку нудоту,
          присмак металу в роті, іноді легку нудоту. Контрастна речовина
          повністю виводиться із організму протягом доби.
        </p>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2>Показання для введення болюсу</h2>
            <ul className={styles.dotList}>
              <li>оцінка функції сечовидільної системи</li>
              <li>запальні процеси нирок, сечоводів, сечового міхура</li>
              <li>кісти</li>
              <li>
                підозра на наявність новоутворень, уточнення стадії онкопроцесу,
                уточнення розташування, розмірів, контурів пухлини
              </li>
              <li>виявлення абсцесів</li>
              <li>
                планування оперативних втручань – вивчення особливостей
                кровопостачання нирок
              </li>
              <li>
                післяопреаційний період, наприклад виявлення сечових затіків
              </li>
              <li>підтвердження варіантів розвитку сечовидільної системи</li>
              <li>КТ-ангіографія ниркових судин – при підвищеному тиску</li>
            </ul>

            <h2>Протипоказання для введення контрасту</h2>
            <ul className={styles.dotList}>
              <li>вагітність</li>
              <li>алергія на йод</li>
              <li>
                ниркова недостатність – зниження швидкості клубочкової
                фільтрації до 30 мл/хв
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <GalleryKT
              images={useGalleryImages2}
              galleryId="kt-urology-gallery-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KTUrology;
