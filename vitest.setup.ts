import "@testing-library/jest-dom";
import { server } from "./server/node";

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})
