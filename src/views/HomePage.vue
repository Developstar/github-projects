<template>
    <section class="pageWrapper">
      <div class="imgWrapper"><img src="../assets/myImage.png" alt="my_img"/></div>
      <div class="intro">
      <div class="heading">
        <h4>Adeyeye Boluwatife</h4>
        <p>Frontend Developer</p>
      </div>
      <div class="repoButton">
        <router-link to="/MyRepos" style="text-decoration: none;"><button class="mrepobtn ">My Repos</button></router-link>
      </div>
      </div>

      <div class="aboutMe">
        <h2>My Github Repositories</h2>
        <p>This website showcases my GitHub details and projects in a visually pleasing manner. Discover my latest repositories, contributions, and activities, all in one place.</p>
      </div>

    </section>
  </template>
  
  <style>

  
  .pageWrapper {
    margin-top: 2rem;
    text-align: center;
    background: white;
    box-shadow: 5px 5px 6px 3px rgba(0, 0, 0, 0.8);
    margin-top: 10vh;
    width: 80vw;
    height: 70vh;
    position: relative;
  }

  .imgWrapper{
    position: absolute;
    left: -2rem;
    top: -2rem;
    border-radius: 50%;
    border: 4px solid #dbdde0;
  }
  .imgWrapper img{
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: white;

  }



  .intro{
    display: flex;
    align-items: center;
  }

  .heading, .repoButton{
    margin-top: 2rem;
  }

  .aboutMe{
    margin-top: 8rem;
    width: 80%;
    height: 20vh;
    
  }

  .aboutMe h2{
    margin-bottom: 1rem;
    margin-top: 1rem;
    
  }
  </style>