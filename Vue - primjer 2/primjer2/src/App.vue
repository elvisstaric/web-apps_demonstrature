<template>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  appearance: button;
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
}

button:focus {
  outline: 0;
}

button:hover {
  background-color: #0a46e4;
  border-color: #0a46e4;
}

button:active {
  background-color: #0039d7;
  border-color: #0039d7;
}
</style>
