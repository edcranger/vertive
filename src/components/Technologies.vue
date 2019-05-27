<template>
  <v-flex x12 class="text-xs-center">
    <v-btn large round flat color="primary">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>technologies</h1>
    </v-btn>
    <v-container fluid>
      <h3>We are an ideal offshore partner for organizations seeking quality software development. We deliver web development services and mobile app development services through our team of software developers who do specialize in the use of the following technologies.</h3>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs2 class="pa-1 my-button" v-for="(techLogo,index) in techLogos" :key="index">
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
