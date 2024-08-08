"use client"
import { usePathname } from 'next/navigation'

function decodeURL(encodedString: string): string {
    return decodeURIComponent(encodedString);
}
 
export default function PathnameINH() {
  const pathname = usePathname()
  return <p className='font-black text-7xl'><span className='opacity-80 text-2xl'>СЕГОДНЯ... </span><br/><span className='text-inh'>{decodeURL(pathname.slice(1))}</span>, ИДИ НА ХУЙ!</p>
}