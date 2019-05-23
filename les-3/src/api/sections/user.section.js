import User from '@/models/user.model';

// This is approach two, with async, await.
export default class UserSection {
    http = null;

    constructor(http) {
      // This will make sure that we could use stubs or other http clients.
      this.http = http;
    }

    // The async property will make sure that it will wait
    // until we get the promise resolved/rejected.
    async fetchAll() {
      // Return the data you want to use instead of the response.
      // This will make the development experience better.

      // Use the await syntax here for fetching the response.
      const response = await this.http.get('https://jsonplaceholder.typicode.com/users');

      // one of the many cases for transforming JSON into a model.
      return response.data.map(user => new User({
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      }));
    }
}
