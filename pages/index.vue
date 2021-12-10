<template>
  <div class="container">
    <h1>Movie List</h1>

    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4" v-for="movie in movieList" :key="movie.id">
          <MovieCard :movie-detail="movie" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MovieCard from "../components/MovieList/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
  data: () => ({
    movieList: [],
  }),
  created() {
    this.fetchListing();
  },
  methods: {
    async fetchListing() {
      let partsParams = {
        page: 1,
      };
      try {
        let results = await this.$axios.$get("/getMovies", {
          params: {
            ...partsParams,
          },
        });

        this.movieList = results.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-body {
  background-color: black;
}
</style>
