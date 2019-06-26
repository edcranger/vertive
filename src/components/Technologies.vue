<template>
  <div class="technologies">
    <v-parallax height="340" :src="require('@/assets/parallax/parallax2.gif')">
      <v-container fluid class="tech-content">
        <v-flex x12 class="text-xs-center">
          <v-container fluid class>
            <v-btn large round flat class="mt-3">
              <h1 class="white--text text-xs-center fonttc">technologies</h1>
            </v-btn>
            <p
              class="fontc font-weight-light"
            >We offer company to company partnership that can help our clients establish their quality business solutions through software development, automations and creative innovations by the use of these technologies:</p>
          </v-container>

          <v-carousel
            hide-delimiters
            hide-controls="true"
            interval="5000"
            height="120"
            class="elevation-0 mb-5"
          >
            <v-carousel-item>
              <v-layout align-center row>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/1.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/2.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/3.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/4.png')" height="60" contain></v-img>
                </v-flex>
              </v-layout>
            </v-carousel-item>
            <v-carousel-item>
              <v-layout align-center row>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/5.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/6.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/7.png')" height="60" contain></v-img>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="require('@/assets/web/8.png')" height="60" contain></v-img>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-container>
    </v-parallax>
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
.technologies {
  bottom: 0;
}

.fontc {
  font-size: calc(0.9vw + 0.9vh);
  text-align: center;
}

.fonttc {
  font-size: calc(0.8vw + 0.9vh);
  text-align: center;
}
</style>
