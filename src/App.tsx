import { Suspense } from "react";
import { ListingContainer } from "./components/ListingContainer";

const App = () => (
    <>
        { /* Would be better to define a skeletion UI of a few cards */}
        <Suspense fallback={<div>Loading...</div>}>
            <ListingContainer />
        </Suspense>
    </>
)

export default App;
