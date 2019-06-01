<template>
    <default-layout>
        <main class="main-wrapper">
            <header class="main-wrapper__header">
                <div class="main-header__title">
                    <h4>Watchlist</h4>
                </div>
                <!-- <div class="main-header__search">
                    <label for="search">Search:</label>
                    <input type="search" v-model="searchText" id="search" placeholder="Search...">
                </div> -->
                <search-box-component @searched="setSearchText" />
            </header>
            <section class="main-wrapper__section">
                <ul>
                    <movie-item-component
                        v-for="(movie, key) in filteredMovies"
                        :key="key"
                        :movie="movie"
                    />
                </ul>
            </section>
            <footer class="main-wrapper__footer">
                <p v-if="searchText !== ''">
                    Gevonden resultaten: {{ filteredMovies.length }}/{{ movies.length }}
                </p>
            </footer>
        </main>
    </default-layout>
</template>

<script>
import Api from '@/api/api';
import DefaultLayout from '@/layouts/default/default.layout.vue';
import SearchBoxComponent from '@/components/search-box.component.vue';
import MovieItemComponent from './components/movie-item.component.vue';

export default {
  name: 'home',
  components: {
    DefaultLayout,
    SearchBoxComponent,
    MovieItemComponent,
  },
  data: () => ({
    searchText: '',
    movies: [],
  }),
  async created() {
    this.movies = await Api.Movie.fetchAll();
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const searchText = this.searchText.toLowerCase().trim();

        return title.includes(searchText);
      });
    },
  },
  methods: {
    setSearchText(value) {
      this.searchText = value;
    },
  },
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        --primary: #03a9f4;
    }

    *:focus {
        outline: none;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #010101;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    input {
        padding: 0.5rem 1rem;
        background-color: #fff;
        border-radius: 9999px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 1rem;
    }

    input:focus {
        border-color: var(--primary);
    }

    label {
        margin-right: 0.5rem;
        font-size: 0.9rem;
    }

    .main-wrapper {
        display: flex;
        width: 640px;
        flex-direction: column;
        margin: 2rem auto;
        box-shadow:  0 5px 20px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);

        /* TODO: place inside main css */
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8;
    }

    .main-wrapper__header {
        background: #f3f3f3;
        padding: 1rem;
        display: flex;
        align-items: center;
    }

    .main-header__title {
        flex-grow: 1;
    }

    .main-header__title h4 {
        margin: 0;
    }

    .main-wrapper__section {
        padding: 1rem;
    }

    .main-wrapper__section ul {
        list-style: none;
    }

    .main-wrapper__section ul li {
        display: flex;
    }

    .main-wrapper__section ul li.is-already-watched {
        font-style: italic;
        color: rgba(0, 0, 0, 0.3);
    }

    .main-wrapper__section ul li + li {
        margin-top: 1rem;
    }

    .btn-toggle {
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.6);
        border-radius: 9999px;
        line-height: calc(2rem - 2px);
        text-align: center;
        display: block;
        margin-right: 1rem;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .btn-toggle:hover {
        border-color:  var(--primary);
        color:  var(--primary);
    }

    .main-wrapper__footer {
        padding: 1rem;
        font-style: italic;
        font-size: 0.9rem;
    }
</style>
