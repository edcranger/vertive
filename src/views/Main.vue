<template>
  <div class="main">
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <v-img class="logoImg" :src="require('@/assets/1.png')"/>
          <v-btn relative large round dark bottom left color="pink">
            <h1>Get Started</h1>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-content class="mt-0">
      <v-layout row wrap>
        <v-flex xs12 class="mb-3">
          <p class="servicesTitle text-xs-center font-weight-black">Our Services</p>
        </v-flex>
        <v-layout align-center justify-space-around fill-height>
          <v-flex
            xs4
            class="text-xs-center"
            v-for="(servicesIcon, index) in servicesIcons"
            :key="index"
          >
            <v-btn color="indigo" class="iconSize" depressed fab large dark>
              <v-icon class="iconSize">{{servicesIcon.icon}}</v-icon>
            </v-btn>
            <p class="text-xs-center">{{servicesIcon.description}}</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-content>

    <Bpa/>
    <Cpad/>
    <Esd/>
    <Services :servicesData="servicesData" class="mb-5"/>
    <Technologies :techLogos="techLogos"/>
  </div>
</template>

<script>
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
    Esd
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
