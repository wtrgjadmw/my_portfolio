import Head from 'next/head'
import { Education } from '../components/Education'
import Header from '../components/Header'
import Introduction from '../components/Introduction'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/mf.ico" />
      </Head> 
      <Header/>
      <div className="flex justify-center items-center py-20">
        <Introduction/>
      </div>
      <Education/>
    </div>
  )
}
