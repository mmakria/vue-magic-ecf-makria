<script setup>

</script>

<template>
  <!-- Header -->
  <div id="header-wrapper">
    <div class="container">
      <!-- Header -->
      <header id="header">
        <div class="inner">
          <!-- Logo -->
          <h1>
            <router-link to="/">Magic</router-link>
          </h1>
          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li >
                <router-link to="/">
                  Home
                </router-link>

              </li>
              <li>
                <router-link to="/collection">
                  Ma Collection
                </router-link>

              </li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Banner -->
      <div id="banner">
        <h2>Magic the gathering</h2>
      </div>

    </div>
  </div>

</template>

<style scoped>

.router-link-active{
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 1px 1px 0px 0px rgba(0, 0, 0, 0.025), 1px 1px 0px 0px rgba(255, 255, 255, 0.025);

}

</style>