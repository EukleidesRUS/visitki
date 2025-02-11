import {FC} from 'react'
import styles from "./Footer.module.css"

const Footer:FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
        <p className={styles.footer__copyright}>© Визитки</p>
        <p className={styles.footer__author}>Яндекс Практикум</p>
    </footer>
  )
}

export default Footer