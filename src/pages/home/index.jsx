import React from 'react'
import Notification from './components/Notification'
import Hero from './components/Hero'
import Screen2 from './components/screen2'
import Screen3 from './components/screen3'
import Screen4 from './components/Screen4'

export default function Home() {
  return (
    <main>
        <Notification/>
        <Hero />
        <Screen2 />
        <Screen3 />
        <Screen4 />
    </main>
  )
}
