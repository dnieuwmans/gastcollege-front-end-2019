import MovieSection from '@/api/sections/movie.section';

// To run tests: yarn test:unit or npm run test:unit. 
// Describe what you are testing
describe('Api - Movie Section', () => {

  // What should it do?
  it('Should fetch all the data from the api', async () => {

    // Mock the api with stub data.
    // Please refer to: https://jestjs.io/docs/en/mock-functions
    const moviesApiMock = {
      get: jest.fn().mockReturnValue(
        Promise.resolve({
          data: [
            'Star Wars: Episode IV - A New Hope',
            'Star Wars: Episode V - The Empire Strikes Back',
            'Star Wars: Episode VI - Return of the Jedi',
          ],
        }),
      ),
    };

    // Let's use the right api section
    const moviesApi = new MovieSection(moviesApiMock);

    // Fetch all the data
    const movies = await moviesApi.fetchAll();

    // Simple assertions
    // Please refer to: https://jestjs.io/docs/en/expect.html
    expect(moviesApiMock.get).toBeCalled();
    expect(movies[0].title).toBe('Star Wars: Episode IV - A New Hope');
  });

  it('Should fetch all the data from the api - THIS GOES WRONG ON PURPOSE', async () => {

    // Mock the api with stub data.
    // Please refer to: https://jestjs.io/docs/en/mock-functions
    const moviesApiMock = {
      get: jest.fn().mockReturnValue(
        Promise.resolve({
          data: [
            'Star Wars: Episode IV - A New Hope',
            'Star Wars: Episode V - The Empire Strikes Back',
            'Star Wars: Episode VI - Return of the Jedi',
          ],
        }),
      ),
    };

    // Let's use the right api section
    const moviesApi = new MovieSection(moviesApiMock);

    // Fetch all the data
    const movies = await moviesApi.fetchAll();

    // Simple assertions, but with a wrong expect assertion.
    // Please refer to: https://jestjs.io/docs/en/expect.html
    expect(moviesApiMock.get).toBeCalled();
    expect(movies[0].title).toBe('Star Wars: Episode V - The Empire Strikes Back');
  });

});
