import {fetchApi} from "@/libs";
import {Hero} from "@/app/products/[slug]/components/hero";
import {ProductType} from "@/contracts/product";
import {notFound} from "next/navigation";
import {DownloadCatalog} from "@/app/products/[slug]/components/download-catalog";
import {Requirement} from "@/app/products/[slug]/components/requirement";
import {Owner} from "@/app/products/[slug]/components/owner";
import {LastVersion} from "@/app/products/[slug]/components/last-version";
import {Demo} from "@/app/products/[slug]/components/demo";

export default async function SingleProductPage({params}: { params: { slug: string } }) {
    const {slug} = await params;
    const {data:product}:{data: ProductType} = await fetchApi(`http://app-store.test/api/v1/products/${slug}`);
    if (!product) return notFound();

    return (
        <>
            <Hero product={product}/>

            <article className="py-12 inner-container">
                <div className="grid gap-6 xl:grid-cols-3">
                    <main className="xl:col-span-2">
                        <section className="mb-6">
                            <h2>توضیحات این نرم‌افزار</h2>
                            <div className="mb-12" dangerouslySetInnerHTML={{__html: product?.body ?? ""}}/>

                            <Section title={`ویژگی‌های نرم‌افزار ${product.title}`} items={product.features}/>

                            <Section title="ویژگی‌های درحال توسعه" items={product.features_soon}/>
                        </section>
                        <Requirement items={product.requirements}/>
                        <DownloadCatalog url={product.catalog} title={product.title}/>

                    </main>

                    <aside>
                        <div className="sticky top-6 space-y-6">

                            <Owner owner={product.owner} />
                            <LastVersion version={product.last_version} link={`/products/${slug}/versions`} />
                            <Demo title={product.title}/>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
}


const Section = ({title, items}: { title: string; items?: string[] }) => {
    if (!items?.length) return null;
    return (
        <section className="my-12">
            <h2>{title}</h2>
            <ul className="!list-disc list-inside space-y-3">
                {items.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    );
};