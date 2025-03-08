import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import {
  FaTelegram,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          {/* <Image
            src="/images/logo/logo.png"
            alt="Логотип"
            width={100}
            height={100}
          /> */}
          <h3>Печеряга Микола Миколайович</h3>
          <p>Член асоціації урологів</p>
          <p>
            Я лікар уролог з досвідом 10 років. Ми пропонуємо сучасні методи
            діагностики та лікування урологічних захворювань.
          </p>
          <Link href="/reviews">Відгуки</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4>Навігація</h4>
          <ul>
            <li>
              <Link href="/">Головна</Link>
            </li>
            <li>
              <Link href="/diagnostics">Діагностика</Link>
            </li>
            <li>
              <Link href="/treatment">Лікування</Link>
            </li>
            <li>
              <Link href="/about">Про лікаря</Link>
            </li>
            <li>
              <Link href="/operating-room">Операційна</Link>
            </li>
            <li>
              <Link href="/team">Команда</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Додатково</h4>
          <ul>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
            <li>
              <Link href="/reviews">Відгуки</Link>
            </li>
            <li>
              <Link href="/contacts">Контакти</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Контакти</h4>
          <p>
            Адреса: вул.Героїв Майдану 226, (вхід з вул.Рівенська), м. Чернівці
          </p>
          <p>Телефон: +380 12 345 6789</p>
          <p>Email: info@example.com</p>
          <div className={styles.socialIcons}>
            <Link href="https://t.me/youraccount">
              <FaTelegram />
            </Link>
            <Link href="tel:+380123456789">
              <FaPhone />
            </Link>
            <Link href="https://www.instagram.com/youraccount">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/youraccount">
              <FaFacebook />
            </Link>
            <Link href="https://www.youtube.com/yourchannel">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
