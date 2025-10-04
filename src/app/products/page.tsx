import {fetchApi} from "@/lib";
import {ProductBase, GroupWithPropertyType} from "@/contracts/product";
import {FilterGroup} from "@/app/products/components/filter-group";
import {ListProduct} from "@/app/products/components/list-product";

export default async function ProductsPage() {

    const {data: products}: { data: ProductBase[] } = await fetchApi(
        `http://app-store.test/api/v1/products?limit=25`
    );
    const {data: groups}: { data: GroupWithPropertyType[] } = await fetchApi(
        `http://app-store.test/api/v1/product-groups`
    );

    return (
        <>
            <main className="py-12 outer-container">
                <h1 className='text-center'>
                    نرم افزار‌های برسا هاب
                </h1>
                <FilterGroup groups={groups} initialProducts={products}/>
            </main>
        </>
    );
}


