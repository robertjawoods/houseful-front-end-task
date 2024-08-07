import { render, screen } from '@testing-library/react';
import { ExpiredTag } from './ExpiredTag';


describe('ExpiredTag', () => {
    it('renders when expired', () => {
        render(<ExpiredTag active={false} />);
        expect(screen.getByText('EXPIRED')).toBeInTheDocument();
    });

    it('does not render when active', () => {
        render(<ExpiredTag active={true} />);
        expect(screen.queryByText('EXPIRED')).not.toBeInTheDocument();
    });
});
