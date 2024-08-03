import { useQuery } from "@tanstack/react-query";
import { getListings } from "../queries";
import { Listing } from "../types";
import { ListingCard } from "./ListingCard";

export const ListingContainer = () => {
    const query = useQuery<Listing[]>({ queryKey: ['listings'], queryFn: getListings });

    console.log(query);

    return (
        <ul className="flex flex-col gap-8 lg:flex-row">
            {
                query.data?.map((listing) => (<ListingCard key={listing.id} listing={listing} />))
            }
        </ul>
    )
}
