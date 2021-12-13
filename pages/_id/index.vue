<template>
  <div class="container">
    <b-container fluid class="detail" v-if="!loading">
      <b-row>
        <b-col md="4">
          <b-img :src="imageUrl" class="detail--image" />
        </b-col>
        <b-col md="8">
          <h1 class="detail--title">
            {{ detail.title }}
          </h1>
          <div class="detail--desc my-3">{{ detail.overview }}</div>
          <div class="d-flex detail--desc mb-4">
            <span class="detail--subTitle pr-2">Released Date:</span>
            <span>{{ movieReleasedDate }}</span>
          </div>
          <div class="d-flex detail--desc mb-4">
            <span class="detail--subTitle pr-2">Runtime:</span>
            <span>{{ detail.runtime }} min</span>
          </div>
          <div class="d-flex detail--desc mb-4">
            <span class="detail--subTitle pr-2">Genre(s):</span>
            <span
              >{{ detail.genres.map((genre) => genre.name).join(", ") }}
            </span>
          </div>
          <div class="d-flex detail--desc mb-4">
            <span class="detail--subTitle pr-2">IMDB Rating:</span>
            <span>{{ detail.vote_average }}</span>
          </div>
          <div class="d-flex detail--desc mb-4">
            <span class="detail--subTitle pr-2">Language(s):</span>
            <span>{{
              detail.spoken_languages
                .map((language) => language.english_name)
                .join(", ")
            }}</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Loading v-else />
  </div>
</template>

<script>
import Loading from "../../components/Loading.vue";
import { TMTB_URL } from "../../utils/Constants";
import { format } from "date-fns";
export default {
  components: {
    Loading,
  },
  data: () => ({
    detail: {},
    loading: false,
  }),
  created() {
    this.fetchDetail();
  },
  computed: {
    imageUrl() {
      return TMTB_URL + this.detail.poster_path;
    },
    movieReleasedDate() {
      return format(new Date(this.detail.release_date), "dd MMM, yyyy");
    },
  },
  methods: {
    async fetchDetail() {
      try {
        this.loading = true;

        let results = await this.$axios.$get("/getMoviesById", {
          params: {
            movieId: this.$route.params.id,
          },
        });

        this.detail = results.data;
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  margin-top: 50px;
  margin-bottom: 50px;
  &--image {
    border-radius: 20px;
    height: 450px;
  }
  &--title {
    font-weight: 700;
  }
  &--subTitle {
    color: honeydew;
  }
  &--desc {
    color: grey;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
