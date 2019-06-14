<template>
  <div class="esd">
    <v-container fluid class="bpa-content">
      <h1 class="font-weight-black display-3 orange--text">Embedded</h1>
      <h1 class="font-weight-black display-3 mb-3">System Development</h1>
      <v-layout row wrap>
        <v-flex xs12 md4 class="text-xs-center">
          <v-icon size="50">fas fa-network-wired</v-icon>
          <p class="text-xs-center mt-2">few interconnections.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <v-icon>fas fa-search-minus</v-icon>
          <p class="text-xs-center">small in size.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <v-icon>fas fa-funnel-dollar</v-icon>
          <p class="text-xs-center">less expensive</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <v-icon>fas fa-shipping-fast</v-icon>
          <p class="text-xs-center">Fast Operation</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <v-icon>fas fa-car-battery</v-icon>
          <p class="text-xs-center">low power operation</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6 class="textStyle pa-3">
          <v-img :src="require('@/assets/bpa/esd.png')"></v-img>
        </v-flex>
        <v-flex xs12 md6 class="textStyle mb-3">
          <h2
            class="font-weight-light"
          >Embedded systems is a field derived through a combined study of software and hardware. Both aspects come together to create a functional targeting device that possesses the advantages of adaptability, speed, accuracy, reliability, power, and smaller size. Embedded systems possess a wide array of utility in the fields of mobile communication, electronic payment solutions, vending machines, robotic arm, and medical equipments. They can be designed for specific applications in each field and can thus fulfil specialized purposes.</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
