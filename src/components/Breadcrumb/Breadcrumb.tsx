'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

const routeNameMap: { [key: string]: string } = {
  '': 'Головна',
  diagnostics: 'Діагностика',
  treatment: 'Лікування',
  about: 'Про лікаря',
  contacts: 'Контакти',
  portfolio: 'Портфоліо',
  team: 'Команда',
  reviews: 'Відгуки',
  info: 'Корисна інформація',
  kt: 'КТ',
  mrt: 'МРТ',
  usd: 'УЗД',
  tests: 'Тести',
  biopsy: 'Біопсія',
  conservative: 'Консервативне лікування',
  operative: 'Оперативне лікування',
};

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div className={styles.breadcrumbWrapper}>
      <div className={styles.breadcrumbContainer}>
        <nav aria-label="Навігація по сайту">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              {pathname === '/' ? (
                <span aria-current="page">Головна</span>
              ) : (
                <Link href="/">Головна</Link>
              )}
            </li>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const name = routeNameMap[segment] || segment;

              return (
                <li key={path} className={styles.breadcrumbItem}>
                  {isLast ? (
                    <span aria-current="page">{name}</span>
                  ) : (
                    <Link href={path}>{name}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
