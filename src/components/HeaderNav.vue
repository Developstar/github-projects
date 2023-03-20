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
  background: #2a4383;
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
  font-family: 'Abel', sans-serif;
}

.pagelinks a{
  color: white;
}

.pagelinks a:hover{
  
  filter:drop-shadow(5px 5px 13px white);
}

.logo a{
  color: white;
  font-family: 'Abel', sans-serif;

}

.logo:hover{
  filter:drop-shadow(5px 5px 13px white);
}

@media (min-width:320px) and (max-width:480px){
  .nav_wrapper{
  gap: 10%;
  width: 100vw;
}
}

</style>

