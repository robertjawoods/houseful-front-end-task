import { Address } from "./Address";

export interface Listing {
    id: number;
    image: string;
    bedrooms: number;
    askingPrice: number;
    address: Address;
    isActive: boolean;
}
