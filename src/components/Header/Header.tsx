'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import ConsultationButton from '../ConsultationButton/ConsultationButton';

interface MenuItem {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { title: 'Головна', href: '/' },
  {
    title: 'Діагностика',
    href: '/diagnostics',
    submenu: [
      { title: 'КТ', href: '/diagnostics/kt' },
      { title: 'МРТ', href: '/diagnostics/mrt' },
      { title: 'УЗД', href: '/diagnostics/usd' },
      { title: 'Тести', href: '/diagnostics/tests' },
      { title: 'Біопсія', href: '/diagnostics/biopsy' },
    ],
  },
  {
    title: 'Лікування',
    href: '/treatment',
    submenu: [
      { title: 'Консервативне лікування', href: '/treatment/conservative' },
      { title: 'Оперативне лікування', href: '/treatment/operative' },
    ],
  },
  {
    title: 'Про лікаря',
    href: '/about',
    submenu: [
      { title: 'Портфоліо', href: '/about/portfolio' },
      { title: 'Контакти', href: '/about/contacts' },
      { title: 'Команда', href: '/about/team' },
      { title: 'Відгуки', href: '/about/reviews' },
      { title: 'Корисна інформація', href: '/about/info' },
    ],
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo/logo1-removebg-preview.png"
            alt="Логотип"
            width={60}
            height={60}
            priority
          />
          <span className={styles.logoText}>ЦМКЛ</span>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}
        >
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li
                key={item.title}
                className={`${styles.menuItem} ${activeSubmenu === item.title ? styles.active : ''}`}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={styles.menuButton}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      {item.title}
                      <span className={styles.arrow}>▼</span>
                    </button>
                    <ul
                      className={`${styles.submenu} ${activeSubmenu === item.title ? styles.active : ''}`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link href={subItem.href}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className={styles.menuLink}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.consultationButton}>
          <ConsultationButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
