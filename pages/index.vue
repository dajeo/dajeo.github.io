<template>
  <div>
    <div class="panel block first">
      <h1>Hi, I'm Headcrab.</h1>
      <p class="block-p">
        I'm a young <b>software engineer</b>. Develop
        <b>full-stack</b> applications on many different technologies.
      </p>
    </div>

    <div class="panel block">
      <ProjectsBlock />
    </div>

    <div class="panel block about">
      <AboutBlock />
    </div>

    <div class="panel block">
      <ContactsBlock />
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

.first {
  height: calc(100vh - 56px);
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.about {
  max-width: 600px;
}
</style>
