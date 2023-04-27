import {useAppSelector} from '@/utils/hooks';
import Link from 'next/link';
import styles from '@/styles/Layout.module.scss';

const Layout = ({ children }: any) => {
  const favorites = useAppSelector((state) => state.favorites.value);

  return <>
    <div className={styles.Header}>
      <h1>What2Watch</h1>
      <ul className={styles.Nav}>
        <span>{favorites.length}</span>
        <li><Link href="/">Recherche</Link></li>
        <li><Link href="/favorites">Favoris</Link></li>
      </ul>
    </div>
    <main>{children}</main>
  </>;
};

export default Layout;
