import { useRouter } from "next/router";
import checkMark from '../../images/checkmark.svg';

let locationBoolean = false;
let commitmentBoolean = false;
let languageBoolean = false;
let apiBoolean = false;
let agenciesBoolean = false;

export default function PricingBody(){
    
    const router = useRouter();

    return(
        <div>
            <div className="grid justify-center text-center bg-[#f4f8fc] max-[320px]:ml-5 -mr-12" id="paying">
                <p className="mb-10 -ml-16 text-blue-800 text-1xl mt-12 font-bold max-[600px]:-ml-6">PRICING</p>
                <p className="mb-10 text-5xl font-light max-w-2xl -ml-12 max-[600px]:-ml-6 max-[600px]:text-3xl"><span className="text-blue-800 font-bold">SIMPLE</span> and <span className="text-blue-800 font-bold">AFFORDABLE</span> Pricing.</p>
                <p className="font-light text-lg ml-14 mr-14 mb-12">Simple pricing, try for free for 14 days. No credit card required</p>
            </div>
            <div className="flex justify-center -ml-[30rem] mt-10 max-[930px]:ml-auto">
                <div className="bg-white border  w-96 h-[48rem] rounded-2xl max-[400px]:w-fit max-[320px]:ml-12 -mr-5 max-[375px]:ml-5">
                    <p className="p-5 font-bold text-xl">Individual</p>
                    <p className={"p-5"}><span className="text-4xl font-bold">$50</span><span className="text-gray-400 font-light"> / month</span></p>
                    <div className="inline-flex">
                        <img className="-mt-3 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">For most businesses that want to optimize web queries.</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-3 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Advanced Metrics and Indicators to detail Customer's problem</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-1 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Automate Replies to Reviews</p>
                    </div>
                    <div className="inline=flex">
                        <img className="mt-5 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 ml-8 -mt-10 font-light">Automate Replies to Customer emails</p>
                    </div>
                    <div className="inline=flex">
                        <img className="mt-5 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light ml-8 -mt-10">Automate Replies to Customer emails</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-2 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Realtime data flowing in to get updated information</p>
                    </div>
                    <div className="inline-flex">
                        <img className="ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Process 100 reviews and tickets per month</p>
                    </div>
                    <button className="bg-[#4f46e5] rounded-2xl w-64 h-16 text-white font-light mt-[100px] flex p-5 justify-center ml-auto mr-auto">Choose Plan</button>
                </div>
            </div>

            <div className="flex justify-center ml-[25rem] -mt-[48rem] max-[930px]:mt-[10rem] max-[930px]:ml-auto">
                <div className="bg-white border  w-96 h-[48rem] rounded-2xl max-[400px]:w-fit max-[320px]:ml-12 -mr-5 max-[375px]:ml-5">
                    <p className="p-5 font-bold text-xl">Enterprise</p>
                    <p className={"p-5"}><span className="text-4xl font-bold">$100</span><span className="text-gray-400 font-light"> / month</span></p>
                    <div className="inline-flex">
                        <img className="-mt-3 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">For most businesses that want to optimize web queries.</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-3 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Advanced Metrics and Indicators to detail Customer's problem</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-1 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Automate Replies to Reviews</p>
                    </div>
                    <div className="inline=flex">
                        <img className="mt-5 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 ml-8 -mt-10 font-light">Automate Replies to Customer emails</p>
                    </div>
                    <div className="inline=flex">
                        <img className="mt-5 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light ml-8 -mt-10">Automate Replies to Customer emails</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-2 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Realtime data flowing in to get updated information</p>
                    </div>
                    <div className="inline-flex">
                        <img className="-mt-0 ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Work closely with Intellum's team</p>
                    </div>
                    <div className="inline-flex">
                        <img className="ml-3" src={checkMark.src} alt="" />
                        <p className="p-5 font-light">Process 500 reviews and tickets per month</p>
                    </div>
                    <button className="bg-[#4f46e5] rounded-2xl w-64 h-16 text-white font-light mt-[30px] flex p-5 justify-center ml-auto mr-auto">Choose Plan</button>
                </div>
            </div>
            <div className="bg-white border w-[50rem] h-56 mt-32 ml-auto mr-auto rounded-2xl max-[830px]:rounded-none">
                <p className=" p-7 text-21xl font-bold max-[830px]:">Want a custom experience?</p>
                <p className=" font-light mr-1 p-5 w-[30rem]">Experience the extraordinary with a custom touch and make your data intimate!</p>
                <button className="text-white text-center p-3 pl-[90px] ml-[30rem] bg-[#4f46e5] -mt-[5rem] font-bold w-72 h-12 rounded-2xl  hover:bg-gray-200 hover:text-blue-800 flex max-[830px]:-mt-1 max-[830px]:ml-5"
                onClick={(() => router.push('/register'))}>Contact Sales</button>
            </div>

            <div className="bg-gray-50 grid justify-center mt-[1rem]">
                <p className="font-bold mt-32 flex justify-center text-3xl">Frequently Asked Questions</p>
                <hr />
                <p className="mt-10 flex justify-center font-bold hover:cursor-pointer mr-10" id="locations" onClick={location}>Can I add more locations to my plan?</p>
                <p className="mt-5 font-light w-72 mb-5 hidden ml-10 text-start" id="locations_desc">Yes! If you hit the limit of your subscription, you will be prompted to update your plan to continue adding as many locations as you need.</p>
                <hr/>
                <p className="mt-10 flex justify-center font-bold hover:cursor-pointer mr-24" id="commitments" onClick={commitment}>What is the time commitment?</p>
                <p className="mt-5 font-light w-72 mb-5 hidden ml-10 text-start" id="commitments_desc">We don't want to lock you in. We don't have setup fee and our subscriptions and month-to-month and you can cancel every time. You have an option to pay yearly and get a discount.</p>
                <hr />
                <p className="mt-10 flex justify-center font-bold hover:cursor-pointer mr-16" id="languages" onClick={language}>Which languages do you support?</p>
                <p className="mt-5 font-light w-72 mb-5 hidden ml-10 text-start" id="language_desc">Our AI speaks more than 20 languages: English, Spanish, German, French, Italian, Portuguese, Russian and more! We encourage to try it out and if you face any problems let us know.</p>
                <hr/>
                <p className="mt-10 flex justify-center font-bold hover:cursor-pointer mr-44 ml-2" id="api" onClick={api}>Do you offer an API?</p>
                <p className="mt-5 font-light w-72 mb-5 hidden ml-10 text-start" id="api_desc">Yes! You can integrate our Smart Replies into your product to provide an embedded experience to your customers.</p>
                <hr/>
                <p className="mt-10 flex justify-center font-bold hover:cursor-pointer mr-2" id="agencies" onClick={agencies}>Do you offer white-labelling for Agencies?</p>
                <p className="mt-5 font-light w-72 mb-5 hidden ml-10 text-start" id="agencies_desc">Yes, we can work with you to customize our app to match your brand. Let's connect!</p>
                <hr/>
            </div>
        </div>
    );
}

