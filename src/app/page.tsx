import CurtainCoHeader from "@/components/header";
import Categories from "@/components/categories";

export default function Home() {
    return (
        <main className={'min-h-full'}>
            <CurtainCoHeader/>
            <Categories/>
        </main>
    );
}
