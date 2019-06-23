<template>
  <v-app>
    <v-content class="purple darken-4">
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
          name: "Process Automation",
          imgSrc: require("@/assets/services/1.png"),
          link: "bpa",
          color: "purple accent-2"
        },
        {
          name: "Application Development",
          imgSrc: require("@/assets/services/2.png"),
          link: "cpad",
          color: "lime accent-3"
        },
        {
          name: "Embedded Systems",
          imgSrc: require("@/assets/services/3.png"),
          link: "esd",
          color: "light-blue accent-3"
        }
      ]
    };
  }
};
</script>
