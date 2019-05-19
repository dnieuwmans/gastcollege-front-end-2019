// Sample model class
export default class Movie {
    title = '';

    // We can have multiple approaches for transforming data into a model.
    // This is case one, the seond case will be handled in the user API.
    static fromJSON(params) {
      const newMovie = new Movie();

      newMovie.title = params.title;

      return newMovie;
    }
}
