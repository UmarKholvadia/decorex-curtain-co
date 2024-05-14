import Link from 'next/link';

const CurtainCoHeader = () => {

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Curtain Co</span>
                        <img className="h-14 w-auto"
                             src="https://www.thecurtainco.co.za/wp-content/uploads/2023/08/Curtain_co_logo1.png" alt=""/>
                    </Link>
                </div>
            </nav>
        </header>)
}

export default CurtainCoHeader;
