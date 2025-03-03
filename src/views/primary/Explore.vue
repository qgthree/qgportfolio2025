<script setup>
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div id="layout_explore">
    <div id="sidepanel">
      <div id="logo">
        <RouterLink :to="{ name: 'projects'}">
          <span class="tooltip" data-text="Quintus Greene | Portfolio">Q</span>
        </RouterLink>
      </div>
      <Nav />
      <div id="tip">
      </div>
    </div>
    <Suspense>
      <router-view name="view" />
    </Suspense>
    <footer>
      <Nav />
    </footer>
  </div>
</template>

<style scoped>
  #layout_explore {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 80px 1fr;
    overflow: hidden;
  }
    & #sidepanel {
      padding: 40px 20px;
      display: grid;
      grid-auto-rows: 1fr 45% 1fr;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
      min-height: 600px;
      border-right: 1px solid rgba(0,0,0,0.1);
      background-color: #fff;
      z-index: 100;
    }
      & #logo {
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: 200;
      }
        & a {
          color: #000;
          height: fit-content;
        }
        & span {
          width: 30px;
          height: 40px;
          display: flex;
          align-content: center;
          justify-content: center;
          flex-wrap: wrap;
          transition: all 0.2s ease;
        }
        & span:hover {
          font-size: 24px;
        }
    & footer {
      padding: 20px 25px;
      display: none;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  @media screen and (max-width: 800px) {
    #layout_explore {
      grid-template-columns: 1fr;
      grid-template-rows: calc(100vh - 80px) 80px;
    }
      & #sidepanel {
        display: none;
      }
      & footer {
        display: block;
      }
  }
</style>
