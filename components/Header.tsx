import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <h1>
                <span>
                    <a href="/">
                        <Image src="/assets/next.svg" width="50" height="50" alt="logo" />
                    </a>
                </span>
            </h1>
        </header>
    )
} 