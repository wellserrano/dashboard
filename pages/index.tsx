import React from 'react'

import Head from 'next/head'
import { Inter } from '@next/font/google'

import Panel from '../components/Panel'
import CardQuality from '../components/CardQuality'
import CardQuantity from '../components/CardQuantity'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const Home: React.FC = () => {
  return (
    <div className={`${inter.variable} font-inter flex justify-center items-center w-full min-h-screen bg-[#292738]`}>
      <Head>
        <title>dashboard</title>
      </Head>
      
      <div className='grid grid-cols-3 grid-rows-2 gap-4'>
        <CardQuality />
        <CardQuantity />
        <CardQuantity />
        <Panel />
      </div>
    </div>
  )
}

export default Home