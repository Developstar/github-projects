<template>
    <div>
        <h1>Sorry this page does not exist</h1>
        <router-link :to="{ name: 'HomePage' }">
  Back to Home
</router-link>
    </div>
</template>

<script>
export default{
    name: 'ErrorPage404'
}
</script>

<style>
h1{
    margin-top: 5rem;
}
</style>