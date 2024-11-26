<template>
  <div>
    <!-- FORMAT IMAGE -->
    <v-row no-gutters class="vsk-mention-legal">
      <v-col cols="12" class="vsk-mention-legal--container">
        <img class="d-flex d-md-none" src="/mention-legale/small_screen_1080x1920.png" loading="lazy" />
        <img class="d-none d-md-flex d-lg-none" d-md-inline-block src="/mention-legale/medium_screen_1080x1350.png"
          loading="lazy" />
        <img class="d-none d-lg-flex" src="/mention-legale/large_screen_1920x1080.png" loading="lazy" />
      </v-col>
    </v-row>

    <!-- FORMAT RAW TEXT -->
    <!-- <v-row no-gutters class="vsk-mention-legal">
      <v-col cols="9" class="vsk-mention-legal--description">
        <div class="vsk-mention-legal--description--container">
          <p>les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction...
          </p>
          <p>retrouvez nos conseils sur joueurs-info-service.fr</p>
          <p>(09-74-75-13-13, appel non surtaxé)</p>
        </div>
      </v-col>
      <v-col cols="3" class="vsk-mention-legal--illustration">
        <img src="/logo/gouvernement.svg" loading="lazy" />
      </v-col>
    </v-row> -->
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-mention-legal {

  // FORMAT IMAGE
  position: fixed;
  top: 0;
  left: 0;
  height: 15%;
  width: 100%;

  .vsk-mention-legal--container {
    img {
      width: 100%;

      @media (min-width: 1280px) {
        max-width: 1920px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  // FORMAT RAW TEXT
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   height: 15%;
  //   min-height: 180px;
  //   width: 100%;
  //   background-color: rgb(246, 206, 73);

  //   .vsk-mention-legal--description {
  //     color: $colorBlack;
  //     font-size: 1.5vh;
  //     font-weight: 700;
  //     text-transform: uppercase;

  //     position: relative;

  //     .vsk-mention-legal--description--container {
  //       position: absolute;
  //       top: 50%;
  //       transform: translateY(-50%);

  //       padding-left: $radiusValue*4;
  //       padding-right: $radiusValue*4;
  //     }
  //   }

  //   .vsk-mention-legal--illustration {
  //     position: relative;

  //     img {
  //       position: absolute;
  //       left: 50%;
  //       top: 50%;
  //       transform: translate(-50%, -50%);

  //       padding: $radiusValue*2 $radiusValue*4;
  //       width: 100%;
  //       height: auto;
  //       max-height: 100%;
  //     }
  //   }
}
</style>