import { render, screen } from '@testing-library/react';
import { CardImage } from './CardImage';

describe('CardImage', () => {
    const defaultProps = {
        image: 'test-image.jpg',
        isActive: true,
        line1: 'Test Line 1',
    };

    it('renders without crashing', () => {
        const { container } = render(<CardImage {...defaultProps} />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('sets the image source correctly', () => {
        render(<CardImage {...defaultProps} />);
        expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.image);
    });

    it('sets the alt text correctly', () => {
        render(<CardImage {...defaultProps} />);
        expect(screen.getByAltText(`Image of ${defaultProps.line1}`)).toBeInTheDocument();
    });

    it('applies the correct class when isActive is true', () => {
        render(<CardImage {...defaultProps} />);
        expect(screen.getByRole('img')).not.toHaveClass('blur-sm');
    });

    it('applies the correct class when isActive is false', () => {
        render(<CardImage {...{ ...defaultProps, isActive: false }} />);
        expect(screen.getByRole('img')).toHaveClass('blur-sm');
    });
});
