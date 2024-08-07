import { render, screen } from '@testing-library/react';
import { ListingDetails } from '../ListingDetails';
import { GBP } from '../../../utils';
import { Listing } from '../../../types';

describe('ListingDetails', () => {
    const mockListing: Listing = {
        id: 1,
        image: 'test.jpg',
        isActive: true,
        address: {
            city: 'Test City',
            postalCode: '12345',
            line1: 'Test Line 1',
            line2: 'Test Line 2',
        },
        bedrooms: 3,
        askingPrice: 100000,
    };

    it('renders without crashing', () => {
        render(<ListingDetails listing={mockListing} />);
    });

    it('displays the correct address', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByTestId('address')).toBeInTheDocument();
    });

    it('displays the correct number of bedrooms', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByText(mockListing.bedrooms)).toBeInTheDocument();
    });

    it('displays the correct asking price', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByText(GBP.format(mockListing.askingPrice))).toBeInTheDocument();
    });

    it('displays the bed icon', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByTestId('bed-icon')).toBeInTheDocument();
    });
});
