<template>
  <div class="technologies">
    <v-flex x12 class="text-xs-center white--text">
      <v-container fluid class="deep-purple darken-1">
        <v-btn large round flat color="white">
          <v-icon large class="mr-2">archive</v-icon>
          <h1>technologies</h1>
        </v-btn>
        <h3
          class="font-weight-light"
        >We offer company to company partnership that can help our clients establish their quality business solutions through software development, automations and creative innovations by the use of these technologies:</h3>
      </v-container>

      <!-- <v-container>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs2 class="my-button" v-for="(techLogo,index) in techLogos" :key="index">
          <v-img :src="techLogo.src"></v-img>
        </v-flex>
      </v-layout>
      </v-container>-->
      <v-carousel hide-delimiters interval="7000" height="120" class="white elevation-0">
        <v-carousel-item>
          <v-layout align-center row fill-height>
            <v-flex>
              <v-img :src="require('@/assets/web/1.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/2.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/3.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/4.png')" height="80" contain></v-img>
            </v-flex>
          </v-layout>
        </v-carousel-item>
        <v-carousel-item>
          <v-layout align-center row fill-height>
            <v-flex>
              <v-img :src="require('@/assets/web/5.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/6.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/7.png')" height="80" contain></v-img>
            </v-flex>
            <v-flex>
              <v-img :src="require('@/assets/web/8.png')" height="80" contain></v-img>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "Technologies",
  props: ["techLogos"],
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
