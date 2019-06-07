<template>
  <div class="bpa">
    <v-container fluid>
      <h1 class="font-weight-black display-3">Business Process</h1>
      <h1 class="font-weight-black display-3 orange--text mb-3">Automation</h1>
      <v-layout row wrap>
        <v-flex xs12 md6 class="textStyle">
          <h3>Business Process Automation (BPA) is a process of managing information, data and processes to reduce costs, resources and investment. BPA increases productivity by automating key business processes through computing technology.</h3>
          <br>
          <h3>The BPA process is geared toward implementing software applications to automate routine business tasks through initiation, execution and completion, while achieving enterprise-wide workflow efficiency. An Enterprise Resource Planning (ERP) system is often conceived as a BPA implementation outcome.</h3>
        </v-flex>
        <v-flex xs12 class="textStyle">
          <v-img src></v-img>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-5 text-xs-center mb-5">
        <v-flex xs12 class>
          <h2 class="font-weight-black">
            <strong>How does Business Process Automation benefits your company?</strong>
          </h2>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card :color="item.color" dark>
                <v-card-title class="title">{{item.title}}</v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{item.content}}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Optimization of primary processes",
          content:
            "Shortening of the production cycle, equipment optimization, and action resources minimization. Reduces the number of errors and increases the data process speed. Implement of workflow to get rid of mistakes and process inconsistencies.",
          color: "red lighten-2",
          icon: "mdi-star"
        },
        {
          title: "Realtime Support",
          content:
            "Monitor and control results in real time in a global aspect as well in a detailed way, helping the decision-making and traceability of the process – concluded or in progress.",
          color: "purple darken-1",
          icon: "mdi-book-variant"
        },
        {
          title: "Quality Audits",
          content:
            " Get reliable reports with documentation, extremely useful to determine, configure and standardize business performance indicators at any time.",
          color: "green lighten-1",
          icon: "mdi-airballoon"
        },
        {
          title: "User Friendly",
          content:
            "Possibility to use different systems, from different platforms, without the worker having to memorize which screens to use since they are automatically available and with a significant increase of execution speed.",
          color: "indigo",
          icon: "mdi-buffer"
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
.picPosition {
  top: 0px;
}
</style>
