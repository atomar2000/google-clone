import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import Avatar from './Avatar';
import HeaderOptions from '../components/HeaderOptions'
function Header() {
    const searchInputRef = useRef(null);
    const router = useRouter();

    const search = e =>{
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`)
    }

    return (

        <header className="sticky top-0 bg-white">
            
            <div className="flex w-full p-6 items-center">
                <Image src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' height={40} width={120} 
                onClick={()=>router.push("/")}
                className="cursor-pointer"/>
                <form className=" px-6 py-3 mt-3 mr-5 flex flex-grow border max-w-3xl border-gray-200 rounded-full shadow-lg items-center ml-10">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 mr-3 hover:text-red-600"
                onClick={()=> searchInputRef.current.value=""}
                />
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                <button hidden type="submit" onClick={search}>search</button>
            </form>
            <Avatar url="https://qph.fs.quoracdn.net/main-thumb-248268125-100-fnjgexnhrbtsiqyexachdhlryzzlvosw.jpeg" className="ml-auto "/>
            </div>    
            <HeaderOptions/>        
        </header>
    )
}

export default Header
