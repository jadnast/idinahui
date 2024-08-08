"use client"
import { usePathname } from 'next/navigation'

function decodeURL(encodedString: string): string {
    return decodeURIComponent(encodedString);
}
 
export default function PathnameINH() {
  const pathname = usePathname()
  const decodedPath = decodeURL(pathname.slice(1))

  return (
    <>
      {decodedPath == 'jadnast' || decodedPath == 'li0ard'
        ? <p className='font-black text-7xl'><span className='opacity-80 text-2xl'>СЕГОДНЯ... </span><br/><span className='text-inh'>Самолично</span>, ИДИ НА ХУЙ!</p>
        : <p className='font-black text-7xl'><span className='opacity-80 text-2xl'>СЕГОДНЯ... </span><br/><span className='text-inh'>{decodedPath}</span>, ИДИ НА ХУЙ!</p>
      }
    </>
  )
}