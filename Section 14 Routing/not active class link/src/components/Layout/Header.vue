<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contact' }">Contact Us</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/productList">Product List</router-link></li>
              <li><router-link class="dropdown-item" to="/product">Product Details</router-link></li>
            </ul>
          </li>
          <li class="nav-item"></li>
        </ul>
        <form class="d-flex" role="search">
          <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppHeader',
})
</script>

<style scoped>
/* Router adds linkActiveClass (btn btn-primary); navbar .nav-link wins without this */
.navbar-nav :deep(a.nav-link.btn.btn-primary),
.d-flex :deep(a.nav-link.btn.btn-primary) {
  color: var(--bs-btn-color) !important;
  background-color: var(--bs-btn-bg) !important;
  border-color: var(--bs-btn-border-color) !important;
  border-width: var(--bs-border-width);
  border-style: solid;
}

.dropdown-menu :deep(a.dropdown-item.btn.btn-primary) {
  color: var(--bs-btn-color) !important;
  background-color: var(--bs-btn-bg) !important;
}
.dropdown-menu :deep(a.dropdown-item.btn.btn-primary:hover),
.dropdown-menu :deep(a.dropdown-item.btn.btn-primary:focus) {
  color: var(--bs-btn-hover-color) !important;
  background-color: var(--bs-btn-hover-bg) !important;
}
</style>
