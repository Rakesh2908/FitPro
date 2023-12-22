"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner1 from './components/Homebanner1/Homebanner1'
import Homebanner2 from './components/Homebanner2/Homebanner2'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner1/>
      <Homebanner2/>
    </main>
  )
}