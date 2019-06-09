<template>
  <v-app>
    <v-content class="grey lighten-4">
      <Navbar/>
      <router-view :servicesData="servicesData" :techLogos="techLogos"></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      techLogos: [
        {
          src: require("@/assets/web/1.png")
        },
        {
          src: require("@/assets/web/2.png")
        },
        {
          src: require("@/assets/web/3.png")
        },
        {
          src: require("@/assets/web/4.png")
        },
        {
          src: require("@/assets/web/5.png")
        },
        {
          src: require("@/assets/web/6.png")
        },
        {
          src: require("@/assets/web/7.png")
        },
        {
          src: require("@/assets/web/8.png")
        }
      ],
      servicesData: [
        {
          name: "Business Process Automation",
          imgSrc: require("@/assets/services/1.png"),
          link: "bpa"
        },
        {
          name: "Cross-Platform App Development",
          imgSrc: require("@/assets/services/3.png"),
          link: "cpad"
        },
        {
          name: "Embedded Systems Development",
          imgSrc: require("@/assets/services/2.png"),
          link: "esd"
        }
      ]
    };
  }
};
</script>
