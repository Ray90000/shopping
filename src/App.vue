<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Practice</RouterLink>
        <RouterLink to="/practice">Practice1</RouterLink>
        <RouterLink to="/practice_2">Practice2</RouterLink>
        <RouterLink to="/practice_3">v-on</RouterLink>
        <RouterLink to="/part4">Part4-1</RouterLink>
        <RouterLink to="/part4_2">Part4-2</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  font-size: 12px;
  justify-content: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
