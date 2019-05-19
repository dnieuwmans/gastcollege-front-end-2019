import axios from 'axios';
import MovieSection from './sections/movie.section';
import movieStub from './stubs/movie.stub';
import UserSection from './sections/user.section';

export default class Api {
  // Separate the different API parts into sections to make this class more readable.
  // We can also use stubs here, this also makes sure that the API layer is testable.
  static Movie = new MovieSection(movieStub);

  static User = new UserSection(axios);
}
