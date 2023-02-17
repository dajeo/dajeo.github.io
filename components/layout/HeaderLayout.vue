<template>
  <header>
    <div class="container">
      <a
        href="/"
        class="header-logo"
      >
        <img
          src="../../assets/logo.svg" 
          alt="Logo"
        >
      </a>

      <nav>
        <ul>
          <li>
            <a href="#">All projects</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.container {
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

header {
  padding: 8px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-logo {
  display: flex;
  align-items: center;
}

.header-logo img {
  width: 40px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  margin-left: 18px;
  margin-right: 18px;
  display: inline;
}

li:last-child {
  margin-right: 8px;
}
</style>
