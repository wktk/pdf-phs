<template>
  <span id="forkongithub">
    <a href="https://github.com/wktk/pdf-phs"> Fork me on GitHub </a>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ForkMe",
});
</script>

<style>
@media screen and (min-width: 800px) {
  #forkongithub {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 200px;
    overflow: hidden;
    height: 200px;
    z-index: 9999;
  }

  #forkongithub a {
    text-decoration: none;
    font-family: arial, sans-serif;
    text-align: center;
    font-weight: bold;
    padding: 5px 40px;
    font-size: 1rem;
    line-height: 2rem;
    transition: 0.5s;
    background: #000;
    color: #fff;
    width: 200px;
    position: absolute;
    top: 60px;
    right: -60px;
    transform: rotate(45deg);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
  }

  #forkongithub a:hover {
    background: #c11;
    color: #fff;
  }

  #forkongithub a::before,
  #forkongithub a::after {
    content: "";
    width: 100%;
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    height: 1px;
    background: #fff;
  }

  #forkongithub a::after {
    bottom: 1px;
    top: auto;
  }
}
</style>
