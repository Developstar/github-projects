
  <template>
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        <li v-for="repo in displayedRepos" :key="repo.id">
          <a :href="repo.html_url">{{ repo.name }}</a>
        </li>
      </ul>
      <nav>
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="currentPage = 1" :disabled="currentPage === 1">First</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="currentPage--" :disabled="currentPage === 1">Previous</button>
          </li>
          <li class="page-item" v-for="page in pages" :key="page"
              :class="{ active: currentPage === page }">
            <button class="page-link" @click="currentPage = page">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === pageCount }">
            <button class="page-link" @click="currentPage++" :disabled="currentPage === pageCount">Next</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === pageCount }">
            <button class="page-link" @click="currentPage = pageCount" :disabled="currentPage === pageCount">Last</button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repositories: [],
        displayedRepos: [],
        itemsPerPage: 3,
        currentPage: 1
      };
    },
    mounted() {
      axios.get('https://api.github.com/users/Developstar/repos')
        .then(response => {
          this.repositories = response.data;
          this.updateDisplayedRepos();
        })
        .catch(error => {
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
      }
    },
    watch: {
      currentPage() {
        this.updateDisplayedRepos();
      }
    },
    methods: {
      updateDisplayedRepos() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.displayedRepos = this.repositories.slice(startIndex, endIndex);
      }
    }
  };
  </script>
  