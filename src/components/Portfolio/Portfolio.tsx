import type React from 'react';
import styles from './Portfolio.module.css';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

interface PortfolioProps {
  backgroundColor?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  backgroundColor = '#F8FAFC',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Про лікаря</h1>

        {/* Contact Information Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio/micola10.jpg"
                alt="Фото лікаря"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <h2 className={styles.name}>Микола Іванович</h2>
              <p className={styles.position}>Оперуючий лікар-уролог</p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <p className={styles.label}>Телефон:</p>
                    <a href="tel:+380936573413" className={styles.link}>
                      +380936573413
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <p className={styles.label}>Email:</p>
                    <a
                      href="mailto:surg.kurii@gmail.com"
                      className={styles.link}
                    >
                      surg.kurii@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <p className={styles.label}>Адреса:</p>
                    <p className={styles.address}>
                      м. Чернівці
                      <br />
                      вул. Героїв Майдану 226,
                      <br />
                      Хірургічний стаціонар №2 Державного управління справами
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Професійні членства</h2>
          <ul className={styles.list}>
            <li>
              Європейська асоціація урологів: Дійсний член (номер членства
              EAU-125847).
            </li>
            <li>
              Американська спільнота клінічних онкологів: Дійсний член (номер
              членства 7394500).
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>Участь у наукових заходах</h2>
          <p className={styles.text}>
            Микола Курій бере участь у щорічних наукових конгресах та
            майстер-класах, організованих Європейською асоціацією урологів,
            Національним інститутом раку, Спілкою онкоурологів України та
            Українською спілкою ендоурологів в тому числі закордонні
            майстер-класи.
          </p>
          <p className={styles.text}>
            У лютому 2024 року пройшов майстер-клас з лапароскопічної
            простатектомії в Італії.
          </p>

          <h2 className={styles.sectionTitle}>Клінічні навички</h2>
          <p className={styles.text}>
            Микола Курій володіє методами ультразвукової діагностики (УЗД),
            виконуючи обстеження нирок, простати та сечового міхура. Він
            спеціалізується на ендоскопічних операціях, таких як трансуретральна
            хірургія при гіперплазії простати, уторенях сечового міхура,
            ендоскопічне видалення каменів сечового міхура, сечоводів та нирок.
            Крім того, займається лапароскопічною хірургією для лікування
            онкопатологій та доброякісних утворень сечостатевої системи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
