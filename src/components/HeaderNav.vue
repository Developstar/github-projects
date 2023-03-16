<template>
<nav class="nav_wrapper">
    <div class="logo">
      <router-link to="/">MyGit</router-link>
    </div>
    <div class="navigation">
      <ul class="pagelinks">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="/MyRepos">Repositories</router-link>
        </li>
      </ul>
    </div>
    </nav>
</template>

<style>

.nav_wrapper{
  background: blue;
  display: flex;
  gap: 50%;
}

.pagelinks{
  display: flex;
  gap: 5rem;
}

</style>

