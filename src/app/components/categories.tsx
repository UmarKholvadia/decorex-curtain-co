import CurtainCard from "@/app/lib/ui/CurtainCard";

type CategoryProp = {
    label: string;
    route: string;
    image: string;
}

const Categories = () => {
    const CATEGORY_LIST = [{
        label: 'Products',
        route: 'products',
        image: 'https://www.thecurtainco.co.za/wp-content/uploads/2023/08/1-9.jpg'
    }, {
        label: 'Services',
        route: 'services',
        image: 'https://www.thecurtainco.co.za/wp-content/uploads/2023/08/5-6.jpg'
    }, {
        label: 'Gallery',
        route: 'gallery',
        image: 'https://www.thecurtainco.co.za/wp-content/uploads/2023/08/6-8.jpg'
    }]

    return (
        <div className="flex flex-row gap-4 items-center justify-center category-container">
            {CATEGORY_LIST.map((category: CategoryProp) => <CurtainCard key={category.route} label={category.label}
                                                                        route={category.route}
                                                                        image={category.image}/>)}
        </div>
    )
}

export default Categories;
