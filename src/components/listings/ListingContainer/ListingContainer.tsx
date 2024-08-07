import { useQuery } from "@tanstack/react-query";
import { getListings } from "../../../queries";
import { Listing, ListingFilter, Listings } from "../../../types";
import { ListingCard } from "../ListingCard/ListingCard";
import { useEffect, useState } from "react";
import { FilterButton } from "../FilterButton";

const getFilterValue = (filterValue: string) => {
    if (filterValue === 'active') return true;
    if (filterValue === 'expired') return false;
}

export const ListingContainer = () => {
    // in a case like this it would usually be paginated
    const { data, error, isLoading } = useQuery<Listings>({
        queryKey: ["listings"],
        queryFn: getListings,
    });

    const [filteredListings, setFilteredListings] = useState<Listings | undefined>();
    const [filterValue, setFilterValue] = useState<ListingFilter>('all');

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
            <div className="flex justify-center gap-3 p-3 align-middle">
                <FilterButton active={filterValue === 'all'} filterValue={'all'} setFilterValue={setFilterValue} />
                <FilterButton active={filterValue === 'active'} filterValue={'active'} setFilterValue={setFilterValue} />
                <FilterButton active={filterValue === 'expired'} filterValue={'expired'} setFilterValue={setFilterValue} />
            </div>
            <ul className="flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify">
                {filteredListings?.listings.map((listing: Listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </ul>
        </div>
    );
};
