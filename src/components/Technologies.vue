<template>
  <v-flex x12 class="text-xs-center">
    <v-btn large round flat color="primary">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>technologies</h1>
    </v-btn>
    <v-container fluid>
      <h3>We offer company to company partnership that can help our clients establish their quality business solutions through software development, automations and creative innovations by the use of these technologies:</h3>
    </v-container>

    <v-container>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs2 class="my-button" v-for="(techLogo,index) in techLogos" :key="index">
          <v-img :src="techLogo.src"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: "Technologies",
  props: ["techLogos"]
};
</script>

<style>
</style>
