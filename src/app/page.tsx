import CurtainCoHeader from "@/app/components/header";
import Categories from "@/app/components/categories";

export default function Home() {
    return (
        <main className={'min-h-full'}>
            <CurtainCoHeader/>
            <Categories/>
        </main>
    );
}
