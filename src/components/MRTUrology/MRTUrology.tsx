import type React from 'react';
import styles from './MRTUrology.module.css';
import GalleryMRT from '../GalleryMRT/GalleryMRT';
import { ArrowRight } from 'lucide-react';
import type { ImageType } from '../GalleryMRT/GalleryMRT';

interface MRTUrologyProps {
  backgroundColor?: string;
}

const MRTUrology: React.FC<MRTUrologyProps> = ({
  backgroundColor = '#E6F0FAFF',
}) => {
  // Перший набір зображень для верхньої галереї
  const galleryImages1: ImageType[] = [
    {
      src: '/images/MRTUrology/МРТ1.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/MRTUrology/МРТ3.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/MRTUrology/МРТ5.jpg',
      width: 400,
      height: 400,
    },
    {
      src: '/images/MRTUrology/МРТ13jpg.jpg',
      width: 400,
      height: 400,
    },
  ];

  // Другий набір зображень для нижньої галереї
  const galleryImages2: ImageType[] = [
    {
      src: '/images/MRTUrology/МРТ9jpg.jpg',
      width: 500,
      height: 425,
    },
    {
      src: '/images/MRTUrology/МРТ10jpg.jpg',
      width: 500,
      height: 450,
    },
    {
      src: '/images/MRTUrology/МРТ12jpg.jpg',
      width: 500,
      height: 550,
    },
    {
      src: '/images/MRTUrology/МРТ2.jpg',
      width: 500,
      height: 400,
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>МРТ Урокомплекс (Сечостатева система)</h1>

        <p className={styles.fullWidthText}>
          Магнітно-резонансна урографія (МР-урографія) – один із найбільш
          інформативних неінвазивних методів візуалізації аномалій та патологій
          нирок і сечовивідних шляхів у пацієнтів різного віку та статі.
          МР-урографія є клінічно корисною для оцінки підозрюваної обструкції
          сечовивідних шляхів, гематурії та вроджених аномалій, а також
          хірургічно зміненої анатомії. МР-урографія має кращу контрастну
          роздільну здатність, ніж КТ-урографія, без впливу іонізуючого
          випромінювання.
        </p>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.subtitle}>
              Показання для проведення магнітно-резонансної урографії
            </h2>
            <p>
              МРТ-урографія (МРУ) може бути використана для ретельної оцінки
              ниркової паренхіми, чашково-мискової системи та решти сечовивідних
              шляхів.
            </p>
            <p>Основними показаннями для виконання МР-урографії є:</p>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight className={styles.arrow} />
                для демонстрації сечовидільної системи або рівня обструкції при
                погано функціонуючій нирці або обструкції сечовивідної системи
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                вроджені аномалії сечовидільної системи
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                оцінка донора ниркового трансплантата
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                післяопераційні, посттравматичні зміни структур системи та
                органів
              </li>
              <li>
                <ArrowRight className={styles.arrow} />
                онкопатології
              </li>
            </ul>
            <p className={styles.additionalInfo}>
              МРТ може грати вирішальну роль у скринінгу пацієнтів із спадковими
              захворюваннями, що вражають нирки, такими як хвороба фон Гіппеля
              Ліндау, яка характеризується гемангіобластомами ЦНС із високою
              поширеністю ниркових кіст, ангіом і нирково-клітинного раку.
            </p>
            <p className={styles.additionalInfo}>
              МР-урографія настільки ж ефективна, як екскреторна урографія,
              ультразвукове дослідження та методи ядерної медицини для
              дослідження більшості дитячих уропатологічних станів і для
              дослідження вроджених аномалій.
            </p>
            <p className={styles.additionalInfo}>
              Використання МРТ полегшує одночасну оцінку нирок, сечоводів,
              ниркових артерій, ниркових вен і нижньої порожнистої вени, що
              корисно для оцінки ниркової паренхіми, перинефральної та
              периуретеральної пухлини.
            </p>
            <p className={styles.additionalInfo}>
              Здатність МРТ надавати детальну інформацію щодо анатомії, функції
              та дренажу в одному дослідженні без використання іонізуючого
              випромінювання відрізняє його від звичайних методів візуалізації.
              Як додаткова перевага, його можна використовувати у пацієнтів з
              алергією на контрастні речовини або з порушенням функції нирок.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <GalleryMRT
              images={galleryImages1}
              galleryId="mrt-urology-gallery-1"
              initialZoom={1}
            />
          </div>
        </div>

        <h1 className={styles.centeredTitle}>
          Протипоказання до проведення МР-урографії
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
            <h2 className={styles.subtitle}>
              Протипоказання до проведення МР-урографії
            </h2>
            <p>
              Протипоказання до проведення дослідження можуть носити
              індивідуальний характер, враховуючи анамнез пацієнта та його
              поточний стан здоровя.
            </p>
            <p>До загальних протипоказань належать:</p>
            <ul className={styles.dotList}>
              <li>
                наявність металевих імплантів, фіксаторів в тілі, якщо матеріал
                не передбачає контакт з магнітним полем;
              </li>
              <li>
                присутність в тілі електронних пристроїв будь-якого призначення:
                кардіостимуляторів, вживлених слухових апаратів тощо;
              </li>
              <li>
                загострення хронічних хвороб, що може впливати на результати
                дослідження або ж процес проведення МРТ;
              </li>
              <li>
                психічні розлади, епілепсія, виражений спастичний синдром та
                ін.;
              </li>
              <li>
                вагітність – відносний протипоказ. Для вагітних встановлюється
                доцільність використання МРТ винятково лікарем на підставі
                клінічної картини та присутніх ризиків для здоровя і життя.
              </li>
            </ul>

            <h2 className={styles.subtitle}>Рекомендації:</h2>
            <ul className={styles.dotList}>
              <li>
                заздалегідь записуйтесь на обстеження, оскільки обстеження може
                вимагати підготовки. Завжди дотримуйтесь рекомендацій щодо
                підготовки, адже від цього прямопропорційно залежить якість
                результатів дослідження;
              </li>
              <li>
                попереджайте лікарів про наявність алергічних реакцій на
                препарати, супутні діагнози, проведені оперативні втручання та
                травми в зоні дослідження;
              </li>
              <li>
                надавайте повний пакет медичної документації, яка стосується
                діагнозу. Особлива увага результатам попередніх МРТ, КТ.
                Обовязково майте при собі диски з попередніми дослідженнями.
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <GalleryMRT
              images={galleryImages2}
              galleryId="mrt-urology-gallery-2"
              initialZoom={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MRTUrology;
