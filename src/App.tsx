import { Suspense } from "react";
import { ListingContainer } from "./components/listings/ListingContainer/ListingContainer";

const App = () => (
    <main role="main">
        { /* Would be better to define a skeletion UI of a few cards */}
        <Suspense fallback={<div>Loading...</div>}>
            <ListingContainer />
        </Suspense>
    </main>
)

export default App;
