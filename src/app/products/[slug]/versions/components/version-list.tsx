"use client";

import {useState} from "react";
import {Box} from "@/components/Box";
import {Button} from "@/components/ui/stateful-button";
import {VersionType} from "@/contracts/product";

export function VersionsList({slug, initialItems}: { slug: string; initialItems: VersionType[] }) {
    const [items, setItems] = useState<VersionType[]>(initialItems);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMore = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://app-store.test/api/v1/products/${slug}/versions?page=${page}`) ?? [];
            const {data}: { data: VersionType[] } = await res.json();
            if (data.length) {
                setItems(prev => [...prev, ...data]);
            } else {
                setHasMore(false)
            }
            setPage(prev => prev + 1);
        } finally {
            setLoading(false);
        }
    };

    if (!items?.length) return null;

    return (
        <section className="my-12">
            <ul className="list-disc  space-y-3">
                {items.map((item, index) => (
                    <li key={index}>
                        <Box>
                            <div className="flex items-center gap-3 justify-start">
                                <span className="h3 mb-0">{item.title}</span>
                                <span
                                    className={`text-xs py-1 px-3 rounded-xl font-semibold ${
                                        item.release_type == 1
                                            ? "bg-yellow-300 text-yellow-900"
                                            : "bg-green-300 text-green-900"
                                    }`}
                                >
                                    {item.release_type == 1 ? "درحال توسعه" : "منتشر شده"}
                                </span>
                            </div>
                            <p>{item.changes}</p>
                        </Box>
                    </li>
                ))}
            </ul>
            {hasMore &&
                <div className="mt-6 text-center">
                    <button type="button" onClick={loadMore}
                            className={`inline-flex  items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400 ${loading ? 'cursor-not-allowed' : ''}`}
                            disabled={loading}>

                        {loading ?
                            <span className="flex items-center justify-center gap-3">
                        <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                     strokeWidth="4"></circle>
                             <path className="opacity-75" fill="currentColor"
                                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            در حال بارگیری...
                        </span>
                            : "بیشتر"}
                    </button>

                </div>
            }
        </section>
    );
}
