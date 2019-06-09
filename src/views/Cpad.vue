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
        <v-flex xs12 md6 class="textStyle mb-3 mt-4">
          <h3>Cross-platform app development is a common approach among businesses today. It supports the development of custom mobile apps that are compatible across mobile platforms. Targeting many segments helps organizations to reach out to more users and, thus, increase the market share. It helps address the challenges for businesses, software vendors, and mobile development teams.</h3>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center row fill-height wrap class="my-5">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text
            class="headline font-weight-bold"
          >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

          <v-card-actions>
            <v-list-tile class="grow">
              <v-list-tile-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Evan You</v-list-tile-title>
              </v-list-tile-content>

              <v-layout align-center justify-end>
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-layout>
            </v-list-tile>
          </v-card-actions>
        </v-card>
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
