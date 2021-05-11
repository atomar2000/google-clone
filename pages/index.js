import Head from 'next/head'
import Avatar from '../components/Avatar'
import { Microphone, MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from "@heroicons/react/outline"
import Footer from '../components/Footer.js'
import {useRef} from "react";
import {Router, useRouter} from "next/router"

export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e =>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    
    router.push(`/search?term=${term}`);

  }


  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700 bg">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://qph.fs.quoracdn.net/main-thumb-248268125-100-fnjgexnhrbtsiqyexachdhlryzzlvosw.jpeg" />

        </div>
      </header>
      <form className="flex flex-col items-center mt-40 flex-grow">
        <Image src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' height={100} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-e-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 mr-3"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer className="fixed h-20"/>
    </div>
  )
}
