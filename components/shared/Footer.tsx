import Image from "next/image"
import Link from "next/link"
const Footer = () => {
    return (
            <footer className="border-t">
                <div>
                    <Link href="/">
                        <Image 
                        src="/assets/image/logo.svg"
                        alt="logo"
                        width={128}
                        height={128}
                        />
                    </Link>
                </div>
            </footer>
    )
}
export default Footer