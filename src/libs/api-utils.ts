import {notFound} from 'next/navigation';

export const fetchApi = async (url: string, notFound: boolean = true) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            if (res.status === 404) {
                if (notFound) {
                    notFound();
                } else {
                    throw new Error(`not found`);
                }
            } else {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }
        }
        const data = await res.json();
        return {data: data?.data, pagination: data?.pagination};
    } catch (error) {
        console.error('Fetch API error:', error);
        throw error;
    }
};
