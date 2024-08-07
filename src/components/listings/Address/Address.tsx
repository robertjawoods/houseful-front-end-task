import { Address } from '../../../types/index';

export default ({ address }: { address: Address }) => {
    return (
        <div data-testid='address' className='flex flex-col sm:flex-row gap-1'>
            <p data-testid='city'>{address.city}</p>
            <p data-testid='postalCode'>{address.postalCode}</p>
        </div>
    )
};
