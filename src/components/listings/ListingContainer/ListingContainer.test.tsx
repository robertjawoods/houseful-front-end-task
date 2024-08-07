import { render, screen, fireEvent } from '@testing-library/react';
import { ListingContainer } from './ListingContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '../../../../server/node';
import { HttpResponse, http } from 'msw';
import { Listings } from '../../../types';

describe('ListingContainer', () => {
    it('renders without crashing', async () => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        const res = await screen.findByText('Listings');

        expect(res).toBeInTheDocument();
    });

    it('displays loading state', async () => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        const res = await screen.findByText('Loading...');

        expect(res).toBeInTheDocument;
    });

    it('displays error state', async () => {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
        });

        server.use(
            http.get(`${import.meta.env.VITE_API_URL}/listings`, () => {
                return HttpResponse.error();
            })
        );

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        const res = await screen.findByTestId('error-message');

        expect(res).toBeInTheDocument
    });

    it('filters listings correctly', async () => {
        const mockData: Listings = {
            listings: [
                {
                    id: 1,
                    address: {
                        city: 'Test City',
                        postalCode: '12345',
                        line1: 'Test Line 1',
                        line2: 'Test Line 2',
                    },
                    image: 'test.jpg',
                    isActive: true,
                    askingPrice: 100000,
                    bedrooms: 3,
                },
                {
                    id: 2,
                    address: {
                        city: 'Test City',
                        postalCode: '12345',
                        line1: 'Test Line 1',
                        line2: 'Test Line 2',
                    },
                    image: 'test.jpg',
                    isActive: true,
                    askingPrice: 100000,
                    bedrooms: 3,
                },
                {
                    id: 3,
                    address: {
                        city: 'Test City',
                        postalCode: '12345',
                        line1: 'Test Line 1',
                        line2: 'Test Line 2',
                    },
                    image: 'test.jpg',
                    isActive: false,
                    askingPrice: 100000,
                    bedrooms: 3,
                },
            ],
        };

        server.use(
            http.get(`${import.meta.env.VITE_API_URL}/listings`, () => {
                return HttpResponse.json(mockData);
            })
        );

        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        expect(await screen.findByText('Listings')).toBeInTheDocument();

        expect(await screen.findAllByTestId('listing')).toHaveLength(3);

        fireEvent.click(await screen.findByText('Active'));

        expect(await screen.findAllByTestId('listing')).toHaveLength(2);

        fireEvent.click(await screen.findByText('Expired'));

        expect(await screen.findAllByTestId('listing')).toHaveLength(1);
    });

    // I'd do something like this to test the state changes are called with the correct values 
    // but I'm running into a bug and don't have time to fix it
    // it('setState is called with the correct value', async () => {
    //     const queryClient = new QueryClient();

    //     const useStateMock = (initState: any) => [initState, vi.fn()];

    //     vi.spyOn(React, 'useState').mockImplementation(useStateMock);

    //     render(
    //         <QueryClientProvider client={queryClient}>
    //             <ListingContainer />
    //         </QueryClientProvider>
    //     );

    //     fireEvent.click(await screen.findByText('Active'));

    //     expect(setStateSpy).toHaveBeenCalledWith('active');
    // });

    it('renders the correct number of listings', async () => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        const res = await screen.findAllByTestId('listing');
        expect(res).not.toHaveLength(0);
    });

    it('passes the correct props', async () => {
        const mockData: Listings = {
            listings: [
                {
                    id: 1,
                    address: {
                        city: 'Test City',
                        postalCode: '12345',
                        line1: 'Test Line 1',
                        line2: 'Test Line 2',
                    },
                    image: 'test.jpg',
                    isActive: true,
                    askingPrice: 100000,
                    bedrooms: 3,
                },
            ],
        };

        server.use(
            http.get(`${import.meta.env.VITE_API_URL}/listings`, () => {
                return HttpResponse.json(mockData);
            })
        );

        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <ListingContainer />
            </QueryClientProvider>
        );

        expect(await screen.findByText('Listings')).toBeInTheDocument();

        const res = screen.getByTestId('listing');

        expect(res).toHaveTextContent('Test City');
        expect(res).toHaveTextContent('12345');
        expect(res).toHaveTextContent('£100,000');
    })
});
