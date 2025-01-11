
function App() {
    return (
        <div className="mx-32 mt-10">
            <header className="mb-10">
                <nav className="flex justify-between items-center">
                    <img src="../images/logo-bookmark.svg" alt=""/>
                    <ul className="inline-flex items-center">
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">FEATURES</a>
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">PRICING</a>
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">CONTACT</a>
                        <a href="#" className="px-5 py-3 text-white bg-red-500  border shadow-2xl border-red-500 hover:text-red-500 hover:bg-white">LOGIN</a>
                    </ul>
                </nav>
            </header>

        {/*  Section-1  */}
        <section className="flex justify-between items-center">
            <div className="flex-1 flex flex-col">
                <div className="mb-4">
                    <h1 className="text-5xl mb-4 text-blue-950 font-bold">A Simple Bookmark <br/> Manager</h1>
                    <p className="text-gray-600">A clean and simple interface to organize your favourite <br/> websites.
                        Open a new
                        browser tab and see your sites load <br/> instantly. Try it for free.</p>
                </div>
                <div className="flex">
                    <a href="#"
                       className="px-5 py-3 mr-4 shadow-2xl shadow-blue-200 text-white bg-blue-700  border border-blue-700 hover:text-blue-700 hover:bg-white">Get
                        it on Chrome</a>
                    <a href="#"
                       className="px-5 py-3 shadow-2xl text-gray-900 bg-gray-100  hover:border hover:border-gray-900 hover:text-gray-900 hover:bg-white">Get
                        it on Firefox</a>
                </div>
            </div>

            <div className="flex-1"><img src="../images/illustration-hero.svg" alt=""/></div>
        </section>
        </div>
    );
}

export default App;
