<template>
  <div class="bpa pa-4">
    <v-container fluid class="bpa-content elevation-2 white">
      <p class="servicesTitle font-weight-black text-xs-center">
        Business Process
        <span class="orange--text">Automation</span>
      </p>
      <v-container fluid>
        <v-img :src="require('@/assets/bpa/bpa.png')"></v-img>
        <v-layout row justify-center>
          <v-btn large class="mt-4" color="indigo" dark @click.stop="dialog = true">Learn More</v-btn>

          <v-dialog v-model="dialog" max-width="1090">
            <v-card class>
              <v-card-title class="headline indigo">
                <h3 class="white--text">Business Process Automation</h3>
              </v-card-title>
              <v-container fluid>
                <v-card-text
                  class="subheading"
                >Business Process Automation (BPA) is a process of managing information, data and processes to reduce costs, resources and investment. BPA increases productivity by automating key business processes through computing technology.</v-card-text>
                <v-card-text
                  class="subheading"
                >The BPA process is geared toward implementing software applications to automate routine business tasks through initiation, execution and completion, while achieving enterprise-wide workflow efficiency. An Enterprise Resource Planning (ERP) system is often conceived as a BPA implementation outcome.</v-card-text>

                <v-card-action>
                  <Inquire/>
                </v-card-action>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-container>

      <v-layout row wrap class="mt-2">
        <v-flex xs12 md6 class="textStyle mb-3 pa-4" v-for="(item, index) in items" :key="index">
          <div class="text-xs-center">
            <v-icon :color="item.color" size="30">{{item.icon}}</v-icon>
            <p :class="item.color + '--text'" class="text-xs-center title">{{item.title}}</p>
            <p class="benef">{{item.content}}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Inquire from "@/components/Inquire";

export default {
  name: "Bpa",
  components: {
    Inquire
  },
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Optimization of primary processes",
          content:
            "Shortening of the production cycle, equipment optimization, and action resources minimization. Reduces the number of errors and increases the data process speed. Implement of workflow to get rid of mistakes and process inconsistencies.",
          color: "red",
          icon: "fas fa-tachometer-alt"
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
            " Get reliable reports with documentation, extremely useful to determine, configure and standardize business performance indicators at any time.",
          color: "green",
          icon: "fas fa-chalkboard-teacher"
        },
        {
          title: "User Friendly",
          content:
            "Possibility to use different systems, from different platforms, without the worker having to memorize which screens to use since they are automatically available and with a significant increase of execution speed.",
          color: "indigo",
          icon: "fas fa-child"
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
</style>
