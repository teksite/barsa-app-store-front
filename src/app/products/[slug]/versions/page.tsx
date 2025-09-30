import {ProductType, VersionType} from "@/contracts/product";
import {fetchApi} from "@/libs";
import {notFound} from "next/navigation";
import {Hero} from "@/app/products/[slug]/components/hero";
import {Box} from "@/app/components/Box";
import {VersionsList} from "@/app/products/[slug]/versions/components/version-list";

export default async function VersionsPage({params}: { params: { slug: string } }) {
    const {slug} = await params;
    const product: ProductType = await fetchApi(`http://app-store.test/api/v1/products/${slug}`);
    if (!product) return notFound();
    const versions: VersionType[] = await fetchApi(`http://app-store.test/api/v1/products/${slug}/versions?page=1`);

    return (
        <>
            <Hero product={product}/>
            <main className="inner-container">
                <VersionsList slug={slug} initialItems={versions}/>
            </main>

        </>
    );
}


const RenderItems = (items: VersionType[]) => {
    if (!items?.length) return null;
    return (
        <section className="my-12">
            <ul className="list-disc  space-y-3">
                {items.map((item, index) => (
                    <li key={index}>
                        <Box className={""}>
                            <div className="flex items-center gap-3 justify-start">
                                <span className="h3 mb-0">
                                    {item.title}
                                </span>
                                <span
                                    className={`text-xs py-1 px-3 rounded-xl font-semibold ${item.release_type == 1 ? 'bg-yellow-300 text-yellow-900' : 'bg-green-300 text-green-900'}`}>
                                    {item.release_type == 1 ? 'درحال توسعه' : 'منتشر شده'}
                                </span>
                            </div>
                            <p>
                                {item.changes}
                            </p>
                        </Box>
                    </li>
                ))}
            </ul>
        </section>
    );
}