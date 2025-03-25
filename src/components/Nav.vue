<script setup />

<template>
<nav id="nav">
  <RouterLink :to="{ name: 'projects'}" class="tooltip" data-text="projects">
    <span class="material-symbols-outlined">featured_play_list</span>
  </RouterLink>
  <RouterLink to="/thoughts" class="tooltip" data-text="thoughts">
    <span class="material-symbols-outlined">neurology</span>
  </RouterLink>
  <RouterLink to="/profile" class="tooltip" data-text="profile">
    <span class="material-symbols-outlined">account_circle</span>
  </RouterLink>
  <RouterLink to="/messages" class="tooltip" data-text="messages">
    <span class="material-symbols-outlined">mail</span>
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
    & a {
      display: grid;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: 40px;
    }
      & .material-symbols-outlined {
        color: #000;
        font-size: 1.75rem;
        transition: all 0.2s ease;
      }
      & :hover > .material-symbols-outlined {
        font-size: 2.375rem;
      }
    & .router-link-active > .material-symbols-outlined {
      font-variation-settings:
      'FILL' 1;
    }
  @media screen and (max-width: 800px) {
    #nav {
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
