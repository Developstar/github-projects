<!-- <template>
    <section class="pageWrapper">
      <div>
        <h1>A single Repo</h1>
        <p></p>
      </div>
    </section>
  </template>  -->

  <template>
    <div>
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description }}</p>
      <p>Language: {{ repo.language }}</p>
      <p>Stars: {{ repo.stargazers_count }}</p>
    </div>
  </template>
  
  <script>

  // export default {
  //   name: 'RepoDetails',
  //   mounted() {
  //   const id = this.$route.params.id
    
  // }
  // }
  </script>
  
  
  <style>
  /* .pageWrapper {
    margin-top: 2rem;
    text-align: center;
  } */
  </style>

  <!-- <template>
    <div>
      <h2>{{repo.name}}</h2>
      <p>{{repo.description}}</p>
      <p>Created: {{repo.created_at}}</p>
      <p>Last updated: {{repo.updated_at}}</p>
      <p>URL: <a :href="repo.html_url">{{repo.html_url}}</a></p>
      <p>Stars: {{repo.stargazers_count}}</p>
      <p>Forks: {{repo.forks_count}}</p>
      <p>Language: {{repo.language}}</p>
      <p>Issues: {{repo.open_issues_count}}</p>
      <router-link :to="{ name: 'RepoIssues', params: { id: repo.id }}">View Issues</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        repo: null
      };
    },
    created() {
      const id = this.$route.params.id;
      this.getRepoDetails(id);
    },
    methods: {
      async getRepoDetails(repoId) {
        try {
          const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
          this.repo = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
   -->