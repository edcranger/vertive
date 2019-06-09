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

    <Products id="#products"/>
    <v-layout row>
      <v-flex xs12></v-flex>
    </v-layout>
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Products from "@/components/Products";

export default {
  name: "Main",
  components: {
    Technologies,
    Services,
    Products
  },
  props: ["techLogos", "servicesData"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
