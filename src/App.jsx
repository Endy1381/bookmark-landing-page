
function App() {
    return (
        <div className="mx-32 mt-10">
            <header>
                <nav className="flex justify-between items-center">
                    <img src="../images/logo-bookmark.svg" alt=""/>
                    <ul className="inline-flex items-center">
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">FEATURES</a>
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">PRICING</a>
                        <a href="#" className="px-5 text-blue-950 hover:text-red-900">CONTACT</a>
                        <a href="#" className="px-5 py-3 text-white bg-red-500 rounded-2xl border border-red-500 hover:text-red-500 hover:bg-white">LOGIN</a>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default App;
