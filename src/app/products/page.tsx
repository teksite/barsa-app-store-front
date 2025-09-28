import {fetchApi} from "@/libs";

export default async function ProductsIndexPage(){
    const response = await fetchApi('http://app-store.test/api/v1/products ');


    return (

        <h1>PRODUCTS</h1>
    );
}