<template>
  <div>
    <v-row no-gutters class="vsk-mention-legal">
      <v-col cols="9" class="vsk-mention-legal--description">
        <div class="vsk-mention-legal--description--container">
          <p>les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction...
          </p>
          <p>retrouvez nos conseils sur joueurs-info-service.fr</p>
          <p>(09-74-75-13-13, appel non surtaxé)</p>
        </div>
      </v-col>
      <v-col cols="3" class="vsk-mention-legal--illustration">
        <img src="/logo/logo_gouvernement.svg" loading="lazy" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

// ANIMATION FADE


.vsk-mention-legal {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 15%;
  min-height: 180px;
  width: 100%;
  background-color: rgb(246, 206, 73);

  .vsk-mention-legal--description {
    color: $colorBlack;
    font-size: 1.5vh;
    font-weight: 700;
    text-transform: uppercase;

    position: relative;

    .vsk-mention-legal--description--container {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      padding-left: $radiusValue*4;
      padding-right: $radiusValue*4;
    }
  }

  .vsk-mention-legal--illustration {
    position: relative;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      padding: $radiusValue*2 $radiusValue*4;
      width: 100%;
      height: auto;
      max-height: 100%;
    }
  }
}
</style>

<style lang="scss"></style>
