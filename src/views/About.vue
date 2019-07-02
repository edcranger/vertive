<template >
  <div class="about white mb-5">
    <v-container>
      <h2 class="display-3 mb-5">About us</h2>
      <v-layout row wrap class="mb-4">
        <v-flex xs12 md6 class="mb-5" data-aos="fade-right" data-aos-duration="1000">
          <v-img :src="require('@/assets/team/team.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md6 class="pa-3" data-aos="fade-left" data-aos-duration="1000">
          <h1 class="mb-2">What we do</h1>
          <p>We are a full service software development and digital content creation company established to provide excellent and quality service and solutions to our existing and future clients. Today, we are living in an advanced world where innovation happens in a blink of an eye. Though the availability of technology is all around us, it is not being utilized well, for not enough software developers and digital writers have been being utilized in creating software and content for a company.</p>
          <br />
          <h1
            data-aos="zoom-in"
            data-aos-duration="3000"
            class="font-weight-thin.font-italic"
          >"Then here we are, entering the scene."</h1>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-3">
        <v-flex xs12 md6 class="mb-5 pa-3" data-aos="fade-right" data-aos-duration="1000">
          <p>We save you time by providing you ideas, innovations and data structures to turn those plans into reality with amazing working phases for your business.</p>

          <p
            class="mb-3"
          >Vertive Interactive caters the use of technology, particularized as creating web and software development for companies through its skilled team of programmers and software developers.</p>

          <p>Our value-added approach helps us to deliver quality projects that suits your business needs and that we incorporate state-of-art practices, techniques, and equipment.</p>
        </v-flex>
        <v-flex xs12 md6 class="mb-5">
          <v-img
            :src="require('@/assets/team/time.svg')"
            data-aos="zoom-in"
            data-aos-duration="1000"
          ></v-img>
        </v-flex>
      </v-layout>

      <h1 class="display-3">Our Team</h1>
      <v-layout row wrap class="pa-5 mt-5">
        <v-flex xs12 md6 class="mb-5" data-aos="fade-up">
          <v-layout row wrap>
            <v-flex xs12>
              <div class="text-xs-center">
                <v-avatar class="text-xs-center" size="300" color="grey lighten-4">
                  <img :src="require('@/assets/team/edison.jpg')" alt="avatar" />
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
        <v-flex xs12 md6 data-aos="fade-up">
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-avatar class="text-xs-center" size="300" color="grey lighten-4">
                    <img :src="require('@/assets/team/teshi.jpg')" alt="avatar" />
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
        </v-flex>
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
  text-align: justify;
}
</style>
