'use client'

import {useState, useEffect} from "react";
import {GroupWithPropertyType, PropertyType, ProductBase} from "@/contracts/product";
import {Box} from "@/app/components/Box";
import {ListProduct} from "@/app/products/components/list-product";
import {ProductListSkeleton} from "@/app/products/components/skeletons/product-list-skeleton";
import {IconPicker} from "@/app/components/icon";

type Props = {
    groups: GroupWithPropertyType[];
    initialProducts: ProductBase[];
};

export function FilterGroup({groups, initialProducts}: Props) {
    const [products, setProducts] = useState<ProductBase[]>(initialProducts);
    const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const updateFilters = (newPage?: number) => {
        setPage(newPage ?? 1);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchProducts();
        }, 400);
        return () => clearTimeout(handler);
    }, [selectedProperties, search, page]);


    const fetchProducts = async () => {
        setLoading(true);
        const query = new URLSearchParams();
        selectedProperties.forEach(id => query.append('properties[]', id.toString()));
        if (search) query.append('search', search);
        query.append("page", page.toString());

        const res = await fetch(
            `http://app-store.test/api/v1/products?${query.toString()}`
        );
        const json = await res.json();

        setProducts(json.data);
        setLastPage(json.pagination.last_page);
        setLoading(false);
    };

    const toggleProperty = (id: number) => {
        setSelectedProperties(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
        updateFilters();
    };

    return (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 py-12 px-6 mx-auto max-w-[1920px]">
            <aside className="space-y-6">
                <div className='flex items-center justify-between gap-1 py-0.5 px-1 border w-full rounded-xl'>
                    <input
                        type="text"
                        placeholder="جستجو در عنوان..."
                        className="outline-none focus:outline border-none block p-2 w-full"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            updateFilters();
                        }}
                    />
                    <span
                        className={`min-w-fit w-fit aspect-square p-1 border border-zinc-300 rounded-full ${search.length ? 'bg-slate-600 text-zinc-50' : 'text-zinc-300'}`}>
                        <IconPicker icon={'arrow-left'} width={14} height={14} strokeWidth={2}/>
                    </span>
                </div>

                {groups.map(group => (
                    <GroupWithPropertiesFilter
                        key={group.id}
                        group={group}
                        selectedProperties={selectedProperties}
                        toggleProperty={toggleProperty}
                    />
                ))}
            </aside>

            <main className="md:col-span-2 lg:col-span-4">
                <div className="flex flex-col gap-6 h-full justify-between">

                    {loading ? <ProductListSkeleton/> : <ListProduct products={products}/>}

                    <div className="flex justify-center space-x-2 mt-6">
                        {[...Array(lastPage)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`px-3 py-1 border rounded ${
                                    page === i + 1 ? "bg-gray-300" : ""
                                }`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

type GroupProps = {
    group: GroupWithPropertyType;
    selectedProperties: number[];
    toggleProperty: (id: number) => void;
};

export function GroupWithPropertiesFilter({group, selectedProperties, toggleProperty}: GroupProps) {
    return (
        <Box className='w-full'>
            <div className="h3 font-bold mb-2">{group.title}</div>
            {group.properties && group.properties.length > 0 && (
                <div className='overflow-y-auto max-h-60'>
                    <PropertiesFilter
                        properties={group.properties}
                        selectedProperties={selectedProperties}
                        toggleProperty={toggleProperty}
                    />
                </div>
            )}
        </Box>
    );
}

type PropertiesProps = {
    properties: PropertyType[];
    selectedProperties: number[];
    toggleProperty: (id: number) => void;
};

export function PropertiesFilter({properties, selectedProperties, toggleProperty}: PropertiesProps) {
    return (
        <>
            {properties.map(property => (
                <div key={property.id} className='flex items-center gap-2 mb-2'>
                    <input
                        id={`property-${property.id}`}
                        type='checkbox'
                        checked={selectedProperties.includes(property.id)}
                        onChange={() => toggleProperty(property.id)}
                    />
                    <label htmlFor={`property-${property.id}`} className="text-sm">
                        {property.title}
                    </label>
                </div>
            ))}
        </>
    );
}
