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
        <div className={styles.wrapper}>
          
          <div className={styles.left_main}>
            <ul className={styles.menu}> 
              <li><b><a href="/">Home</a></b></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Artigos</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className={styles.right_main}>
            <h1 className={styles.title}>Mauricio Duailibi Neto</h1>
            <h2 className={styles.subtitle}>UI Designer | web designer | desenvolvedor mobile</h2>

            <div className={styles.row}>
              <div className={styles.img_container}>
                <img className={styles.img_home} src="/img/illustration_home.png"></img>
              </div>
              <div className={styles.buttons_container}>
                <button className={styles.button_secondary}>Baixar currículo</button>
                <hr className={styles.button_separator}></hr>
                <button className={styles.button_secondary}>Entrar em contato</button>
              </div>
            </div>
            
          </div>

        </div>
      </main>

    </div>
  )
}
