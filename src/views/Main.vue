<template>
  <div class="main">
    <v-layout row wrap>
      <v-flex xs12>
        <v-img class="logoImg" :src="require('@/assets/1.png')"/>
        <v-btn relative large round dark bottom left color="pink">
          <h1>Get Started</h1>
        </v-btn>
      </v-flex>
    </v-layout>
    <Services :servicesData="servicesData" class="mb-2"/>
    <Bpa/>
    <Cpad/>
    <Esd/>

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
