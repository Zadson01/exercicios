import Image from 'next/image'
import back from '../pages/css/img/Primeiro.png'
 
export default function Page() {
  return (
    <Image
      src={back}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}