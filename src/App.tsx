import { useQuery } from "@tanstack/react-query";
import { Listing } from "./types";
import { GBP } from './utils';

const App = () => {
    const query = useQuery<Listing[]>({
        queryKey: ['listings'], queryFn: async () => {
            const response = await fetch('http://localhost:3001/listings');
            return response.json();
        }
    });

    // TODO: Vertical cards mobile, horizontal cards desktop

    return (
        <ul>
            {
                query.data?.map((listing: Listing, index: number) => (
                    <li key={index}>
                        <img src={listing.image} alt={listing.address} />
                        <h2>{listing.status}</h2>
                        <h2>Price: {GBP.format(listing.askingPrice)}</h2>
                        <p>{listing.bedrooms} Bedrooms</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default App;
