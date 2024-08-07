import { render, screen } from '@testing-library/react';
import Address from './Address'; // adjust the import path accordingly

describe('Address component', () => {
    const mockAddress = {
        city: 'Test City',
        postalCode: '12345',
        line1: 'Test Line 1',
        line2: 'Test Line 2',
    };

    it('renders without crashing', () => {
        render(<Address address={mockAddress} />);
    });

    it('displays the correct city and postal code', () => {
        render(<Address address={mockAddress} />);

        const cityElement = screen.getByTestId('city');
        const postalCodeElement = screen.getByTestId('postalCode');

        expect(cityElement).toHaveTextContent('Test City');
        expect(postalCodeElement).toHaveTextContent('12345');
    });
});
