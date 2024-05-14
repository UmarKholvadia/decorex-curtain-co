import Image from 'next/image';
import Link from 'next/link';

type CurtainCardProp = {
    label: string;
    route: string;
    image: string;
}

const CurtainCard = ({label, route, image}: CurtainCardProp) => {
    return (
        <Link href={route}>
            <div
                className="z-10 overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-[250px]">
                    <Image
                        alt={`${route}-image`}
                        src={image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[250px] w-full flex-none"
                    />
                </div>
                <div className="relative p-5 bg-slate-800">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{label}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </Link>
    )
}

export default CurtainCard;
