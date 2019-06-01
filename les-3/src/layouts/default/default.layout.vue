<template>
    <div class="default-layout">
        <nav>
            <router-link :to="{ name: $routeNames.HOME }">Home</router-link> |
            <router-link :to="{ name: $routeNames.ABOUT }">About</router-link>
        </nav>

        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>
