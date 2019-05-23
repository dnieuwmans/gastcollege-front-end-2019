<template>
    <li :class="{ 'is-already-watched': movie.alreadyWatched }">
        <button class="btn-toggle">
            <i class="fas fa-eye-slash"></i>
        </button>
        <span>{{ movie.title }}</span>
    </li>
</template>

<script>
export default {
  name: 'movie-item-component',
  props: ['movie'],
};
</script>
