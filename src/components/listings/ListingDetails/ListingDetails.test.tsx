import { render, screen } from '@testing-library/react';
import { ListingDetails } from './ListingDetails';
import { GBP } from "../../../utils";
import { Listing } from '../../../types';

describe('ListingDetails', () => {
    const mockListing: Listing = {
        id: 1,
        image: 'test.jpg',
        isActive: true,
        address: {
            city: 'Test City',
            postalCode: '12345',
            line1: '123 Test St',
            line2: 'Test Line 2',
        },
        bedrooms: 3,
        askingPrice: 100000,
    };

    it('renders the address', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByText('Test City')).toBeInTheDocument();
        expect(screen.getByText('12345')).toBeInTheDocument();
    });

    it('renders the number of bedrooms', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('renders the asking price', () => {
        render(<ListingDetails listing={mockListing} />);
        expect(screen.getByText(GBP.format(mockListing.askingPrice))).toBeInTheDocument();
    });
});
