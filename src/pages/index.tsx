import Head from 'next/head';
import Page from '@/components/Page';

export default function Home() {
  return (
    <>
      <Head>
        <title>co.poiesis</title>
        <meta name="description" content="a place for poetic syntax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center text-center p-12">
        <h1 className="text-4xl font-bold mb-4">co.poiesis</h1>
        <p className="text-lg text-gray-600">a place for living syntax and poetic fragments</p>
      </main>
    </>
  );
}
