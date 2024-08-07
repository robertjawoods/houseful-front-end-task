import { IoBedOutline } from "react-icons/io5";
import { Listing } from "../../../types";
import { GBP } from "../../../utils";
import Address from "../Address";

export const ListingDetails = ({ listing }: { listing: Listing }) => (
    <div className='flex place-content-between md:flex-col p-6 items-center'>
        <Address address={listing.address} />
        <div className='flex p-4 gap-2 items-center'>
            <IoBedOutline data-testid='bed-icon' />
            <p>{listing.bedrooms}</p>
        </div>
        <p>{GBP.format(listing.askingPrice)}</p>
    </div>
)
