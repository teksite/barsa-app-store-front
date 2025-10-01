import {fetchApi} from "@/libs";
import {ProductBase, GroupWithPropertyType} from "@/contracts/product";
import {FilterGroup} from "@/app/products/components/filter-group";
import {ListProduct} from "@/app/products/components/list-product";

export default async function ProductsPage() {

    const {data: products}: { data: ProductBase[] } = await fetchApi(
        `http://app-store.test/api/v1/products`
    );
    const {data: groups}: { data: GroupWithPropertyType[] } = await fetchApi(
        `http://app-store.test/api/v1/product-groups`
    );

    return  <FilterGroup groups={groups} initialProducts={products}/>
}


