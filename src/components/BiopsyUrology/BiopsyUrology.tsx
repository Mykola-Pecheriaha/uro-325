import type React from 'react';
import styles from './BiopsyUrology.module.css';
import GalleryUrologyBiopsy from '../GalleryUrologyBiopsy/GalleryUrologyBiopsy';
import { ArrowRight } from 'lucide-react';
import type { ImageType } from '../GalleryUrologyBiopsy/GalleryUrologyBiopsy';

interface BiopsyUrologyProps {
  backgroundColor?: string;
}

const BiopsyUrology: React.FC<BiopsyUrologyProps> = ({
  backgroundColor = '#E6F0FAFF',
}) => {
  // Перший набір зображень для верхньої галереї
  const galleryImages1: ImageType[] = [
    {
      src: '/images/BiopsyUrology/biopsiya.jpg',
      width: 500,
      height: 370,
    },
    {
      src: '/images/BiopsyUrology/biopsiya1.jpg',
      width: 500,
      height: 325,
    },
    {
      src: '/images/BiopsyUrology/biopsiya3.jpg',
      width: 400,
      height: 500,
    },
    {
      src: '/images/BiopsyUrology/biopsiya4.jpg',
      width: 500,
      height: 680,
    },
    {
      src: '/images/BiopsyUrology/biopsiya5.jpg',
      width: 500,
      height: 360,
    },
  ];

  // Другий набір зображень для нижньої галереї
  const galleryImages2: ImageType[] = [
    {
      src: '/images/BiopsyUrology/biopsiya6.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/BiopsyUrology/biopsiya7.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/BiopsyUrology/biopsiya8.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/BiopsyUrology/biopsiya9.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/BiopsyUrology/biopsiya10.jpg',
      width: 400,
      height: 400,
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Біопсія нирки</h1>

        <p className={styles.fullWidthText}>
          Біопсія нирки — діагностичне втручання, яке проводиться з метою забору
          тканин органу, для подальшого гістологічного дослідження. Біопсія
          нирок дозволяє провести диференціальну діагностику, виявити злоякісні
          пухлини на ранніх стадіях. На основі отриманих даних вдається
          розробити ефективну схему лікування. МР-урографія має кращу контрастну
          роздільну здатність, ніж КТ-урографія, без впливу іонізуючого
          випромінювання.
        </p>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.subtitle}>
              Ознаки та симптоми захворювання, як проявляються?
            </h2>
            <p>
              Техніка біопсії нирки залежить від типу дослідження. Воно може
              виконуватися такими способами:
            </p>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight className={styles.arrow} />
                <span>
                  <strong>Відкрита.</strong> Забір виконується в ході
                  лапароскопії або повноцінного оперативного втручання.
                  Показання для біопсії нирки відкритим методом - схильність до
                  кровотеч, ризик утворення тромбів, німа нирка.
                </span>
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                <span>
                  <strong>Чрескожная, або біопсія пункції нирок.</strong> Це
                  малоінвазивне втручання, при якому забір біологічного
                  матеріалу здійснюється за допомогою спеціальної голки.
                  Процедура не вимагає тривалого відновлення, добре переноситься
                  пацієнтами і дозволяє отримати достовірні дані про
                  функціональність органу.
                </span>
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                <span>
                  <strong>Забір тканин за допомогою зонда-уретроскопа.</strong>{' '}
                  Проведення біопсії нирки таким методом показано дітям і
                  вагітним жінкам, при наявності сольових відкладень або каменів
                  у сечоводі, лоханках органу. Також такий спосіб забору тканин
                  використовується при пересадженій нирці, патологіях верхніх
                  сечовивідних шляхів.
                </span>
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                <span>
                  <strong>Транс-яремна біопсія нирки.</strong> Особливий вид
                  дослідження, при якому забір тканин виконується спеціальним
                  зондом. Інструмент вводиться через велику кровоносну судину,
                  досягає органу, потім проводиться висічення невеликої ділянки
                  патологічних тканин.
                </span>
              </li>
            </ul>
            <p className={styles.additionalInfo}>
              Техніка біопсії нирки вимагає присутності особливих навичок, тому
              довіряти її виконання слід кваліфікованим фахівцям. Тільки так
              можна гарантувати успішність процедури і виключити можливі
              ускладнення.
            </p>
            <p className={styles.additionalInfo}>
              У більшості випадків лікарями виконується пункційна біопсія нирок.
              Обумовлено це безпекою і мінімальної інвазивністю процедури.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <GalleryUrologyBiopsy
              images={galleryImages1}
              galleryId="kidney-biopsy-gallery"
              initialZoom={1}
            />
          </div>
        </div>

        <h1 className={styles.centeredTitle}>Біопсія простати</h1>

        <p className={styles.fullWidthText}>
          Біопсія простати — діагностична процедура, яка використовується для
          виявлення ракової пухлини й встановлення стадії прогресування
          захворювання. Також вона застосовується для контролю ефективності
          лікування і допомагає в розробці терапевтичної схеми. Біопсія
          передміхурової залози дає точну інформацію про функціональність
          органу, тому є досить популярною в урології та онкології.
        </p>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.subtitle}>
              Ознаки та симптоми захворювання, як проявляються?
            </h2>
            <p>
              Часто пацієнти запитують:{' '}
              <strong>як проходить біопсія простати?</strong> Це малоінвазивна
              методика, в ході якої виконується забір клітин з патологічного
              вогнища. Проводиться вона трансректально. Потім матеріал
              відправляють на гістологічне дослідження.
            </p>
            <p>
              Біопсія простати, техніка яка є досить простою, проводиться без
              анестезії або з легким локальним знеболенням. Це питання фахівець
              вирішує індивідуально з пацієнтом.
            </p>
            <p>
              Первинна біопсія передміхурової залози показана при виявленні
              наступних змін:
            </p>
            <ul className={styles.dotList}>
              <li>
                присутність ділянок ущільнення, вузлових утворень, які вдалося
                виявити при ректальному обстеженні;
              </li>
              <li>гіпоехогенні зони простати, які проявляються при УЗД;</li>
              <li>перевищення допустимих показників ПСА - більше 4 нг / мл.</li>
            </ul>
            <p>
              Вторинна (повторна) біопсія простати призначається в таких
              випадках:
            </p>
            <ul className={styles.dotList}>
              <li>первинне дослідження дало негативні результати;</li>
              <li>
                рівень ПСА зберігається на високих показниках або продовжує
                рости;
              </li>
              <li>
                діагностика інтраепітеліальної неоплазії простати в ході
                первинного обстеження;
              </li>
              <li>щільність ПСА перевищує 15%.</li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <GalleryUrologyBiopsy
              images={galleryImages2}
              galleryId="prostate-biopsy-gallery"
              initialZoom={1}
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          При всіх цих станах призначається біопсія передміхурової залози. Ціна
          дослідження залежить від його типу. Щоб отримати достовірні
          результати, важливо дотримуватися деякі рекомендації перед виконання
          процедури.
        </p>
      </div>
    </div>
  );
};

export default BiopsyUrology;
