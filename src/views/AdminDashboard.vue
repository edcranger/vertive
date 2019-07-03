<template>
  <div class="admin-dashboard">
    <div class="hidden-sm-and-up"></div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <AdminNav :menuDatas="menuDatas" :unReadCount="unReadCount" />
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
import AdminNav from "@/components/AdminNav";
export default {
  name: "AdminDashboard",
  components: {
    LogoutDialog,
    AdminNav
  },
  data() {
    return {
      unReadCount: 0,
      message: null,
      selected: [2],
      menuDatas: [
        {
          title: "Dashboard",
          route: "/adminDashboard",
          color: "dark",
          icon: "dashboard",
          iconClass: "indigo white--text"
        },
        {
          title: "Messages",
          route: "/adminDashboard/messages",
          color: "dark",
          badge: true,
          icon: "assignment",
          iconClass: "blue white--text"
        },
        {
          title: "Make Admin",
          route: "/adminDashboard/makeAdmin",
          color: "success",
          icon: "call_to_action",
          iconClass: "amber white--text"
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
