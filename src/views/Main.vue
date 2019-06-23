<template>
  <div class="main purple darken-4">
    <v-layout row wrap>
      <v-flex xs12>
        <v-img class="logoImg" :src="require('@/assets/carousel/1.png')"/>
      </v-flex>
    </v-layout>
    <Services :servicesData="servicesData"/>
    <Bpa :servicesInfo="servicesInfo[0]"/>
    <Cpad :servicesInfo="servicesInfo[1]"/>
    <Esd :servicesInfo="servicesInfo[2]"/>
    <Technologies :techLogos="techLogos"/>
  </div>
</template>

<script>
import Services from "@/components/Services";
import Bpa from "@/components/Bpa.vue";
import Cpad from "@/components/Cpad.vue";

import Esd from "@/components/Esd.vue";
import Technologies from "@/components/Technologies";

export default {
  name: "Main",
  components: {
    Technologies,
    Bpa,
    Cpad,
    Esd,
    Services
  },
  props: ["techLogos", "servicesData"],
  data() {
    return {
      servicesIcons: [
        { icon: "fas fa-server", description: "Business Process Automation" },
        {
          icon: "fas fa-laptop-code",
          description: "Cross-Platform Application"
        },
        {
          icon: "fas fa-microchip",
          description: "Embedded Systems Development"
        }
      ],
      servicesInfo: [
        {
          title: "Business Process Automation",
          content:
            "Business Process Automation (BPA) is a process of managing information, data and processes to reduce costs, resources and investment. BPA increases productivity by automating key business processes through computing technology geared toward implementing software applications to automate routine business tasks through initiation, execution and completion, while achieving enterprise-wide workflow efficiency. An Enterprise Resource Planning (ERP) system is often conceived as a BPA implementation outcome.",
          classHeading: "headline indigo",
          color: "indigo"
        },
        {
          title: "Cross-Platform App Development",
          content:
            "Cross-platform app development is a common approach among businesses today. It supports the development of custom mobile apps that are compatible across mobile platforms. Targeting many segments helps organizations to reach out to more users and, thus, increase the market share. It helps address the challenges for businesses, software vendors, and mobile development teams.",
          classHeading: "headline deep-orange",
          color: "deep-orange"
        },
        {
          title: "Embedded Systems Development",
          content:
            "Embedded systems is a field derived through a combined study of software and hardware. Both aspects come together to create a functional targeting device that possesses the advantages of adaptability, speed, accuracy, reliability, power, and smaller size. Embedded systems possess a wide array of utility in the fields of mobile communication, electronic payment solutions, vending machines, robotic arm, and medical equipments. They can be designed for specific applications in each field and can thus fulfil specialized purposes.",
          classHeading: "headline cyan",
          color: "cyan"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main {
  margin-bottom: 11rem;
}

.servicesTitle {
  font-size: calc(3vw + 1vh);
}

.iconSize {
  font-size: calc(3vw + 3vh);
}
</style>
