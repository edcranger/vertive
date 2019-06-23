<template >
  <div class="about white">
    <v-container>
      <h2 class="display-3 mb-5">
        <v-icon size="100" class="mr-4">fas fa-arrow-alt-circle-right</v-icon>About us
      </h2>
      <p>We are a full service software development and digital content creation company established to provide excellent and quality service and solutions to our existing and future clients. Today, we are living in an advanced world where innovation happens in a blink of an eye. Though the availability of technology is all around us, it is not being utilized well, for not enough software and web developers have been being utilized in creating software for a company.</p>

      <p>Then here we are..</p>

      <p>We save you time by providing you ideas, innovations and data structure to turn those ideas into reality with amazing working phases for your business.</p>

      <p
        class="mb-3"
      >Vertive Interactive caters the use of technology, particularized as creating web and software development for companies through its skilled team of programmers and software developers.</p>

      <p>Our value-added approach helps us to deliver quality projects that suits your business needs and that we incorporate state-of-art practices, techniques, and equipment.</p>
    </v-container>
    <v-container>
      <h1 class="display-3">
        <v-icon size="100" class="mr-4">fas fa-users</v-icon>Our Team
      </h1>
      <v-layout row wrap class="mt-5" data-aos="fade-up">
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
      <v-layout row wrap class="mt-5" data-aos="fade-up">
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

p {
  font-size: 1.3em;
}
</style>
