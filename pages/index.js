import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mauricio Neto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Mauricio Neto
        </h1>

      </main>

      <footer className={styles.footer}>
          <span>Powered by <b>Mauricio Neto</b></span>
      </footer>
    </div>
  )
}
