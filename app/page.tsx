import Link from 'next/link'
import Image from 'next/image'
import TypewriterComponent from '@/components/TypewriterComponent'

export default function Home() {

  return (
    <>
      <main className="flex flex-col justify-center p-2 items-center">
        <Image src="/assets/tap-creator.png" priority={true} width="384" height="384" alt="Tap Creator" />
        <TypewriterComponent />
        <h3 className="name-tag py-3">Keep Moving Forward 🔥</h3>
        <div className='pt-9'>
          <Link href="/resume" className="button">Resume</Link>
          <Link href="/experience" className="button">Experience</Link>
          <Link href="/project" className="button">Project</Link>
        </div>
      </main>
    </>
  )
}
