import {ProductBase} from "@/contracts/product";
import ExpandableProductList from "@/app/products/components/expandable-product-list";

export function ListProduct({products}: { products: ProductBase[] }) {
    return (
        <ExpandableProductList products={products}/>
    );
}
