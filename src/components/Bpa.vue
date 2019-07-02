<template>
  <div class="bpa">
    <v-container class="bpa-content">
      <p class="servicesTitle font-weight-black text-xs-center">
        Business
        <span class="orange--text">Solutions</span>
      </p>
      <v-container>
        <v-img :src="require('@/assets/bpa/bpa.svg')" contain></v-img>
        <v-layout row justify-center>
          <v-btn
            large
            class="white--text"
            color="deep-purple darken-1"
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
          data-aos-duration="1000"
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
          title: "eCommerce Development",
          content:
            " Online Store is a hit nowadays since online shopping is the preferred way of buying things as the customers enjoy the convenience and will decrease personal and travel cost for the consumers. ",
          color: "green",
          icon: "fas fa-store"
        },
        {
          title: "Business Software Development",
          content:
            "Custom software will generally produce the most efficient system as it can provide support for the specific needs of the business, which might not be available in an off-the-shelf solution and will provide greater efficiency or better customer service.",
          color: "indigo",
          icon: "fas fa-child"
        },
        {
          title: "Process Automation",
          content:
            "Shortening of the production cycle and cost, equipment optimization. Reduces the number of errors and increases the data process speed. Implement of workflow to get rid of mistakes and process inconsistencies.",
          color: "red",
          icon: "fas fa-tachometer-alt"
        },

        {
          title: "Realtime Support",
          content:
            "Customer posting reviews and ratings on retailer's website, monitor and control results in real time in a global aspect as well in a detailed way, helping the decision-making and traceability of the process – concluded or in progress.",
          color: "purple",
          icon: "fas fa-headset"
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
