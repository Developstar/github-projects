<template>
  <div>
    <h1 class="pageTitle">My GitHub Repositories</h1>
    <div >
      
      <ul class="singleWrapper">
        
        <li class="repoWrapper" v-for="repo in displayedRepos" :key="repo.id">
          <div><h3>{{ repo.name }}</h3></div>
          
          <!-- <a :href="repo.html_url">{{ repo.name }}</a> -->
          <!-- <router-link :to="{ name: 'RepoDetails', params: { id: repo.id }, query: { page: currentPage } }">
          check More details
        </router-link> -->
        <div >
          <button class="viewButton">
                    <router-link style="text-decoration: none; "
            :to="{
              name: 'RepoDetails',
              params: { id: repo.id },
              query: { page: currentPage },
            }"
          >
            View
          </router-link>
        </button>
      </div>


        </li>
      </ul>
    </div>

    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button
            class="page-link"
            @click="currentPage = 1"
            :disabled="currentPage === 1"
          >
            First
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button
            class="page-link"
            @click="currentPage--"
            :disabled="currentPage === 1"
          >
            Previous
          </button>
        </li>
        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="currentPage = page">
            {{ page }}
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pageCount }">
          <button
            class="page-link"
            @click="currentPage++"
            :disabled="currentPage === pageCount"
          >
            Next
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pageCount }">
          <button
            class="page-link"
            @click="currentPage = pageCount"
            :disabled="currentPage === pageCount"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repositories: [],
      displayedRepos: [],
      itemsPerPage: 3,
      currentPage: 1,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    axios
      .get("https://api.github.com/users/Developstar/repos")
      .then((response) => {
        this.repositories = response.data;
        this.updateDisplayedRepos();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    pageCount() {
      return Math.ceil(this.repositories.length / this.itemsPerPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  watch: {
    currentPage() {
      this.updateDisplayedRepos();
    },
  },
  methods: {
    updateDisplayedRepos() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displayedRepos = this.repositories.slice(startIndex, endIndex);
    },

    async getRepoDetails(repoId) {
      try {
        const response = await axios.get(
          `https://api.github.com/repositories/${repoId}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>

.pageTitle{
  margin-top: 2rem;
}

.repoWrapper {
  background: #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 50%;
  height: 6rem;
  
}

.viewButton{
  background: #dbdde0;
  width: 5rem;
  margin-top: 2rem;
  border: 1px solid black;
}

.pagination {
  display: flex;
}

/* .singleWrapper{
  position: relative;
} */

button{
  padding: 10px;
 
}
</style>
