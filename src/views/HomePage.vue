<template>
    <section class="pageWrapper">
      <div class="imgWrapper"><img src="../assets/myImage.png" alt="my_img"/></div>
      <div class="intro">
      <div class="heading">
        <h4>Adeyeye Boluwatife</h4>
        <p>Frontend Developer</p>
      </div>
      <div class="repoButton">
        <button>My GithubRepos</button>
      </div>
      </div>

    </section>
  </template>
  
  <style>
  .pageWrapper {
    margin-top: 2rem;
    text-align: center;
    background: white;
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
  </style>