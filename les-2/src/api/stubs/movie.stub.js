// This stub is for easy testing.
// Don't forget to checkout the tests folder!
const movieStub = {
  // The following params are needed in the signature, but we don't need them here.
  // eslint-disable-next-line
    get: (url, data) => {
    const stub = {
      data: [
        'Star Wars: Episode IV - A New Hope',
        'Star Wars: Episode V - The Empire Strikes Back',
        'Star Wars: Episode VI - Return of the Jedi',
      ],
    };

    // Don't forget to resolve a promise.
    return Promise.resolve(stub);
  },
};

export default movieStub;
