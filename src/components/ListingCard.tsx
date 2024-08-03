import { Listing } from '../types/index';
import { GBP } from '../utils/index';
import Address from './Address';
export const ListingCard = ({ listing }: { listing: Listing }) => {
    return (
        <div className='bg-gray-50 m-8 rounded-md drop-shadow-lg'>
            <li className='flex flex-col p-2 min-w-80 md:flex-row pb-0'>
                <img src={listing.image} alt={`Image of ${listing.address.line1}`} className='rounded-t-lg lg:rounded-none' />
                <div className='flex place-content-between md:flex-col p-6'>
                    <Address address={listing.address} />
                    <p>{listing.bedrooms} bedrooms</p>
                    <p>{GBP.format(listing.askingPrice)}</p>
                </div>
            </li>
        </div>
    )
}
