<template>
  <div class="cpad">
    <v-container fluid row wrap>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-right">
          <h1 class="font-weight-black display-3">Cross-Platform</h1>
          <h1 class="font-weight-black display-3 orange--text mb-3">App Development</h1>
        </v-flex>
        <v-flex xs12 md6 class="textStyle pa-3">
          <v-img :src="require('@/assets/bpa/cpad.png')"></v-img>
        </v-flex>
        <v-flex xs12 md6 class="textStyle mb-3">
          <h3>Cross-platform app development is a common approach among businesses today. It supports the development of custom mobile apps that are compatible across mobile platforms. Targeting many segments helps organizations to reach out to more users and, thus, increase the market share. It helps address the challenges for businesses, software vendors, and mobile development teams.</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.textStyle {
  text-align: justify;
}
</style>
