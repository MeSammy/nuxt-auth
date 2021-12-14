<template>
  <div class="container-fluid movie-container">
    <h1 class="my-5">Trending Movies</h1>

    <b-container fluid class="bv-example-row" v-if="!loading">
      <b-row>
        <b-col md="3" v-for="movie in movieList" :key="movie.id">
          <MovieCard :movie-detail="movie" />
        </b-col>
      </b-row>
      <b-row v-if="totalPages > 1">
        <b-col>
          <div class="overflow-auto mb-5">
            <b-pagination-nav
              :link-gen="changePage"
              :number-of-pages="totalPages"
              class="data-table-pagination float-sm-right"
            ></b-pagination-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Loading v-else />
  </div>
</template>

<script>
import MovieCard from "../components/MovieList/MovieCard.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    MovieCard,
    Loading,
  },
  data: () => ({
    loading: false,
    movieList: [],
    totalPages: 0,
    perPage: 10,
    // currentPage: 1,
  }),
  created() {
    // this.fetchListing();
  },
  watchQuery: ["page", "search"],
  async asyncData({ app, query }) {
    let partsParams = query;
    let movieUrl = "/getMovies";
    let searchQuery = query.search;

    if (searchQuery) {
      partsParams.search = searchQuery;
      movieUrl = "/getMoviesByQuery";
    }

    let loading = true;
    let movieList = [];
    let results = await app.$axios.$get(movieUrl, {
      params: {
        ...partsParams,
      },
    });

    movieList = results.data.results;
    let totalPages = results.data.total_pages;
    let currentPage = results.data.page;
    loading = false;
    return { loading, totalPages, currentPage, movieList };
  },
  methods: {
    async fetchListing(pageNumber = 0, search = null) {
      let partsParams = {
        page: pageNumber > 0 ? pageNumber : this.$route.query.page,
      };
      let movieUrl = "/getMovies";
      let searchQuery = search ?? this.$route.query.search;

      if (searchQuery) {
        partsParams.search = searchQuery;
        movieUrl = "/getMoviesByQuery";
      }

      try {
        this.loading = true;
        this.movieList = [];
        let results = await this.$axios.$get(movieUrl, {
          params: {
            ...partsParams,
          },
        });

        this.movieList = results.data.results;
        this.totalPages = results.data.total_pages;
        this.currentPage = results.data.page;
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
    changePage(pageNumber) {
      if (this.currentPage === pageNumber.toString()) {
        return;
      }

      this.page = pageNumber;
      return pageNumber === 1 ? "?" : `?page=${pageNumber}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-container {
  max-width: 1508px;
}
</style>
