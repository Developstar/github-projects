<template>
  <div >
    <h1 class="pageTitle">My GitHub Repositories</h1>
    <div>
      <ul class="singleWrapper">
        <li class="repoWrapper" v-for="repo in displayedRepos" :key="repo.id">
          <div class="repoName">
            <h3>Project Name :{{ repo.name }}</h3>
          </div>

          <div class="repoDetailsbutton">
            <router-link
              :to="{ name: 'RepoDetails', params: { repoId: repo.id } }"
            >
            <button class="mrepobtn">View</button>
              
            </router-link>
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

    showDetails(repo) {
      this.$router.push({
        name: "repository-details",
        params: { repoId: repo.id },
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');



h3 {
  padding: 1rem;
  font-family: 'Abel', sans-serif;
}

/* .repoName {
  margin-top: 1rem;
} */
.pageTitle{
 margin-top: 1rem;
 font-family: 'Abel', sans-serif;
}

.repoWrapper {
  background: #435277;
  color: white;
  box-shadow: 5px 5px 6px 3px rgba(0, 0, 0, 0.8);
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 70%;
  height: 9rem;
}

.viewButton {
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

button {
  padding: 10px;
  cursor: pointer;
}

.mrepobtn{
  width: 6rem;
  border: none;
  border-radius: 4px;
  background: linear-gradient(  #2a4383 80%,  white);
  color: white ;
  font-family: 'Abel', sans-serif;
}

.repoDetailsbutton a {
  text-decoration: none;
  
 
}

.repoDetailsbutton {
  margin-top: 0.1rem;
}



@media (min-width:320px) and (max-width:480px){
 .pageTitle{
  font-size: 1rem;
 }

 .repoName{
  font-size: 0.8rem;
 }

 .pagination {
  display: flex;
  flex-wrap: wrap;
 
}
}

</style>
