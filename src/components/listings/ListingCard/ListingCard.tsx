import { useEffect, useState } from 'react';
import { Listing } from '../../../types/index';
import { CardImage } from '../CardImage/CardImage';
import { ListingDetails } from '../ListingDetails';
import { ExpiredTag } from '../ExpiredTag';

export const ListingCard = ({ listing }: { listing: Listing }) => {
    const [isActive, setIsActive] = useState(listing.isActive);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            const timer = setTimeout(() => {
                setClicked(false);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [clicked]);

    return (
        <li data-testid='listing' className={`flex w-full flex-col md:flex-row md:rounded-l-md justify-center max-h-max`}>
            <div title='tap to toggle listing status'
                className={`min-w-80 m-6 rounded-md shadow-xl cursor-pointer transform ${clicked ? 'scale-95' : ''}`}
                onClick={() => {
                    setIsActive(val => !val);
                    setClicked(true);
                }
                }>
                <ExpiredTag active={isActive} />
                <CardImage image={listing.image} isActive={isActive} line1={listing.address.line1} />
                <ListingDetails listing={listing} />
            </div>
        </li>
    )
}
