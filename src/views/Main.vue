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
    <Services :servicesData="servicesData" class="mb-5"/>
    <Technologies :techLogos="techLogos"/>
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";

export default {
  name: "Main",
  components: {
    Technologies,
    Services
  },
  props: ["techLogos", "servicesData"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.main {
  margin-bottom: 11rem;
}
</style>
