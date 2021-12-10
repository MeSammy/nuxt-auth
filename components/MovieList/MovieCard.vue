<template>
  <divl class="movie-card">
    {{ movieDetail.title }}
    <b-img :src="imageUrl" />
  </divl>
</template>

<script>
import { TMTB_URL } from "../../utils/Constants";
export default {
  props: {
    movieDetail: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    imageUrl() {
      console.log(TMTB_URL + this.movieDetail.backdrop_path);
      return (this.imageUrl = TMTB_URL + this.movieDetail.backdrop_path);
    },
  },
};
</script>

<style lang="scss" scoped></style>
