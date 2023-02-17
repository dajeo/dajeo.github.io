<template>
  <div>
    <div class="block present">
      <h1>Hi, I'm Headcrab.</h1>
      <p class="block-p">
        I'm a young <b>software engineer</b>. Develop
        <b>full-stack</b> applications on many different technologies.
      </p>
    </div>

    <div class="block projects">
      <projects-block />
    </div>

    <div class="block about">
      <about-block />
      <contacts-block />
    </div>
  </div>
</template>

<style scoped>
.block {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
  height: 100vh;
}

.block-p {
  text-align: center;
  max-width: 340px;
}

.present {
  height: calc(100vh - 56px);
  background-image: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.projects {
  background-image: url("../assets/bg2.jpg");
  background-position: center;
}

.about {
  background-image: url("../assets/bg3.jpg");
  background-position: center;
}

.contacts {
  background-image: url("../assets/bg4.jpg");
  background-position: center;
}
</style>
