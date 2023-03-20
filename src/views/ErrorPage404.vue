<template>
    <div class="errorPageWrapper">
        <h1>Sorry this page does not exist</h1>
        <button class="mrepobtn"><router-link :to="{ name: 'HomePage' }">
  Back to Home
</router-link></button>
        
    </div>
    
</template>

<script>
export default{
    name: 'ErrorPage404'
}
</script>

<style>
.errorPageWrapper{
    font-family: 'Abel', sans-serif;
}

h1{
    margin-top: 5rem;
}

a{
    text-decoration: none;
    color: white;
    margin-top: 5rem;
}

button{
    margin-top: 1rem;
   
}

</style>