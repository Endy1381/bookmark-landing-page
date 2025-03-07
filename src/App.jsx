import { useState, useRef } from 'react';


function App() {

    let [state, setState] = useState(1);


    let img1 = '/illustration-features-tab-1.svg';
    let img2 = '/illustration-features-tab-2.svg';
    let img3 = '/illustration-features-tab-3.svg';
    let img;
    let header
    let p


    switch (state) {
        case 1:
            img = img1;
            header = "Bookmark in one click";
            p = "Organize your bookmarks however you like. Our \n simple drag-and-drop interface gives you complete \n" + "  control over how you manage your favourite sites.";
            break;
        case 2:
            img = img2;
            header = "Intelligent search";
            p = "Our powerful search feature will help you find saved sites in no time at all. \n" +
                "  No need to trawl through all of your bookmarks."
            break;
        case 3:
            img = img3;
            header = "Share your bookmarks";
            p = "Easily share your bookmarks and collections with others. Create a shareable \n" +
                "  link that you can send at the click of a button."
            break;
        default:
            img = img1;
            break;
    }


    const state1 = () => {
        setState(1);
    };
    const state2 = () => {
        setState(2);
    };
    const state3 = () => {
        setState(3);
    };
    const input = useRef()
    const [filled, setFilled] = useState(true);
    const handleClick = (e) => {
        e.preventDefault()
        if(input.current.value === ""){
            setFilled(false);
        }else {
            setFilled(true);
        }
    }
    const [nav, setNav] = useState(1);
    const toggleNava = () => {
        setNav(2);
    }
    const inverseNav = () => {
        setNav(1);
    }

    return (
        <div>
            {nav === 2 && <div className="bg-blue-950 opacity-95 fixed inset-0 ">
                <div className="mx-10">
                    <header className=" py-5 mb-20">
                        <div className="flex justify-between items-center">
                            <img src="/logo-bookmark-inverted.svg" alt=""/>
                            <button onClick={inverseNav} className="text-2xl text-white">X</button>
                        </div>
                    </header>
                    <div className="flex tracking-wider justify-center text-center items-center text-5xl text-white flex-col">
                        <a href="#" className="border-t-2 w-full py-5 hover:border-2">FEATURES</a>
                        <a href="#" className="border-t-2 py-5 w-full hover:border-2">PRICING</a>
                        <a href="#" className="border-t-2 py-5  w-full hover:border-2">CONTACT</a>
                        <a href="#" className="border-t-2 py-5 w-full hover:border-2 border-b-2">LOGIN</a>
                    </div>
                </div>
                <footer>
                    <div className="flex mx-32 mt-32  justify-center">
                        <img className="mx-1" src="/icon-facebook.svg" alt=""/>
                        <img className="mx-1" src="/icon-twitter.svg" alt=""/>
                    </div>
                </footer>
            </div>}


            {nav === 1 && <div className="overflow-x-hidden">
                <div className="lg:mx-32 mx-10 mt-10 ">
                    <header className="mb-20">
                        <nav className="flex justify-between items-center">
                            <img src="/logo-bookmark.svg" alt=""/>

                            <ul className="lg:inline-flex hidden items-center ">
                                <a href="#" className="px-5 text-blue-950 hover:text-red-900">FEATURES</a>
                                <a href="#" className="px-5 text-blue-950 hover:text-red-900">PRICING</a>
                                <a href="#" className="px-5 text-blue-950 hover:text-red-900">CONTACT</a>
                                <a
                                    href="#"
                                    className="px-5 py-3 rounded-md text-white bg-red-500 border shadow-2xl border-red-500 hover:text-red-500 hover:bg-white"
                                >
                                    LOGIN
                                </a>
                            </ul>
                            <button onClick={toggleNava} className="lg:hidden block"><img src="/icon-hamburger.svg" alt=""/></button>
                        </nav>


                    </header>

                    {/* Section-1 */}
                    <section
                        className="flex  flex-col-reverse lg:text-start text-center lg:flex-row lg:justify-between items-center mb-20">
                        <div className="lg:flex-1 flex flex-col">
                            <div className="mb-4">
                                <h1 className="text-5xl mb-4 text-blue-950 font-bold">A Simple Bookmark <br/> Manager
                                </h1>
                                <p className="text-gray-600">
                                    A clean and simple interface to organize your favourite <br/> websites. Open a new
                                    browser
                                    tab and see your sites load <br/> instantly. Try it for free.
                                </p>
                            </div>
                            <div className="flex lg:justify-start justify-center">
                                <a
                                    href="#"
                                    className="px-5 py-3 mr-4 rounded-md shadow-2xl shadow-blue-200 text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                                >
                                    Get it on Chrome
                                </a>
                                <a
                                    href="#"
                                    className="px-5 py-3 rounded-md shadow-2xl text-gray-900 bg-gray-100 hover:border hover:border-gray-900 hover:text-gray-900 hover:bg-white"
                                >
                                    Get it on Firefox
                                </a>
                            </div>
                        </div>

                        <div className="lg:flex-1">
                            <img src="/illustration-hero.svg" alt=""/>
                        </div>
                    </section>

                    {/* Section 2 features */}
                    <section className="lg:mb-32 flex flex-col">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-4xl text-blue-950 font-bold mb-5">Features</h1>
                            <p className="text-center text-gray-700 mb-6">
                                Our aim is to make it quick and easy for you to access your <br/> favourite websites.
                                Your
                                bookmarks sync between your devices <br/> so you can access them on the go.
                            </p>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:mx-52 mb-10">
                            <button
                                onClick={state1}
                                className={`lg:flex-1 text-center px-5 py-3 hover:text-red-500 ${
                                    state === 1 ? 'border-b-4  border-red-500' : ''
                                }`}
                            >
                                Simple Bookmarking
                            </button>
                            <button
                                onClick={state2}
                                className={`flex-1 text-center px-5 py-3  hover:text-red-500 ${
                                    state === 2 ? 'border-b-4  border-red-500' : ''
                                }`}
                            >
                                Speedy Searching
                            </button>
                            <button
                                onClick={state3}
                                className={`flex-1 text-center px-5  py-3 hover:text-red-500 ${
                                    state === 3 ? 'border-b-4  border-red-500' : ''
                                }`}
                            >
                                Easy Sharing
                            </button>
                        </div>

                        <div
                            className="flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:mx-32 mb-20">
                            <img className="lg:flex-1 lg:mx-10" width="200px" src={img} alt=""/>
                            <div className="lg:flex-1 lg:mx-10">
                                <h2 className="text-4xl font-bold  text-center lg:text-start text-blue-950">{header}</h2>
                                <p className="text-gray-600 my-5 mb-5 text-center lg:text-start">{p}</p>
                                <a
                                    href="#"
                                    className="flex  justify-center px-5 rounded-md py-3 lg:mr-4 shadow-2xl shadow-blue-200 text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                                >
                                    More Info
                                </a>
                            </div>
                        </div>
                    </section>

                    {/*  section-3  */}
                    <section className="mb-32 flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-4xl text-blue-950 font-bold mb-5 lg:text-start text-center">Download the
                                extension</h1>
                            <p className="text-center text-gray-700 mb-6">
                                We’ve got more browsers in the pipeline. Please do let us know if <br/> you’ve
                                got a favourite you’d like us to prioritize.
                            </p>
                        </div>
                        {/*card container*/}
                        <div className="flex lg:flex-row flex-col lg:mx-48">
                            {/*  card1  */}
                            <div
                                className="flex-1 lg:h-2/3 flex flex-col justify-center items-center rounded-md mx-2  py-8  shadow-gray-200 shadow-2xl ">
                                <img src="/logo-chrome.svg" className="mb-5" alt=""/>
                                <h1 className="text-2xl font-bold text-blue-950">Add to Chrome</h1>
                                <p className="text-gray-500 mb-12">Minimum version 62</p>
                                <img src="../images/bg-dots.svg" alt="" className="mb-5"/>
                                <a
                                    href="#"
                                    className="rounded-md px-5 py-3 mr-4 shadow-2xl shadow-blue-200 text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                                >
                                    Add & Install Extension
                                </a>
                            </div>
                            {/*  card2  */}
                            <div
                                className=" flex-1 lg:h-96 lg:mt-10  flex flex-col justify-center items-center rounded-md mx-2   py-8 shadow-gray-200 shadow-2xl ">
                                <img src="/logo-firefox.svg" className="mb-5" alt=""/>
                                <h1 className="text-2xl font-bold text-blue-950">Add to Firefox</h1>
                                <p className="text-gray-500 mb-12">Minimum version 55</p>
                                <img src="../images/bg-dots.svg" alt="" className="mb-5"/>
                                <a
                                    href="#"
                                    className="rounded-md px-5 py-3 mr-4 shadow-2xl shadow-blue-200 text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                                >
                                    Add & Install Extension
                                </a>
                            </div>
                            {/*  card3  */}
                            <div
                                className="flex-1 lg:mt-20 flex flex-col justify-center items-center rounded-md mx-2   py-8 shadow-gray-200 shadow-2xl ">
                                <img src="/logo-opera.svg" className="mb-5" alt=""/>
                                <h1 className="text-2xl font-bold text-blue-950">Add to Opera</h1>
                                <p className="text-gray-500 mb-12">Minimum version 46</p>
                                <img src="../images/bg-dots.svg" alt="" className="mb-5"/>
                                <a
                                    href="#"
                                    className="rounded-md px-5 py-3 mr-4 shadow-2xl shadow-blue-200 text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                                >
                                    Add & Install Extension
                                </a>
                            </div>
                        </div>

                    </section>

                    {/*  FAQ questions  */}
                    <div className="flex flex-col justify-center lg:text-start text-center items-center mb-10">
                        <h1 className="text-4xl text-blue-950 font-bold mb-5">Frequently Asked Questions</h1>
                        <p className="text-center text-gray-700 mb-6">
                            Here are some of our FAQs. If you have any other questions <br/> you’d like
                            answered please feel free to email us.
                        </p>
                    </div>
                    <Faq/>
                </div>

                <section className="bg-blue-700 text-white flex flex-col justify-center items-center py-20 ">
                    <div className="flex justify-center lg:mx-0 mx-10 text-center flex-col ">
                        <h3 className="text-2xl font-light tracking-wider">35,000+ ALREADY JOINED</h3>
                        <h1 className="text-4xl tracking-wide font-bold mb-10">Stay up-to-date with what <br/> we’re
                            doing</h1>
                    </div>
                    <form className="flex items-start lg:mx-auto mx-4">
                        <div className="flex flex-col">
                            <input className="py-3 px-10 mx-1 placeholder:text-start text-gray-700"
                                   placeholder="Enter your Email Here" type="text" ref={input}/>
                            {filled === false &&
                                <div className="px-5 mx-1 py-1 bg-red-500">Whoops! make sure it's an Email!</div>}

                        </div>

                        <input
                            onClick={handleClick}
                            className=" mx-1 px-5 py-3 rounded-md text-white bg-red-500 border shadow-2xl border-red-500 hover:text-red-500 hover:bg-white"
                            type="submit" value="Contact us"/>
                    </form>
                </section>
                <footer className="flex lg:flex-row flex-col lg:justify-between   bg-blue-950 py-5">
                    <div className="flex lg:flex-row flex-col justify-center mx-32">
                        <div className="flex lg:flex-row flex-col lg:mb-0 mb-2">
                            <img src="/logo-bookmark-l.svg" className="pr-5 " alt=""/>
                            <ul className="inline-flex lg:flex-row flex-col items-center text-white">
                                <a href="#" className="px-5 tracking-wider">FEATURES</a>
                                <a href="#" className="px-5 tracking-wider">PRICING</a>
                                <a href="#" className="px-5 tracking-wider">CONTACT</a>

                            </ul>
                        </div>

                    </div>
                    <div className="flex mx-32  justify-center">
                        <img className="mx-1" src="/icon-facebook.svg" alt=""/>
                        <img className="mx-1" src="/icon-twitter.svg" alt=""/>
                    </div>
                </footer>
            </div>}

        </div>


    );
}

export default App;


function Faq() {
    const [iv1, setIv1] = useState(false);
    const [iv2, setIv2] = useState(false);
    const [iv3, setIv3] = useState(false);
    const [iv4, setIv4] = useState(false);

    function set1() {
        setIv1(!iv1);
    }

    function set2() {
        setIv2(!iv2);
    }

    function set3() {
        setIv3(!iv3);
    }

    function set4() {
        setIv4(!iv4);
    }

    return (
        <div className="flex flex-col lg:justify-start ">
            <div className="flex flex-col lg:text-start   lg:mx-52">
                <button onClick={set1} className="lg:flex lg:justify-between py-3 border-y-2">
                    <p className=" text-gray-700 text-2xl hover:text-red-500 lg:mr-52">What is a bookmark</p>
                    <p className="ml-52 lg:block hidden"> + </p>
                </button>
                {iv1 && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                )}
            </div>
            <div className="flex flex-col lg:text-start   lg:mx-52">
                <button onClick={set2} className="lg:flex lg:justify-between py-3 border-y-2">
                    <p className="text-gray-700 text-2xl hover:text-red-500 lg:mr-52">How can I request a new browser?</p>
                    <p className="ml-52 lg:block hidden"> + </p>
                </button>
                {iv2 && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                )}
            </div>
            <div className="flex flex-col lg:text-start   lg:mx-52">
                <button onClick={set3} className="lg:flex lg:justify-between py-3 border-y-2">
                    <p className="text-gray-700 text-2xl hover:text-red-500 lg:mr-52">Is there a mobile app?</p>
                    <p className="ml-52 lg:block hidden"> + </p>
                </button>
                {iv3 && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                )}
            </div>
            <div className="flex flex-col lg:text-start   lg:mx-52">
                <button onClick={set4} className="lg:flex lg:justify-between py-3 border-y-2">
                    <p className="text-gray-700 text-2xl hover:text-red-500 lg:mr-52">What about other Chromium
                        browsers?</p>
                    <p className="ml-52 lg:block hidden"> + </p>
                </button>
                {iv4 && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                )}
                <a
                    href="#"
                    className="flex justify-center text-center lg:mx-72 my-3  px-5 py-3  text-white bg-blue-700 border border-blue-700 hover:text-blue-700 hover:bg-white"
                >
                    More Info
                </a>
            </div>

        </div>
    );
}
