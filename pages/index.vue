<template>
  <div class="block first">
    <h1>Hi, I'm Headcrab.</h1>
    <p class="block-p">
      I'm a young <b>software engineer</b>. Develop
      <b>full-stack</b> applications on many different technologies.
    </p>
  </div>

  <div class="block full">
    <h2>Projects</h2>
    <ProjectsBlock />
    <a class="btn mt-10" href="#">All projects</a>
  </div>

  <div class="block full about">
    <h2>About me</h2>
    <p>
      It all started with the very same grown-ups who wrote interesting
      projects, shared their experiences, kind of joked and tried to teach you
      only good things, to start small, not to jump from technology to
      technology, etc. I was so excited by the idea, that I immediately started
      reading textbooks, looking for tutorials, writing code. I started with
      something simple... Java, wrote a simple blog in Spring using a PostgreSQL
      database. Found some new friends and made a feature-rich Module bot on the
      same Spring and PostgreSQL stack. After the bot, I was invited to work as
      an Android developer and create a control panel for the bot, I agreed.
      With the acquaintances I mentioned earlier, I started to develop a chess
      social network called Knight. Frontend on Svelte, backend on Nest.js.
    </p>
  </div>

  <div class="block full">
    <h2>Contacts</h2>
    <ContactsBlock />
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
}

.full {
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

.btn {
  border: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 1em;
  padding: 10px 28px 10px 28px;
  transition: ease 0.2s;
}

.btn:hover {
  background-color: white;
  color: black;
}

.mt-10 {
  margin-top: 10px;
}

.about {
  max-width: 600px;
}
</style>
