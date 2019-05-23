<template>
    <div class="main-header__search">
        <label for="search">Search:</label>
        <input 
            type="search" 
            v-model="searchText" 
            id="search" 
            placeholder="Search..."
            @blur="$emit('searched', searchText)"
        >
    </div>
</template>

<script>
export default {
    name: 'search-box-component',
    data: () => {
        return {
            searchText: '',
        }
    },
}
</script>

