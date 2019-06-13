<template>
    <div>
        
        {{ message }}

        <button @click="changeMessage">Something something</button>  
    </div>
</template>

<script>
export default {
    name: 'summary-panel',
    props: {
        message: {
            type: String, 
            required: true,
        }
    },
    methods: {
        changeMessage: function() {
            this.$emit('change:message', 'something something');
        }
    }
}
</script>
