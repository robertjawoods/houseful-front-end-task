import { Dispatch, SetStateAction } from "react";
import { ListingFilter } from "../../../types";

const getFormattedValue = (filterValue: ListingFilter) => {
    if (filterValue === 'all') return 'All';
    if (filterValue === 'active') return 'Active';
    if (filterValue === 'expired') return 'Expired';
}


export const FilterButton = ({ active, filterValue, setFilterValue }: { active: boolean, filterValue: ListingFilter, setFilterValue: Dispatch<SetStateAction<ListingFilter>> }) => (
    <button onClick={() => setFilterValue(filterValue)} aria-pressed={active} className={`${active ? 'bg-green-200' : ''} px-3 py-1 rounded-md`}>{getFormattedValue(filterValue)}</button>
);
