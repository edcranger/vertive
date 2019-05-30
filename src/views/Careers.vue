<template>
  <v-container class="careers">
    <h1 class="display-3">We are looking for...</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="pa-1">
          <v-card color="indigo" class="white--text" min-height="500px">
            <v-card-title primary-title>
              <div>
                <div class="headline mb-4">
                  <i class="fas fa-laptop-code mx-2"></i>
                  <strong>Front-End Developer</strong>
                </div>
                <ul>
                  <li>
                    Must have proficiency with
                    <strong>Vue, ES6 and Vuetify</strong>.
                  </li>
                  <li>Well versed in HTML5, CSS3/SASS, ES6 and Git/Version Control.</li>

                  <li>Must have Adobe XD or any UI/UX background.</li>
                  <li>Familiarity with NodeJs, Express, Ionic , NativeScript and Electron is a plus.</li>
                  <li>Willing to undergo skills enhancement</li>
                  <li>
                    <strong>Can work remotely (Work at Home/Client's Office)</strong>
                  </li>
                  <li>Related work experience is an advantage, but as long as you have a Portfolio/Github Repository or previous Projects to show then you are qualified to apply with the post.</li>
                </ul>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark class="applyNow">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 class="pa-1">
          <v-card color="orange" class="black--text" min-height="500" max-height="470" contain>
            <v-card-title primary-title>
              <div>
                <div class="headline mb-4">
                  <i class="fas fa-server mx-2"></i>
                  <strong>Back-End Developer</strong>
                </div>
                <ul>
                  <li>
                    Must have proficiency with
                    <strong>Nodejs, Express and MongoDB</strong>
                  </li>
                  <li>Well versed in ES6 and Git/Version Control.</li>
                  <li>With In depth knownledge of RESTful API or RESTful Web Services.</li>
                  <li>Familiarity with Google Firebase, GraphQL and SQL is a plus.</li>
                  <li>Reporting—generating analytics and statistics like system reports</li>
                  <li>Security settings and hack prevents</li>
                  <li>
                    <strong>Can work remotely (Work at Home/Client's Office)</strong>
                  </li>
                  <li>Related work experience is an advantage, but as long as you have a Portfolio/Github Repository or previous Projects to show then you are qualified to apply with the post.</li>
                </ul>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark class="applyNow">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="pa-1">
          <v-card color="orange" class="black--text" min-height="380px" contain>
            <v-card-title primary-title>
              <div>
                <div class="headline mb-4">
                  <i class="fas fa-paint-brush mx-2"></i>
                  <strong>Graphics Designer</strong>
                </div>
                <ul>
                  <li>
                    Must have proficiency with
                    <strong>Web Design, Digital Media and Graphic Design</strong>
                  </li>
                  <li>Well versed in Composition, Typography and Image editing</li>

                  <li>With In depth skills of designer tools/applications (Adobe Photoshop, Adobe XD)</li>
                  <li>Familiarity with web coding and version control is a plus.</li>

                  <li>
                    <strong>Can work remotely (Work at Home/Client's Office)</strong>
                  </li>
                  <li>Related work experience is an advantage.</li>
                </ul>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark class="applyNow">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 class="pa-1">
          <v-card color="indigo" class="white--text" min-height="380px">
            <v-card-title primary-title>
              <div>
                <div class="headline mb-4">
                  <i class="fas fa-laptop-code mx-2"></i>
                  <strong>Subject Matter Experts</strong>
                </div>
                <ul>
                  <li>
                    <strong>Machine Learning / Artificial Intelligence Development:</strong>
                    <br>Professionals with expertise of Linear Algebra, Multivariable Calculus and Statistics
                  </li>
                  <li>
                    <strong>Medical Field Experts</strong>
                    <br>Professionals such as Nurses, Pharmacists, Doctors Etc..
                    <br>Willing to learn about Data Structures and Innovation patterns.
                  </li>
                </ul>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark class="applyNow">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <h4>
        Submit your resume to
        <a href="#">edisonocampo.eo@gmail.com</a> or
        <a href="#">vertiveinteractive@gmail.com</a> and indicate the position in the subject line.
      </h4>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Careers"
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
</style>