const location = () => {
    const element = document.getElementById('locations');
    const doc = document.getElementById('locations_desc');

    if (!locationBoolean) {
        // @ts-ignore
        doc.style.display = 'grid';
        locationBoolean = true;
    } else {
        // @ts-ignore
        doc.style.display = 'none';
        locationBoolean = false;
    }
}

const commitment = () => {
    const element = document.getElementById('commitments');
    const doc = document.getElementById('commitments_desc');

    if (!commitmentBoolean) {
        // @ts-ignore
        doc.style.display = 'grid';
        commitmentBoolean = true;
    } else {
        // @ts-ignore
        doc.style.display = 'none';
        commitmentBoolean = false;
    }
}

const language = () => {
    const element = document.getElementById('languages');
    const doc = document.getElementById('language_desc');

    if (!languageBoolean) {
        // @ts-ignore
        doc.style.display = 'grid';
        languageBoolean = true;
    } else {
        // @ts-ignore
        doc.style.display = 'none';
        languageBoolean = false;
    }
}

const api = () => {
    const element = document.getElementById('api');
    const doc = document.getElementById('api_desc');

    if (!apiBoolean) {
        // @ts-ignore
        doc.style.display = 'grid';
        apiBoolean = true;
    } else {
        // @ts-ignore
        doc.style.display = 'none';
        apiBoolean = false;
    }
}

const agencies = () => {
    const element = document.getElementById('agencies');
    const doc = document.getElementById('agencies_desc');

    if (!agenciesBoolean) {
        // @ts-ignore
        doc.style.display = 'grid';
        agenciesBoolean = true;
    } else {
        // @ts-ignore
        doc.style.display = 'none';
        agenciesBoolean = false;
    }
}