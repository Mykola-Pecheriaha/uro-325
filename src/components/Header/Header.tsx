'use client';

import type React from 'react';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      { title: 'Уретероскопія', href: '/diagnostics/ureteroscopy' },
      { title: 'Цистоскопія', href: '/diagnostics/cystoscopy' },
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
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  }, [isMobileMenuOpen]);

  const toggleSubmenu = useCallback(
    (title: string) => {
      setActiveSubmenu(activeSubmenu === title ? null : title);
    },
    [activeSubmenu]
  );

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const renderMenuItem = (item: MenuItem) => (
    <li
      key={item.title}
      className={`${styles.menuItem} ${activeSubmenu === item.title ? styles.active : ''} ${
        isActive(item.href) ? styles.activeLink : ''
      }`}
    >
      {item.submenu ? (
        <>
          <button
            className={`${styles.menuButton} ${isActive(item.href) ? styles.activeLink : ''}`}
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
                <Link
                  href={subItem.href}
                  className={isActive(subItem.href) ? styles.activeLink : ''}
                  onClick={handleLinkClick}
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.href}
          className={`${styles.menuLink} ${isActive(item.href) ? styles.activeLink : ''}`}
          onClick={handleLinkClick}
        >
          {item.title}
        </Link>
      )}
    </li>
  );

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          <Image
            src="/images/logo/logo1-removebg-preview.png"
            alt="Логотип"
            width={60}
            height={60}
            priority
          />
          <span className={styles.logoText}>ЦМКЛ</span>
        </Link>

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
          <ul className={styles.menuList}>{menuItems.map(renderMenuItem)}</ul>
        </nav>

        <div className={styles.consultationButton}>
          <ConsultationButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
