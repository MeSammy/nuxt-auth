<template>
  <div class="header">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="black"
      class="header--navebar"
    >
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">TMDB Movie-search</nuxt-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-nav-form class="ml-auto">
            <b-input-group
              append-html="<button class='btn-search' type='submit' >Search</button>"
            >
              <b-form-input placeholder="Search" name="search"></b-form-input>
              <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              > -->
            </b-input-group>
          </b-nav-form>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  &--navebar {
    background-color: black;
  }
  .navbar-brand {
    font-weight: 700;
    font-size: 24px;
  }
  .input-group-text {
    height: 50px;
    background-color: #ffc107;
    color: #fff;
    font-weight: 700;
  }
  .form-control {
    height: 50px;
  }
  @media (min-width: 768px) {
    .input-group-text {
      width: 130px;
    }
    .form-control {
      width: 365px;
    }
  }
  .btn-search {
    margin: 0 auto;
    border: none;
    background-color: transparent;
  }
}
</style>
<style lang="scss">
body {
  background-color: black;
  color: #fff;
}
</style>
