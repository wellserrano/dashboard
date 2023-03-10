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
    <div 
    className={`${inter.variable} font-inter flex justify-center 
    items-center flex-col min-w-min min-h-screen bg-[#292738] p-32`}
    >
      <Head>
        <title>dashboard</title>
      </Head>
      
      <div className='flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-2'>
        <CardQuality />
        <CardQuantity title='Vendas fechadas' size={200} percentage={ 25 }/>
        <CardQuantity title='Meta mensal' size={200} percentage={ 75 }/>
        <Panel />
      </div>
      
    </div>
  )
}

export default Home