<script setup />

<template>
<nav id="nav">
  <RouterLink :to="{ name: 'projects'}" class="tooltip" data-text="projects">
    <span class="material-symbols-outlined">featured_play_list</span>
  </RouterLink>
  <RouterLink to="/notifications" class="tooltip" data-text="notifications">
    <span class="material-symbols-outlined">notifications</span>
  </RouterLink>
  <RouterLink to="/messages" class="tooltip" data-text="messages">
    <span class="material-symbols-outlined">mail</span>
  </RouterLink>
  <RouterLink to="/profile" class="tooltip" data-text="profile">
    <span class="material-symbols-outlined">account_circle</span>
  </RouterLink>
</nav>
</template>

<style scoped>
  #nav {
    width: 40px;
    display: grid;
    align-items: center;
    justify-content: center;
  }
  a {
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 40px;
  }
  .router-link-active .material-symbols-outlined {
    font-variation-settings:
    'FILL' 1;
  }
  .material-symbols-outlined {
    color: #000;
    font-size: 28px;
    transition: all 0.2s ease;
  }
  a:hover .material-symbols-outlined {
    font-size: 38px;
  }
  @media screen and (max-width: 800px) {
    #nav {
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
