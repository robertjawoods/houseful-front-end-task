import { Address } from '../types/index';
export default ({ address }: { address: Address }) => {
    return (
        <div className='flex-col'>
            <p>{address.city}</p>
            <p>{address.postalCode}</p>
        </div>
    )
};
