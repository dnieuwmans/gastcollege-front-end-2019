// This stub is for easy testing.
// Don't forget to checkout the tests folder!
const movieStub = {
  // The following params are needed in the signature, but we don't need them here.
  // eslint-disable-next-line
    get: (url, data) => {
    const stub = {
      data: [
        { title: 'Star Wars: Episode IV - A New Hope', 'already-watched': true },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', 'already-watched': false },
        { title: 'Star Wars: Episode VI - Return of the Jedi', 'already-watched': false },
      ],
    };

    // Don't forget to resolve a promise.
    return Promise.resolve(stub);
  },
};

export default movieStub;
