<template >
  <div class="about white">
    <v-container>
      <h2 class="display-3 mb-5">About us</h2>
      <p>Today, we are living in an advanced world where innovation happens in a blink of an eye. Most of the people are now relying on technology to make their work accessible and to acquire/transfer more information easily through software and websites.</p>

      <p>Though the availability of technology is all around us, it is not being utilized well, for not enough software and web developers have been being utilized in creating software for a company.</p>

      <p
        class="mb-3"
      >Finally, Vertive Interactive caters the use of technology, particularized as creating web and software development for companies through its skilled team of programmers and software developers.</p>
    </v-container>
    <v-container>
      <h1 class="display-3">Our Team</h1>
      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="text-xs-center">
                <v-avatar class="text-xs-center" size="300" color="grey lighten-4">
                  <img :src="require('@/assets/team/edison.jpg')" alt="avatar">
                </v-avatar>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="text-xs-center" style="margin-top: 1em;">
                <h1>Edison Ocampo</h1>
                <h3>Founder and CEO</h3>
                <h4>Software Developer</h4>
                <h3 class="display-2 font-weight-thin">"Greatness from small beginnings"</h3>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6 style="margin-top:5em;"></v-flex>
      </v-layout>
      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="text-xs-center">
                <v-avatar class="text-xs-center" size="300" color="grey lighten-4">
                  <img :src="require('@/assets/team/teshi.png')" alt="avatar">
                </v-avatar>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="text-xs-center" style="margin-top: 1em;">
                <h1>Teshi Alejo</h1>
                <h3>CCO</h3>
                <h4>UI/UX and Graphic Design</h4>
                <h3 class="display-2 font-weight-thin">"Every artist was first an amateur"</h3>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6 style="margin-top:5em;"></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  margin-bottom: 11em;
}
</style>
