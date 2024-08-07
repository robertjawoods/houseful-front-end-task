import { Listings } from "../types";

export const getListings = async (): Promise<Listings> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/listings`);

        return response.json();
    } catch {
        throw new Error('Error fetching listings');
    }
};
