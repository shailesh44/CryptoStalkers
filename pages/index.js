import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>CryptoStalker | Home</title>
      <meta name='keywords' content='cryptos' />
    </Head>
   <div>
     <h1 className={styles.title}>
       Homepage
     </h1>
     <p className={styles.text}> Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.</p>
     <p className={styles.text}>When I look in your eyes, I see a very kind soul.</p>
     <Link href="/CryptoStalker">
     <a className={styles.btn}>See cryptocurrencies</a>
     </Link>
     
   </div>
   </>
  )
}



