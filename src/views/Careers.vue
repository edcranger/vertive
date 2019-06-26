<template>
  <div class="careers white">
    <v-container>
      <v-img height="300" :src="require('@/assets/services/join.png')" contain></v-img>
      <p
        class="text-xs-center subheading"
        data-aos="zoom-out-up"
      >We are looking for talented individuals for these job posts</p>
      <v-container class="mt-5">
        <v-layout row wrap v-for="(item,index) in items" :key="index" class="job">
          <v-flex xs12>
            <h1 class="text-xs-center" data-aos="zoom-in-right">{{item.title}}</h1>
            <v-img height="600" :src="item.pic" contain data-aos="zoom-in-left"/>
          </v-flex>
          <v-flex xs12>
            <v-layout
              row
              wrap
              v-for="(skill,index) in item.skills"
              :key="index"
              data-aos="zoom-out-up"
            >
              <v-flex xs1>
                <v-icon class="mr-2">star</v-icon>
              </v-flex>
              <v-flex xs11 class="pa-1">
                <span>{{skill}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Careers",
  data() {
    return {
      rating: 5,
      items: [
        {
          title: "Front End Developer",
          pic: require("@/assets/staff/logic2.png"),
          skills: [
            "Must have proficiency with Vue, ES6 and Vuetify.",
            "Well versed in HTML5, CSS3/SASS, ES6 and Git/Version Control.",
            "Must have Adobe XD or any UI/UX background.",
            "Familiarity with NodeJs, Express, Ionic , NativeScript and Electron is a plus.",
            "Willing to undergo skills enhancement.",
            "Can work remotely (Work at Home/Client's Office).",
            "Related work experience is an advantage, but as long as you have a Portfolio/Github Repository or previous Projects to show then you are qualified to apply with the post."
          ]
        },
        {
          title: "Back End Developer",
          pic: require("@/assets/staff/artist1.png"),
          skills: [
            "Must have proficiency with Nodejs, Express and MongoDB.",
            "Well versed in ES6 and Git/Version Control.",
            "With In depth knownledge of RESTful API or RESTful Web Services.",
            "Familiarity with Google Firebase, GraphQL and SQL is a plus.",
            "Reporting—generating analytics and statistics like system reports.",
            "Security settings and hack prevents.",
            "Can work remotely (Work at Home/Client's Office)",
            "Related work experience is an advantage, but as long as you have a Portfolio/Github Repository or previous Projects to show then you are qualified to apply with the post."
          ]
        },
        {
          title: "Graphics Designer",
          pic: require("@/assets/staff/artist2.png"),
          skills: [
            "Must have proficiency with Web Design, Digital Media and Graphic Design.",
            "Well versed in Composition, Typography and Image editing.",
            "With In depth skills of designer tools/applications (Adobe Photoshop/Illustrator, Adobe XD)",
            "Familiarity with web coding and version control is a plus.",
            "Reporting—generating analytics and statistics like system reports.",
            "Can work remotely (Work at Home/Client's Office)",
            "Related work experience is an advantage."
          ]
        },
        {
          title: "Subject Matter Experts",
          pic: require("@/assets/staff/sme.png"),
          skills: [
            "Machine Learning / Artificial Intelligence Development -  Professionals with expertise of Linear Algebra, Multivariable Calculus and Statistics",
            "Medical Field Experts:",
            "Professionals such as Nurses, Pharmacists, Doctors Etc.. ",
            "Willing to learn about Data Structures and Innovation patterns."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.applyNow {
  position: absolute;
  bottom: 0;
  margin-bottom: 2%;
}
.careers {
  margin-bottom: 11rem;
}

.artist {
  height: 70%;
  width: 70%;
}

p {
  text-align: justify;
}

.job {
  margin-bottom: 10em;
}
</style>
