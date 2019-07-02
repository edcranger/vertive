<template>
  <v-app class="white">
    <v-content>
      <Navbar />
      <router-view
        class="mb-3"
        :servicesData="servicesData"
        :techLogos="techLogos"
        :serviceInfo="servicesInfo"
      ></router-view>
      <Footer />
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
      ],
      servicesInfo: [
        {
          servId: 0,
          title: "Business Solutions",
          content:
            "Business Process Solutions is a process of managing information, data and processes to reduce costs, resources and investment. It increases productivity by automating key business processes through computing technology geared toward implementing software applications to automate routine business tasks through initiation, execution and completion, while achieving enterprise-wide workflow efficiency. An Enterprise Resource Planning (ERP) system is often conceived as a BPA implementation outcome.",
          classHeading: "headline indigo",
          color: "purple darken-4",
          src: require("@/assets/bpa/bpa.png")
        },
        {
          servId: 1,
          title: "Cross-Platform App Development",
          content:
            "Cross-platform app development is a common approach among businesses today. It supports the development of custom mobile apps that are compatible across mobile platforms. Targeting many segments helps organizations to reach out to more users and, thus, increase the market share. It helps address the challenges for businesses, software vendors, and mobile development teams.",
          classHeading: "headline deep-orange",
          color: "deep-orange",
          src: require("@/assets/bpa/cpa.png")
        },
        {
          servId: 2,
          title: "Internet Of Things (IOT)",
          content:
            "IoT is a concept where any device is connected to other devices over the internet and has an on and off switch. IoT is a massive network connecting devices with people with the help of internet. The data is exchanged within this network and is used to determine how the devices will be used in certain environments.",
          classHeading: "headline cyan",
          color: "cyan",
          src: require("@/assets/bpa/esd.png")
        }
      ]
    };
  }
};
</script>
