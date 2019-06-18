<template>
  <div class="esd pa-4">
    <v-container fluid class="bpa-content elevation-2 white">
      <p class="servicesTitle font-weight-black">
        <span class="orange--text">Embedded</span>
        <br>Systems Development
      </p>>
      <v-layout row wrap>
        <v-flex xs12 class="textStyle pa-3">
          <v-img :src="require('@/assets/bpa/esd.png')"></v-img>

          <div class="text-xs-center mt-2">
            <v-btn
              large
              color="cyan"
              class="text-xs-center"
              dark
              @click.stop="dialog = true"
            >Learn More</v-btn>
          </div>

          <v-dialog v-model="dialog" max-width="1090">
            <v-card class="pa-2">
              <v-card-title class="headline">
                <h3>Embedded Systems Development</h3>
              </v-card-title>

              <v-card-text>Embedded systems is a field derived through a combined study of software and hardware. Both aspects come together to create a functional targeting device that possesses the advantages of adaptability, speed, accuracy, reliability, power, and smaller size. Embedded systems possess a wide array of utility in the fields of mobile communication, electronic payment solutions, vending machines, robotic arm, and medical equipments. They can be designed for specific applications in each field and can thus fulfil specialized purposes.</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex xs12 class="textStyle mb-3">
          <h2
            class="subheading"
          >An embedded system is a computer system with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints. It is embedded as part of a complete device often including hardware and mechanical parts. Embedded systems control many devices in common use today.</h2>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-space-around row wrap fill-height class="mt-4">
        <v-flex xs6 md2 class="text-xs-center" v-for="(item, index) in items" :key="index">
          <v-icon size="60" :color="item.color">{{item.icon}}</v-icon>
          <p class="text-xs-center mt-2">{{item.title}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Esd",
  data() {
    return {
      dialog: false,
      items: [
        {
          icon: "fas fa-network-wired",
          title: "Few interconnections",
          color: "red"
        },
        {
          icon: "fas fa-search-minus",
          title: "Small in size.",
          color: "primary"
        },
        {
          icon: "fas fa-funnel-dollar",
          title: "Small in size",
          color: "green"
        },
        {
          icon: "fas fa-shipping-fast",
          title: "Fast Operation",
          color: "orange"
        },
        {
          icon: "fas fa-car-battery",
          title: "Low Power Operation",
          color: "yellow"
        }
      ]
    };
  }
};
</script>

<style scoped>
.textStyle {
  text-align: center;
}

.fontc {
  font-size: calc(0.7vw + 0.7vh);
  text-align: justify;
}

p {
  text-align: justify;
}

.servicesTitle {
  font-size: calc(3vw + 1vh);
  text-align: end;
}
</style>
