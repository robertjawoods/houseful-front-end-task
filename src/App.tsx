import { Suspense, useState } from "react";
import { ListingContainer } from "./components/listings/ListingContainer/ListingContainer";
import { FilterButton } from "./components/listings/FilterButton";
import { ListingFilter } from "./types";

const App = () => {
    const [filterValue, setFilterValue] = useState<ListingFilter>('all');
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="flex">
            { /* Sidebar */}
            <div className={`w-1/5 z-20 fixed h-screen bg-gray-800 text-white p-4 flex flex-col ${showSidebar ? '' : 'hidden'}`}>
                <button onClick={() => setShowSidebar(false)}>Hide</button>
                <h1 className="text-2xl font-bold py-2">Filters</h1>
                <h2 className="py-2">By Status</h2>
                <FilterButton active={filterValue === 'all'} filterValue={'all'} setFilterValue={setFilterValue} />
                <FilterButton active={filterValue === 'active'} filterValue={'active'} setFilterValue={setFilterValue} />
                <FilterButton active={filterValue === 'expired'} filterValue={'expired'} setFilterValue={setFilterValue} />
            </div>
            <div className="w-9 fixed top-1/2 transform -translate-y-1/2 z-20">
                <button onClick={() => setShowSidebar(true)} className={`w-full text-center rounded-tr-md rounded-br-md bg-gray-800 text-white p-3 ${!showSidebar ? '' : 'hidden'}`}>&gt;</button>
            </div>
            <main role="main" className={`${showSidebar ? 'ml-32' : ''}`}>
                { /* Would be better to define a skeletion UI of a few cards */}
                <Suspense fallback={<div>Loading...</div>}>
                    <ListingContainer filterValue={filterValue} />
                </Suspense>
            </main>
        </div>
    )
}

export default App;
