# Houseful Front End Task Solution 

```sh
# Install dependencies
pnpm i

# Start development server
pnpm dev

# Run unit tests
pnpm test
pnpm test:watch
```

Create a `.env` file matching the format of `.env.example`.

Listings can be toggled by clicking/tapping on the listing. In a real scenario, this would likely do something like "open details" but for the purpose of this test I've gone with that. Expired listings are signified by a blurred image and an "EXPIRED" tag in the top right corner. 

## Further Considerations 

* Set up paths in tsconfig to clean up imports 
* E2E tests to verify from a users standpoint 
* Improve looks by using fonts 
* Use storybook to work on components in isolation 
* Run tests in CI 
