export interface Listing {
    image: string; 
    bedrooms: number;
    askingPrice: number;
    address: string;
    status: ListingStatus;
}

export enum ListingStatus {
    Active = 'Active',
    Expired = 'Expired'
}

export interface Address {
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
}
