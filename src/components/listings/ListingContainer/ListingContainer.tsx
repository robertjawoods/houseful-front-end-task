import { useQuery } from "@tanstack/react-query";
import { getListings } from "../../../queries";
import { Listing, ListingFilter, Listings } from "../../../types";
import { ListingCard } from "../ListingCard/ListingCard";
import { useEffect, useState } from "react";

const getFilterValue = (filterValue: string) => {
    if (filterValue === 'active') return true;
    if (filterValue === 'expired') return false;
}

export const ListingContainer = ({ filterValue }: { filterValue: ListingFilter }) => {
    // in a case like this it would usually be paginated
    const { data, error, isLoading } = useQuery<Listings>({
        queryKey: ["listings"],
        queryFn: getListings,
    });

    const [filteredListings, setFilteredListings] = useState<Listings | undefined>();

    useEffect(() => {
        if (filterValue === 'all') setFilteredListings(data);

        if (filterValue !== 'all') {

            const filteredListings = data?.listings.filter((listing) => listing.isActive === getFilterValue(filterValue));

            setFilteredListings({ listings: filteredListings ?? [] });
        }

    }, [filterValue, data]);


    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) return <span data-testid='error-message'>Error: {error.message}</span>;

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mt-2">Listings</h1>
            <ul className="flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredListings?.listings.map((listing: Listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </ul>
        </div>
    );
};
