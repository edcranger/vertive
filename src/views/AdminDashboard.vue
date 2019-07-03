<template>
  <div class="admin-dashboard">
    <v-layout justify-space-around class="pa-1 amber lighten-4 navbar2">
      <router-link to="/adminDashboard" class="mt-2">
        <a href="#">
          <v-icon large color="blue darken-2">fas fa-list</v-icon>
        </a>
      </router-link>
      <v-btn
        large
        flat
        app
        v-for="(menuData, index) in menuDatas"
        route
        :to="menuData.route"
        :key="index"
      >
        <v-icon large color="blue darken-2">{{ menuData.icon }}</v-icon>
      </v-btn>
      <LogoutDialog />
    </v-layout>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <v-card height="200" class="elevation-0 hidden-sm-and-down">
            <v-navigation-drawer permanent absolute>
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

                <v-list-tile v-for="menuData in menuDatas" :key="menuData.title">
                  <v-list-tile-action>
                    <v-badge color="red">
                      <template v-slot:badge>
                        <span v-if="unReadCount != 0">{{unReadCount}}</span>
                      </template>
                      <v-icon>{{ menuData.icon }}</v-icon>
                    </v-badge>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ menuData.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-flex>
        <v-flex xs12 md9 class="mx-auto">
          <router-view
            :adminDatas="adminDatas"
            @clickRead="changeToRead"
            @deleteMes="deleteMessage"
          ></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { fb } from "../firebase";
import LogoutDialog from "@/components/LogoutDialog";
export default {
  name: "AdminDashboard",
  components: {
    LogoutDialog
  },
  data() {
    return {
      unReadCount: 0,
      message: null,
      selected: [2],
      menuDatas: [
        {
          title: "Messages",
          route: "/adminDashboard/messages",
          icon: "fas fa-envelope-square"
        },
        {
          title: "Make Admin",
          route: "/adminDashboard/makeAdmin",
          icon: "fas fa-user-lock"
        }
      ],
      adminDatas: [
        {
          id: 1,
          unRead: false,
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          id: 2,
          unRead: true,
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          id: 3,
          unRead: true,
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          id: 4,
          unRead: false,
          action: "12 hr",
          headline: "Birthday gift",
          title: "Trevor Hansen",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          id: 5,
          unRead: true,
          action: "18hr",
          headline: "Recipe to try",
          title: "Britta Holt",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    };
  },
  methods: {
    //this will get the emitted id from viewMessage that was passed to the router
    changeToRead(message) {
      this.adminDatas.forEach((menu, index) => {
        if (menu.id === message) {
          menu.unRead = false;
        }
      });
    },
    deleteMessage(data) {
      this.adminDatas = this.adminDatas.filter(admin => {
        return admin.id != data;
      });
    },
    countUnread() {
      this.unReadCount = 0;
      this.adminDatas.forEach(data => {
        if (data.unRead) {
          this.unReadCount++;
        }
      });
    }
  },
  watch: {
    adminDatas: {
      handler(val) {
        this.countUnread();
      },
      deep: true
    }
  },
  created() {
    this.countUnread();
  }
};
</script>

<style>
</style>
