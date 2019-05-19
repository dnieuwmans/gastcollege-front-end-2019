<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Api from '@/api/api';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  // Note: this uses the async/await method.
  // Don't forget the async here too, or it won't accept the await.
  async created() {
    try {
      // This will only execute whenever we get a resolved response.
      const users = await Api.User.fetchAll();

      console.log(users);
    } catch (error) {
      // Oh no, we got an error.
      console.dir(error);
    }
  },

  // Another lifecycle hook, notice that we left the async syntax out.
  // We use the then/catch method here.
  mounted() {
    Api.Movie.fetchAll().then((movies) => {
      // This will only execute whenever we get a resolved response.
      console.log(movies);
    }).catch((error) => {
      // Oh no, we got an error.
      console.dir(error);
    });
  },
};
</script>
