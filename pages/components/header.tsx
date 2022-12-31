import { useRouter } from 'next/router';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.svg';

let selectorClicked = false;

export default function Header(){

    const router = useRouter();

    return(
        <div className="mb-20">
            <img className='flex justify-start w-24 ml-20 mt-1 hover:cursor-pointer' src={Logo.src} alt={"company logo"} onClick={(() => router.push('/'))}/>
            <div className="flex justify-center -mt-14 font-light max-[600px]:hidden">
                <button className="font-sans text-xl hover:text-slate-500">Features</button>
                <button className="mx-7 text-xl hover:text-slate-500" onClick={(() => router.push('/pricing'))}>Pricing</button>
            </div>
            <div className="flex justify-end mx-20 -mt-7 font-light max-[600px]:hidden">
                <button className="font-mono justify-center text-xl hover:text-slate-500" onClick={(() => router.push('/login'))}>Log In</button>
            </div>
            <div className='grid min-[600px]:hidden bg-blue-800'>
                <img className={"ml-auto mr-20 w-10 -mt-16 hover:cursor-pointer"} src={Menu.src} alt={"Menu logo"} onClick={selectorClick}/>
                <button className='hidden text-white hover:text-slate-300 justify-start ml-24 mt-2' id='features'>Features</button>
                <button className='hidden text-white hover:text-slate-300 justify-start ml-24 mt-2' id='pricing'>Pricing</button>
                <button className='hidden text-white hover:text-slate-300 justify-start ml-24 mt-2 mb-2' id='login'>Log In</button>
            </div>
        </div>
    );
}

const selectorClick = () =>{
    const features = document.getElementById('features');
    const pricing = document.getElementById('pricing');
    const login = document.getElementById('login');

    if (!selectorClicked){
        // @ts-ignore
        features.style.display = 'grid'; // @ts-ignore
        pricing.style.display = 'grid'; // @ts-ignore 
        login.style.display = 'grid';
        selectorClicked = true;
    } else {
        // @ts-ignore
        features.style.display = 'none'; // @ts-ignore
        pricing.style.display = 'none'; // @ts-ignore 
        login.style.display = 'none';
        selectorClicked = false;
    }
}