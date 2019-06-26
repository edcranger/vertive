<template>
  <div class="bpa yellow lighten-3">
    <v-container class="bpa-content">
      <p class="servicesTitle font-weight-black text-xs-center">
        Business Process
        <span class="orange--text">Automation</span>
      </p>
      <v-container>
        <v-img :src="require('@/assets/bpa/bpa.svg')" contain></v-img>
        <v-layout row justify-center>
          <v-btn
            large
            class="white--text"
            :color="servicesInfo.color"
            route
            :to="{name: 'learnMore', params: {service_id: servicesInfo.servId }}"
          >Learn More</v-btn>
        </v-layout>
      </v-container>

      <v-layout row wrap class="mt-2">
        <v-flex
          xs12
          md6
          class="textStyle mb-3 pa-4"
          v-for="(item, index) in items"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div class="text-xs-center elevation-3 deep-purple darken-1 pa-3 rounded-bg">
            <v-icon color="white" size="30">{{item.icon}}</v-icon>
            <p class="text-xs-center title white--text">{{item.title}}</p>
            <p class="benef white--text">{{item.content}}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Bpa",
  components: {},
  props: ["servicesInfo"],
  data() {
    return {
      dialog: false,
      dialogColor: null,
      items: [
        {
          title: "Optimization of primary processes",
          content:
            "Shortening of the production cycle, equipment optimization, and action resources minimization. Reduces the number of errors and increases the data process speed. Implement of workflow to get rid of mistakes and process inconsistencies.",
          color: "red",
          icon: "fas fa-tachometer-alt"
        },
        {
          title: "User Friendly",
          content:
            "Gain ability to use different systems from different platforms, without the worker having to memorize which screens to use will lead to cost-effectiveness since they are automatically available and with a significant increase of execution speed.",
          color: "indigo",
          icon: "fas fa-child"
        },
        {
          title: "Realtime Support",
          content:
            "Monitor and control results in real time in a global aspect as well in a detailed way, helping the decision-making and traceability of the process – concluded or in progress.",
          color: "purple",
          icon: "fas fa-headset"
        },
        {
          title: "Quality Audits",
          content:
            " Get reliable reports with documentation that would be extremely useful to determine, configure and standardize business performance indicators at any time. ",
          color: "green",
          icon: "fas fa-chalkboard-teacher"
        }
      ]
    };
  }
};
</script>

<style scoped>
.textStyle {
  text-align: justify;
}

.fontc {
  font-size: calc(0.5vw + 0.7vh);
  text-align: center;
}
.fonttc {
  font-size: calc(0.8vw + 0.9vh);
  text-align: center;
}

.servicesTitle {
  font-size: calc(3vw + 1vh);
}

.benef {
  text-align: center;
}

.rounded-bg {
  border-radius: 50px;
}
</style>
