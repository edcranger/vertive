<template>
  <div class="esd">
    <v-container class="bpa-content">
      <p class="servicesTitle font-weight-black">
        <span class="orange--text">Internet</span>
        Of Things (IoT)
      </p>
      <v-layout row wrap>
        <v-flex xs12 class="textStyle pa-3">
          <v-container>
            <v-img :src="require('@/assets/bpa/iot.png')" contain></v-img>
          </v-container>

          <div class="text-xs-center mt-2">
            <v-btn
              large
              class="white--text"
              :color="servicesInfo.color"
              route
              :to="{name: 'learnMore', params: {service_id: servicesInfo.servId }}"
            >Learn More</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 class="textStyle mb-3">
          <h2
            class="subheading"
          >The Internet of Things (IoT) refers to a vast number of “things” that are connected to the internet so they can share data with other things. Real-world Internet of Things examples range from a smart home that automatically adjusts heating and lighting to a smart factory that monitors industrial machines to look for problems, then automatically adjusts to avoid failures.</h2>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-space-around row wrap fill-height class="mt-4">
        <v-flex
          xs6
          md2
          class="text-xs-center"
          v-for="(item, index) in items"
          :key="index"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <v-icon size="60" color="cyan">{{item.icon}}</v-icon>
          <p class="text-xs-center mt-2">{{item.title}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Esd",
  props: ["servicesInfo"],
  components: {},
  data() {
    return {
      dialog: false,
      items: [
        {
          icon: "fas fa-network-wired",
          title: "Few interconnections",
          color: "red"
        },
        {
          icon: "fas fa-search-minus",
          title: "Small in size.",
          color: "primary"
        },
        {
          icon: "fas fa-funnel-dollar",
          title: "Small in size",
          color: "green"
        },
        {
          icon: "fas fa-shipping-fast",
          title: "Fast Operation",
          color: "orange"
        },
        {
          icon: "fas fa-car-battery",
          title: "Low Power Operation",
          color: "yellow"
        }
      ]
    };
  }
};
</script>

<style scoped>
.textStyle {
  text-align: center;
}

.fontc {
  font-size: calc(0.7vw + 0.7vh);
  text-align: justify;
}

p {
  text-align: justify;
}

.servicesTitle {
  font-size: calc(3vw + 1vh);
  text-align: end;
}
</style>
