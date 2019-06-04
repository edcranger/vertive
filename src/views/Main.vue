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
    <Technologies :techLogos="techLogos"/>
    <Services :servicesData="servicesData"/>
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
  data() {
    return {
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
          name: "Business App Development",
          imgSrc: require("@/assets/services/1.png"),
          content:
            "This is a sample text for the business app This is a sample text for the business appThis is a sample text for the business appThis is a sample text for the business app"
        },
        {
          name: "Multi-Platform App Development",
          imgSrc: require("@/assets/services/2.png"),
          content:
            "This is a sample text for the business app This is a sample text for the business appThis is a sample text for the business appThis is a sample text for the business app"
        },
        {
          name: "Content Writing and Web Design",
          imgSrc: require("@/assets/services/3.png"),
          content:
            "This is a sample text for the business app This is a sample text for the business appThis is a sample text for the business appThis is a sample text for the business app"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
