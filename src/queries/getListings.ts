export const getListings = async () => {
    const response = await fetch('http://localhost:3001/listings');
    return response.json();
};
