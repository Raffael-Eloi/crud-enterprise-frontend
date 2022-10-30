<template>
  <b-card>
    <b-nav pills>
      <b-nav-item>
         <router-link :to="{ name: 'home' }">
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'enterprise' }">
          Empresa
        </router-link>
      </b-nav-item>
    </b-nav>
  </b-card>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
</style>
