import { render, fireEvent, screen } from '@testing-library/react';
import { FilterButton } from './FilterButton';

describe('FilterButton', () => {
    let mockSetFilterValue: any;

    beforeEach(() => {
        mockSetFilterValue = vi.fn();
    });

    it('renders correctly with "all" filter', () => {
        render(<FilterButton active={true} filterValue="all" setFilterValue={mockSetFilterValue} />);
        expect(screen.getByRole('button')).toHaveTextContent('All');
    });

    it('renders correctly with "active" filter', () => {
        render(<FilterButton active={true} filterValue="active" setFilterValue={mockSetFilterValue} />);
        expect(screen.getByRole('button')).toHaveTextContent('Active');
    });

    it('renders correctly with "expired" filter', () => {
        render(<FilterButton active={true} filterValue="expired" setFilterValue={mockSetFilterValue} />);
        expect(screen.getByRole('button')).toHaveTextContent('Expired');
    });

    it('calls setFilterValue on click', () => {
        render(<FilterButton active={true} filterValue="all" setFilterValue={mockSetFilterValue} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockSetFilterValue).toHaveBeenCalledWith('all');
    });
});
