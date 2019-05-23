// Sample model class
export default class User {
    id = -1;

    email = '';

    name = '';

    username = '';

    // Not ideal, but this is just for demo purposes.
    // if you get the user instance, you could get the last name by using
    // user.lastname;
    get lastName() {
      // Split the name into an array.
      const splittedName = this.name.split(' ');

      // This will return the last element in the array.
      return splittedName[splittedName.length - 1];
    }

    // Just a simple constructor.
    constructor(params) {
      this.id = params.id;
      this.email = params.email;
      this.name = params.name;
      this.username = params.username;
    }

  // We don't have a transformer here, it will be done in the API layer.
}
