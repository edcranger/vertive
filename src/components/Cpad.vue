<template>
  <div class="cpad">
    <v-container fluid row wrap>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-right">
          <h1 class="font-weight-black display-3">Cross-Platform</h1>
          <h1 class="font-weight-black display-3 orange--text mb-3">App Development</h1>
        </v-flex>
        <v-flex xs12 md6 class="textStyle pa-3">
          <v-img :src="require('@/assets/bpa/cpad.png')"></v-img>
        </v-flex>
        <v-flex xs12 md6 class="textStyle mb-3 mt-4">
          <h2
            class="font-weight-light"
          >Cross-platform app development is a common approach among businesses today. It supports the development of custom mobile apps that are compatible across mobile platforms. Targeting many segments helps organizations to reach out to more users and, thus, increase the market share. It helps address the challenges for businesses, software vendors, and mobile development teams.</h2>
        </v-flex>
      </v-layout>

      <v-layout align-center row fill-height wrap class="my-5">
        <v-flex xs12 class="mx-4" v-for="(item, index) in items" :key="index">
          <v-container fluid>
            <v-hover class="pa-3">
              <v-layout>
                <v-flex xs5 class="text-xs-center">
                  <v-icon size="80" class="mt-2" :class="item.color">{{item.iconClass}}</v-icon>
                </v-flex>
                <v-flex xs9 class="ml-5">
                  <h3 class="mb-1">{{item.title}}</h3>
                  <p class="fontc font-weight-light">{{item.content}}</p>
                </v-flex>
              </v-layout>
            </v-hover>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cpad",
  data() {
    return {
      items: [
        {
          title: "Quicker Turnaround",
          content: `Only one cross-platform app needs to be developed in order to achieve functionality on all platforms, rather than the multiple apps, each built from scratch, that it would take to meet the same demand using native apps, cross-platform enterprise mobile app development takes much less time than native app development.`,
          iconClass: `fas fa-hourglass-end`,
          color: "green--text"
        },
        {
          title: "Reduced Costs",
          content: `This one’s a simple matter of doing the math. Less time and effort spent in development equals lower cost. With only a single mobile app to develop, not only does its creation move more quickly, but quality testing is also a simpler matter, as are deployment and ongoing support. The costs for all related services are reduced dramatically by opting for cross-platform mobile app development, thus allowing your enterprise to see that ROI more quickly, too.`,
          iconClass: `fas fa-piggy-bank`,
          color: "pink--text"
        },
        {
          title: "Easy Integration With the Cloud",
          content: `Cross-platform mobile apps are easily and instantly able to be integrated into the cloud for hosting services. Developing an almost universally compatible app means that businesses can take full advantage of all the money-saving benefits that cloud hosting has to offer. Security is also easier to handle, since there is only one app to shield, rather than several.`,
          iconClass: `fas fa-cloud-upload-alt`,
          color: "grey--text"
        },
        {
          title: "Quick Deployment",
          content: `Since cross-platform apps can be deployed from a company’s web server and accessed via users’ browsers, it is a quick and intuitive process that can have your mobile app in use immediately after development is complete.`,
          iconClass: `fas fa-code`,
          color: "blue--text"
        },
        {
          title: "Easier Updates",
          content: `Because cross-platform apps are accessed via the internet, updates are easy. Individual users have no need to download each update, which can lead to the necessity of maintaining and supporting more than one version of the app. Instead, the app is automatically updated for everyone, so that users always have the most current version on their devices.`,
          iconClass: `fas fa-download`,
          color: "pink--text"
        }
      ]
    };
  }
};
</script>

<style>
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
</style>
