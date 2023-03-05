<template>
  <nav>
    <router-link to="/">Start</router-link>
    <router-link to="/power-ball">Power Ball ✨</router-link>
  </nav>
  <div>
    <router-view/>
  </div>
  <footer>
    <div class="legals touchable impressum">Impressum</div>
    <div class="legals touchable agb">AGB</div>
  </footer>
</template>

<style>

:root {
  --global-spacing-s: 8px;
  --global-spacing-m: 16px;
  --global-spacing-l: 32px;
  --global-spacing-xl: 64px;
  --global-spacing-xxl: 128px;

  --footer-height: 40px;
}

body {
  position: relative;
  margin: 0;
}
body::before {
  background-image: url('./assets/lotto.jpg');
  background-size: cover;
  background-attachment: fixed;
  content: "";

  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  opacity: 0.5;
  z-index: -1;
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
  display: flex;
  gap: var(--global-spacing-m);
  z-index: 2;
}
nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 200px;
  height: 30px;
  /* border: 1px solid black; */

  font-weight: bold;
  font-size: 15px;
  color: #2c3e50;
  text-decoration: none;

  background: #fff;
  border-radius: 8px;
  box-shadow: 3px 2px 2px rgba(22, 22, 22, .2);
}
nav a:hover {
  box-shadow: 3px 2px 5px rgba(22, 22, 22, .65);
}
nav a.router-link-exact-active {
  color: #42b983;
  box-shadow: 3px 2px 5px rgba(22, 22, 22, .65);
}

footer {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  padding: var(--global-spacing-s);
  background: #272727;
  color: white;
  height: var(--footer-height);
  z-index: 2;
}
footer > div:hover {
  color: aquamarine;
}


main {
  width: 100vw;
  color: white;
  width: 100%;
  margin: 0px auto;
  padding: var(--global-spacing-l);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
}

h1, h2, h3, blockquote {
  font-family: elevon, sans-serif;
  font-weight: 700;
  font-style: normal;
}

header {
  border: 3px solid rgb(255 255 255 / 90%);
  grid-column: 4 / span 6;
  font-size: 2.5rem;
  margin-bottom: var(--global-spacing-xxl);
  text-align: center;
  border-radius: 10px;
  background: rgba(25, 255, 255, .321);
  font-weight: bold;
}

section {
  grid-column: 2 / 8;
  padding: 1rem;
  background: rgb(30 110 126 / 85%);
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--global-spacing-xxl);
  padding: 20px;
}

blockquote {
  margin: 0;
  padding: 0;
  grid-column: 2 / span 9;
  margin-bottom: var(--global-spacing-l);
  box-shadow: 5px 22px 22px rgba(22, 22, 22, .4);
  width: fit-content;
  padding: 10px 40px 10px 10px;
  background: aliceblue;
}

blockquote p, a {
  color: black;
  font-size: 3rem;
  display: inline;
  line-height: 1;
}

.right {
  grid-column: 6 / 12;
}

@media only screen and (max-width: 600px) {

  header {
    background: rgba(6, 35, 41, 0.40);
    grid-column: 1 / 13;
    font-size: 1.5rem;
    padding: var(--global-spacing-m);
  }

  header p {
    line-height: 1.4;
  }

  section {
    grid-column: 2 / 10;
    font-size: 1rem;
    background: rgb(30 10 26 / 40%);
  }

  section h2 {
    font-size: 1.5rem;
  }

  blockquote {
    border-radius: 6px;
    background: rgba(15, 15, 15, 0.55);
    box-shadow: 5px 4px 22px 20px rgb(18 115 119 / 40%);
  }

  blockquote p {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.2;
    padding: 10px;
    text-align: center;
  }

  .left {
    grid-column: 2 / 10;
  }
  .right {
    grid-column: 4 / 12;
  }
}
</style>
