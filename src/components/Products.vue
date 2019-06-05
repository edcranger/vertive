<template>
  <v-flex x12 class="text-xs-center">
    <v-btn large round flat color="primary">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>Innovations</h1>
    </v-btn>
    <v-container fluid>
      <v-layout row class="my-5 pt-5">
        <v-flex xs6>
          <v-content fluid>
            <h1 class="font-weight-black.font-italic">POS Morgan</h1>
            <p
              class="mt-4"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti ut recusandae tempore aspernatur tenetur, nostrum eveniet iure modi, nisi exercitationem, cum expedita dolore. Libero labore provident ratione impedit vitae?</p>
          </v-content>
        </v-flex>
        <v-flex xs6>
          <v-img
            src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
      <v-layout row class="my-5 pt-5">
        <v-flex xs6>
          <v-img
            src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
          ></v-img>
        </v-flex>
        <v-flex xs6>
          <h1>NurDex</h1>
          <p
            class="mt-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti ut recusandae tempore aspernatur tenetur, nostrum eveniet iure modi, nisi exercitationem, cum expedita dolore. Libero labore provident ratione impedit vitae?</p>
        </v-flex>
      </v-layout>
      <v-layout row class="my-5 pt-5">
        <v-flex xs6>
          <h1 class="font-weight-black.font-italic">ToothBook</h1>
          <p
            class="mt-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti ut recusandae tempore aspernatur tenetur, nostrum eveniet iure modi, nisi exercitationem, cum expedita dolore. Libero labore provident ratione impedit vitae?</p>
        </v-flex>
        <v-flex xs6>
          <v-img
            src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs2 class="pa-1" v-for="(techLogo,index) in techLogos" :key="index">
          <v-img :src="techLogo.src"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>


<script>
export default {
  name: "Products"
};
</script>

<style>
</style>
