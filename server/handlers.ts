import { http, HttpResponse } from 'msw'
import listings from './listings.json'

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/listings`, () => {
        return HttpResponse.json(listings)
    }),
]

