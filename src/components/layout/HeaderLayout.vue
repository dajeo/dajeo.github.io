<template>
  <header>
    <div class="container">
      <a href="/" class="header-logo">
        <img src="../../assets/logo.svg" alt="Logo" width="40" height="40" />
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-logo {
  display: flex;
  align-items: center;
}

.container {
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
</style>
