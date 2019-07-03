<template>
  <div class="admin-nav mb-3">
    <v-list two-line subheader class="elevation-3">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0 purple darken-4" dark>
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

      <v-list-tile v-for="menuData in menuDatas" :key="menuData.title" route :to="menuData.route">
        <v-list-tile-avatar>
          <v-icon :class="[menuData.iconClass]">{{ menuData.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ menuData.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-badge color="red mr-4">
            <template v-slot:badge>
              <span v-if="unReadCount != 0 && menuData.badge">{{unReadCount}}</span>
            </template>
          </v-badge>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
  props: ["menuDatas", "unReadCount"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
