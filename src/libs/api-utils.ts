import { notFound } from 'next/navigation';

export const fetchApi = async(url: string) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            if (res.status === 404) {
                notFound();
            } else {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }
        }
        const data = await res.json();
        return data?.data;
    } catch (error) {
        console.error('Fetch API error:', error);
        throw error;
    }
};
