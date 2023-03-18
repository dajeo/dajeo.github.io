<template>
  <div class="container">
    <div class="img-container">
      <img class="img" src="../assets/man.png" alt="Man" />
    </div>
    <div class="content">
      <h1 class="content-title">Hi, I'm Danil.</h1>
      <p>
        I'm a young <b>software engineer</b>. Develop <b>high-load</b> services in Golang. Analysis and optimizing code.
      </p>
      <div>
        <a href="https://github.com/HeadcrabJ">GitHub</a>
        <a href="https://t.me/headcrabj">Telegram</a>
        <a href="https://gitlab.com/HeadcrabJ">GitLab</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.img-container {
  text-align: center;
}

.img {
  width: 400px;
}

@media (max-width: 700px) {
  .container {
    grid-template-columns: 1fr;
    margin-bottom: 100px;
  }

  .img {
    width: 350px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-title {
  margin: 0;
}

p {
  max-width: 340px;
}
</style>
