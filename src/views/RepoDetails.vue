<template>
  <section class="RepoDetailsWrapper">
    <div class="textdiv">
      <h1 style="text-align: center;">Repository Details</h1>
      <p> <span class="title">Repository Name:</span> {{ repo.name }}</p>
      <p> <span class="title">Repository Description:</span> {{ repo.description }}</p>
      <p> <span class="title"></span>{{ repo.language }}</p>
      <p> <span class="title">Repository Size:</span> {{ repo.size }} kb</p>
      <p> <span class="title">Visibility:</span> {{ repo.visibility }}</p>
      
      <div class="repoDetailsbutton">
        <router-link to="/MyRepos" style="text-decoration: none"
          ><button class="mrepobtn backbtn">Back</button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      repo: {},
    };
  },
  created() {
    // This is to get the repo ID from the route params
    const repoId = this.$route.params.repoId;
    // This is to make an API call to get my repository details
    axios
      .get(`https://api.github.com/repositories/${repoId}`)
      .then((response) => {
        this.repo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
.RepoDetailsWrapper {
  border: 1px solid black;
  background: white;
  text-align: left;
  width: 70%;
  margin-top: 3rem;
  height: 70vh;
  box-shadow: 5px 5px 6px 3px rgba(0, 0, 0, 0.8);
  font-family: 'Abel', sans-serif;
}

.title{
  font-size: 1.3rem;
}

.textdiv{
  width: 80%;
}

.textdiv p{
  margin-top: 1rem;
}

.backbtn {
  margin-top: 1rem;
}


@media (min-width:320px) and (max-width:480px){
 .textdiv h1{
  font-size: 1.1rem;
  margin-left: -1.5rem;
 }

 .title{
  font-size: 0.6rem;
 }
}
 
</style>
