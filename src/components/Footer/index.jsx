import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/images/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/images/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/images/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}
