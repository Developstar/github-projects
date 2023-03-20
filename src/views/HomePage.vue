<template>
    <section class="pageWrapper">
      <div class="imgWrapper"><img src="../assets/myImage.png" alt="my_img"/></div>
      <div class="intro">
      <div class="heading">
        <h4>Adeyeye Boluwatife</h4>
        <p>Frontend Developer</p>
      </div>
      <div class="repoButton">
        <router-link to="/MyRepos" style="text-decoration: none;"><button class="mrepobtn ">Check My Repos</button></router-link>
      </div>
      </div>

      <div class="aboutMe">
        <h2>Altschool Africa third Semester Project</h2>
        <p>For my third semester exam at AltSchool Africa, I worked on a project that involved utilizing the GitHub API to showcase a comprehensive list of my repositories along with additional information. Additionally, I incorporated a wildcard route to handle error pages.



</p>
      </div>

    </section>
  </template>
  
  <style>

@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
  .pageWrapper {
    margin-top: 2rem;
    text-align: center;
    background: #435277;
    color: white;
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
    font-family: 'Abel', sans-serif;
  }

  .aboutMe{
    margin-top: 8rem;
    width: 80%;
    height: 20vh;
    font-family: 'Abel', sans-serif;
  }

  .aboutMe h2{
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-family: 'Abel', sans-serif;
  }

  .repoButton button{
  background: white;
  color: black ;
  font-size: 1rem;
   width: 10rem;
   border-radius: 1rem;
   font-family: 'Abel', sans-serif;
   cursor: pointer;
  }
  
  button:hover{
    filter:drop-shadow(5px 5px 13px white);
  }



  @media (min-width:320px) and (max-width: 420px){

    .heading{
     
      margin-left: 4.8rem;
    }

  .aboutMe{
    margin-top: 4rem;
    width: 80%;
    height: 20vh;
    
  }
  .intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .repoButton{
    position: absolute;
    bottom: 0.9rem;
  }

  h4{
    font-size: 1rem;
  }

  p{
    font-size: 0.7rem;
  }

  .imgWrapper{
    position: absolute;
    left: -2rem;
    top: -2rem;
  }
    .imgWrapper img{
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  h2{
    font-size: 1rem;
  }

  }
  </style>