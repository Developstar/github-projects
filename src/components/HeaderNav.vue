<template>
<nav class="nav_wrapper">
    <div class="logo">
      <router-link to="/" style="text-decoration: none;">MyGit</router-link>
    </div>
    <div class="navigation">
      <ul class="pagelinks">
        <li>
          <router-link to="/" style="text-decoration: none;">Home</router-link>
        </li>

        <li>
          <router-link to="/MyRepos" style="text-decoration: none;">Repositories</router-link>
        </li>
      </ul>
    </div>
    </nav>
</template>

<style>

.nav_wrapper{
  background: #ffffff;
  display: flex;
  gap: 50%;
  height: 10vh;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.3);
  align-items: center;
}

li{
  text-decoration-style: none;
  list-style: none;
}

.pagelinks{
  display: flex;
  gap: 5rem;
}

</style>

