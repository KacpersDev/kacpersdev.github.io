import { useRouter } from "next/router";
import Logo from '../../images/bigger_logo.png';
import Twitter from '../../images/twitter.svg';

export default function Footer(){
    
    const router = useRouter();

    return(
        <div>
            <div className="bg-blue-800 h-96 mt-32">
                <img className="mr-auto ml-auto w-48" src={Logo.src} alt={"company logo"} />
                <div className="grid -mt-10">
                    <button className="text-white hover:text-gray-300" onClick={(() => router.push('/'))}>Home</button>
                    <button className="text-white hover:text-gray-300" onClick={(() => router.push('/pricing'))}>Pricing</button>
                    <button className="text-white hover:text-gray-300" onClick={(() => router.push('/contact'))}>Contact</button>
                    <button className="text-white hover:text-gray-300" onClick={(() => router.push('/privacy'))}>Privacy Notice</button>
                    <button className="text-white hover:text-gray-300" onClickCapture={(() => router.push('/tos'))}>Terms Of Service</button>
                    <button className="text-white hover:text-gray-300" onClick={(() => router.push('/login'))}>Login</button>
                    <img className="mr-auto ml-auto mt-5 hover:cursor-pointer" src={Twitter.src} alt={"twitter logo"} />
                    <p className="text-white text-center mt-5 font-bold">Made with ❤️ by KacperM</p>
                </div>
            </div>
        </div>
    );  
}