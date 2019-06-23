<template>
  <div class="services grey darken-4">
    <v-flex xs12 class="text-xs-center py-3">
      <v-layout row wrap>
        <v-flex xs4 sm4 v-for="(sData, index) in servicesData" :key="index">
          <v-card flat class="grey darken-4 white--text">
            <v-img height="50" :src="sData.imgSrc" contain></v-img>
            <div class="mt-1">
              <span class="logoFont">{{sData.name}}</span>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-parallax height="350" :src="require('@/assets/parallax/parallax1.jpg')" class="paraSize">
      <div class="mt-5">
        <v-img
          height="450"
          class="mt-5"
          :src="require('@/assets/services/opening.png')"
          contain
          data-aos="flip-left"
        ></v-img>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: ["techLogos", "servicesData"],
  components: {}
};
</script>

<style scoped>
.servicesTitle {
  font-size: calc(3vw + 1vh);
  text-align: end;
}

.logoFont {
  font-size: calc(0.7vw + 1vh);
}
</style>
