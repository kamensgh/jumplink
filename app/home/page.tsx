import Banner from '@/components/search/Banner'
import Title from '@/components/titlebar/Title'
import List from '@/components/video/List'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'





async function  Home() {

    const session = await getServerSession();

    if (!session) {
      redirect('/')
      
    }
  return (
    <div>
      <Banner />
      <div>
        <Title/>
        <List/>


      </div>
    </div>
  )
}

Home.requireAuth = true;
export default Home