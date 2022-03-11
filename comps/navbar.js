import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
           <Image src="/cryptologo.png" width={128} height={77} />
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/CryptoStalker"><a>CoinListing</a></Link>
        </nav>
     );
}
 
export default Navbar;