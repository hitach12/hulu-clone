import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Head from 'next/head'
import NavBar from './components/NavBar'
import Content from './components/Content'
import requests from '@/utils/requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu-Clone</title>
      </Head>
  
    
    {/* header */}
    <Header/>

    {/* naBar */}

    <NavBar/>
    {/* Content */}

    <Content results={results}/>

    </div>
  )
}

export async function getServerSideProps (context) {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res)=> res.json())

  return {
    props : {
      results : request.results
    }
  }
}