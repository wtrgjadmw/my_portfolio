import Head from 'next/head'
import { Education, Grass, Header, Introduction } from '../components'
// import  from '../components/Header'
// import  from '../components/Introduction'

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
      <Grass/>
      <Education/>
    </div>
  )
}
