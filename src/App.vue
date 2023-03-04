<template>
  <nav>
    <router-link to="/">Start</router-link> |
    <router-link to="/power-ball">Power Ball ✨</router-link>
  </nav>
  <router-view/>
  <footer>
    <div class="legals touchable impressum">Impressum</div>
    <div class="legals touchable agb">AGB</div>
  </footer>
</template>


<style>


:root {
  --global-spacing-s: 8px;
  --global-spacing-m: 16px;
  --global-spacing-m: 32px;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.touchable {
  cursor: pointer;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  display: flex;
  gap: 1rem;
  justify-content: center;

  margin-top: auto;
  padding: var(--global-spacing-s);
  background: #272727;
  color: white;
}
footer > div:hover {
  color: aquamarine;
}
</style>
