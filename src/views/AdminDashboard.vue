<template>
  <div class="admin-dashboard">
    <v-layout justify-space-around class="pa-1 grey lighten-4 navbar2">
      <router-link to="/adminDashboard" class="mt-1">
        <a href="#">
          <v-icon large color="blue darken-2">fas fa-list</v-icon>
        </a>
      </router-link>
      <v-btn flat app v-for="(item, index) in items" route :to="item.route" :key="index">
        <v-icon large color="blue darken-2">{{ item.icon }}</v-icon>
      </v-btn>

      <v-btn flat depressed app @click="logOut">
        <v-icon large color="red darken-2">fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-layout>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3 class="mb-5">
          <v-card height="200" class="elevation-0">
            <v-navigation-drawer v-model="drawer" permanent absolute>
              <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-toolbar>

              <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="item in items" :key="item.title">
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
          </v-card>
          <!-- <v-navigation-drawer>
            <v-toolbar flat class="purple darken-4">
              <v-list>
                <v-list-tile class>
                  <v-list-tile-title class="white--text">Menu</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list dense class="pt-0">
              <v-list-tile v-for="item in items" route :to="item.route" :key="item.title">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <p>{{item.title}}</p>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile route to="#" @click="logOut">
                <v-list-tile-action>
                  <v-icon>fas fa-sign-out-alt</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>-->
        </v-flex>
        <v-flex xs12 md9 class="mx-auto">
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  data() {
    return {
      message: null,
      items: [
        {
          title: "Messages",
          route: "/adminDashboard/messages",
          icon: "fas fa-bell"
        },
        {
          title: "Make Admin",
          route: "/adminDashboard/makeAdmin",
          icon: "fas fa-user-lock"
        }
      ]
    };
  },
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
