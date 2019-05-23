// Sample model class
export default class Movie {
    title = '';

    alreadyWatched = false;

    // We can have multiple approaches for transforming data into a model.
    // This is case one, the second case will be handled in the user API.
    static fromJSON(params) {
      const newMovie = new Movie();

      newMovie.title = params.title;
      newMovie.alreadyWatched = params['already-watched'];

      return newMovie;
    }
}
