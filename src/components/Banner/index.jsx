import styles from './style.module.css'

export const Banner = () => {
  return (
    <>
      <header className={styles.banner}>
        <img src="/images/banner.png" alt="O banner principal da página" />
      </header>
    </>
  )
}
