import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Main from '../components/Main'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Oppgave</title>
      </Head>

      <Container>
        <h1 className="text-3xl text-black mt-3">Oppgave</h1>

       <Main/>

      </Container>

    </>
  )
}

export default Home
