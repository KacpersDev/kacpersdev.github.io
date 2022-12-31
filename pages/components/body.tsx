import Banner from '../../images/panel.svg';
import communication from '../../images/communication.svg';
import streamline from '../../images/streamline.svg';
import interFace from '../../images/interface.svg';
import strategy from '../../images/strategy.svg';
// 950
export default function Body(){
    return(
        <div id="container">
            <div id="title" className='grid justify-center'>
                <div>
                <p className="mt-20 font-bold text-center text-6xl w-[30rem] max-[1400px]:text-4xl max-[1200px]:ml-5 max-[500px]:ml-[2px]"><span className="text-blue-800">Understand</span> your <span className="text-blue-800">Customer needs</span></p>
                <p className="font-light mt-4 text-center max-w-[550px] text-2xl max-[1400px]:text-xl">
                    Understand Your Customer and what they are trying to convey in a 
                    deeper way using our state of the art sentiment analysis tool!
                </p>
                </div>
                <img className={"w-[40rem] -mt-[22rem] ml-[45rem] max-[1400px]:w-[30rem] max-[1400px]:mt-[-14rem] max-[1200px]:w-[20rem] max-[1200px]:ml-[40rem] max-[1200px]:mt-[-12rem] max-[950px]:mt-[5rem] max-[950px]:ml-auto max-[950px]:mr-auto max-[950px]:w-[25rem]"} src={Banner.src} alt={"Banner"} />
            </div> 
            <div className='flex max-[870px]:grid max-[650px]:justify-center'>
                <div id='feature-1' className='mt-[10rem] w-[40rem] h-[30rem] border-4 rounded-2xl ml-auto mr-auto max-[650px]:w-[25rem] max-[650px]:h-[35rem]'>
                    <img className='p-5' src={communication.src} alt="communication logo"/>
                    <p className='p-5 font-bold'>Enhance your customer relationships and increase retention with our advanced
sentiment analysis tool!
                    </p>
                    <p className='font-light p-5'>
                        As a savvy business owner in the restaurant industry, you know how important it is to
                        understand your customers and what they want. With our tool, you can gain deeper insights into
                        your customers' experiences and preferences using customer reviews and tickets, and use this
                        knowledge to create personalized and engaging experiences that keep them coming back formore.
                    </p>
                </div>
                <div id='feature-1' className='mt-[10rem] w-[40rem] h-[30rem] border-4 rounded-2xl ml-auto mr-auto max-[650px]:w-[25rem] max-[650px]:h-[35rem] max-[870px]:mt-10'>
                <img className='p-5' src={streamline.src} alt="streamline logo"/>
                    <p className='p-5 font-bold'>Streamline your business and boost efficiency with our all-in-one solution!
                    </p>
                    <p className='font-light p-5'>
                        Managing multiple systems and constantly importing data from different sources is time
                        consuming. Our solution brings everything you need together in one place, so you can focus on
                        what matters most - delivering an exceptional dining experience for your customers. Say
                        goodbye to the hassle and frustration of juggling multiple systems, and start enjoying the
                        simplicity and convenience of our all-in-one solution
                    </p>
                </div>
                <div id='feature-1' className='mt-[10rem] w-[40rem] h-[30rem] border-4 rounded-2xl ml-auto mr-auto max-[650px]:w-[25rem] max-[650px]:h-[35rem]'>
                    <img className='p-5' src={communication.src} alt="communication logo"/>
                    <p className='p-5 font-bold'>Enhance your customer relationships and increase retention with our advanced
sentiment analysis tool!
                    </p>
                    <p className='font-light p-5'>
                        As a savvy business owner in the restaurant industry, you know how important it is to
                        understand your customers and what they want. With our tool, you can gain deeper insights into
                        your customers' experiences and preferences using customer reviews and tickets, and use this
                        knowledge to create personalized and engaging experiences that keep them coming back formore.
                    </p>
                </div>
            </div>
        </div>
    );
}
// 870

/*
            <div className='flex -mt-28 max-[870px]:grid max-[650px]:justify-center'>
                <div id='feature-1' className='mt-[10rem] w-[40rem] h-[30rem] border-4 rounded-2xl ml-auto mr-auto max-[650px]:w-[25rem] max-[650px]:h-[35rem] max-[870px]:mt-[150px]'>
                    <img className='p-5' src={interFace.src} alt="interface logo"/>
                    <p className='p-5 font-bold'>Effortlessly navigate and manage your restaurant with our user-friendly interface!”
                    </p>
                    <p className='font-light p-5'>
                        As a restaurant owner, you have enough to worry about without being bogged down by a
                        confusing or complex system. Our interface is designed with ease-of-use in mind, making it
                        simple for you and your staff to access and update important information, streamline processes,
                        and deliver an exceptional dining experience for your customers. With our intuitive interface,
                        you'll be up and running in no time, and you can focus on what matters most - reducing churn
                        and growing your business.
                    </p>
                </div>
                <div id='feature-1' className='mt-[10rem] w-[40rem] h-[30rem] border-4 rounded-2xl ml-auto mr-auto max-[650px]:w-[25rem] max-[650px]:h-[35rem] max-[870px]:mt-[40px]'>
                <img className='p-5' src={strategy.src} alt="strategy logo"/>
                    <p className='p-5 font-bold'>Constantly test and optimize your business strategies”
                    </p>
                    <p className='font-light p-5'>
                        Our test case tool helps you do just that, by providing valuable information and insights that
                        help you identify problems and find solutions. You can use our tool to test new methods and see
                        how they perform, and use information from previous test cases to pinpoint exactly where the
                        problem lies. With our tool, you can save time, reduce frustration, and make informed decisions
                        that drive business success."
                    </p>
                </div>
            </div>
*/