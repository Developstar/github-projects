<template>
     
     <div>
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.description }}</p>
    <p>{{ repo.language }}</p>
    <p>{{ repo.stargazers_count }} stars</p>
  </div>
    
</template>
  
  <script>
import axios from 'axios';
export default {
  data() {
    return {
      repo: {}
    };
  },
  created() {
    // This is to get the repo ID from the route params
    const repoId = this.$route.params.repoId;
    // This is to make an API call to get my repository details
    axios.get(`https://api.github.com/repositories/${repoId}`)
      .then(response => {
        this.repo = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}


  </script>
  
  
  <style>

  </style>

  