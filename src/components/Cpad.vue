<template>
  <div class="cpad purple darken-4">
    <v-container row wrap class="pa-3 white--text">
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-left">
          <p class="font-weight-black servicesTitle">
            Cross-Platform
            <br>
            <span class="orange--text">App Development</span>
          </p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 md6 class="textStyle pa-3">
          <div>
            <v-img :src="require('@/assets/bpa/cpad.png')"></v-img>
          </div>

          <div class="text-xs-center mt-3">
            <v-btn
              large
              class="white--text"
              :color="servicesInfo.color"
              route
              :to="{name: 'learnMore', params: {service_id: servicesInfo.servId }}"
            >Learn More</v-btn>
          </div>

          <p
            class="mt-3 text-xs-center white--text subheading"
          >Cross-platform mobile development benefits companies with faster development speeds and cost-effectiveness. And, this is what makes this framework the preferred choice of businesses globally.</p>
        </v-flex>
        <v-flex xs12 md6 class="textStyle pa-3">
          <v-timeline
            dense
            clipped
            v-for="(item, index) in items"
            :key="index"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <v-timeline-item class="mb-3" :color="item.color" icon-color="grey lighten-2" large>
              <template v-slot:icon>
                <span>
                  <v-icon>{{item.iconClass}}</v-icon>
                </span>
              </template>
              <v-layout justify-space-between>
                <v-flex xs7>
                  <h3>{{item.title}}</h3>
                </v-flex>
                <v-flex class="text-xs-right" xs7>
                  <v-tooltip left max-width="350">
                    <template v-slot:activator="{ on }">
                      <v-btn small class="white--text" dark v-on="on" fab :color="item.color">
                        <v-icon>fas fa-info</v-icon>
                      </v-btn>
                    </template>
                    <span>{{item.content}}</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cpad",
  props: ["servicesInfo"],
  components: {},
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Quicker Turnaround",
          content: `Only one cross-platform app needs to be developed in order to achieve functionality on all platforms, rather than the multiple apps, each built from scratch, that it would take to meet the same demand using native apps, cross-platform enterprise mobile app development takes much less time than native app development.`,
          iconClass: `fas fa-hourglass-end`,
          color: "green"
        },
        {
          title: "Reduced Costs",
          content: `This one’s a simple matter of doing the math. Less time and effort spent in development equals lower cost. With only a single mobile app to develop, not only does its creation move more quickly, but quality testing is also a simpler matter, as are deployment and ongoing support. The costs for all related services are reduced dramatically by opting for cross-platform mobile app development, thus allowing your enterprise to see that ROI more quickly, too.`,
          iconClass: `fas fa-piggy-bank`,
          color: "pink lighten-3"
        },
        {
          title: "Easy Integration With the Cloud",
          content: `Cross-platform mobile apps are easily and instantly able to be integrated into the cloud for hosting services. Developing an almost universally compatible app means that businesses can take full advantage of all the money-saving benefits that cloud hosting has to offer. Security is also easier to handle, since there is only one app to shield, rather than several.`,
          iconClass: `fas fa-cloud-upload-alt`,
          color: "amber lighten-2"
        },
        {
          title: "Quick Deployment",
          content: `Since cross-platform apps can be deployed from a company’s web server and accessed via users’ browsers, it is a quick and intuitive process that can have your mobile app in use immediately after development is complete.`,
          iconClass: `fas fa-code`,
          color: "blue"
        },
        {
          title: "Easier Updates",
          content: `Because cross-platform apps are accessed via the internet, updates are easy. Individual users have no need to download each update, which can lead to the necessity of maintaining and supporting more than one version of the app. Instead, the app is automatically updated for everyone, so that users always have the most current version on their devices.`,
          iconClass: `fas fa-download`,
          color: "cyan"
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
  font-size: calc(0.7vw + 0.7vh);
  text-align: justify;
}

p {
  text-align: justify;
}

.servicesTitle {
  font-size: calc(3vw + 1vh);
}
</style>
