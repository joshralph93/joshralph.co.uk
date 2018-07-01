<template>
  <div id="app" class="_site-bg min-h-screen py-16 px-20 flex font-heading">
    <div class="bg-white w-full flex-grow shadow-lg flex">
      <div class="w-2/5 border-r-2 border-grey-lighter border-solid _me">
        <div class="flex w-full h-full flex-col items-center justify-center">
          <div class="text-center">
            <h2 class="mb-4">Josh Ralph</h2>
            <p class="text-grey-dark font-light">Web Developer<br>and starter of side projects.</p>
          </div>
        </div>
      </div>
      <div class="p-16">
        <nav>
          <ul class="list-reset flex">
            <router-link tag="li" to="/" class="mr-8">
              <a class="no-underline text-grey-dark px-2 py-6 block">Blog</a>
            </router-link>
            <router-link tag="li" to="/about"  class="mr-8">
              <a class="no-underline text-grey-dark px-2 py-6 block">About</a>
            </router-link>
            <router-link tag="li" to="/projects">
              <a class="no-underline text-grey-dark px-2 py-6 block">Projects</a>
            </router-link>
          </ul>
        </nav>
        <div class="py-10">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  ._site-bg {
    background:
      /* On "top" */
      repeating-linear-gradient(
        0deg,
        #f8fafc,
        #f8fafc 300px,
        transparent 300px,
        transparent
      ),
        /* on "bottom" */
      #265EC1
  }

  ._me {
    background-image: linear-gradient(white, #f8fafc);
  }

</style>
<style src="./assets/styles/main.css"></style>
