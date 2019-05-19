import Movie from '@/models/movie.model';

// This is approach one, without async, await.
export default class MovieSection {
    http = null;

    constructor(http) {
      // This will make sure that we could use stubs or other http clients.
      this.http = http;
    }

    fetchAll() {
      // Return the data you want to use instead of the response.
      // This will make the development experience better.
      return this.http.get('movies')
        .then(response => response.data.map(item => Movie.fromJSON({ title: item })));
    }
}
