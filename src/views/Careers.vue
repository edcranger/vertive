<template>
  <div class="careers">
    <v-container>
      <h1 class="display-4 text-xs-center">Join Our Team</h1>
      <v-layout row wrap>
        <v-flex xs12>
          <v-img :src="require('@/assets/staff/artist2.png')"/>
          <v-icon>fas fa-star</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Careers",
  data() {
    return {
      rating: 5
    };
  }
};
</script>

<style scoped>
.applyNow {
  position: absolute;
  bottom: 0;
  margin-bottom: 2%;
}
.careers {
  margin-bottom: 11rem;
}

.artist {
  height: 70%;
  width: 70%;
}
</style>
