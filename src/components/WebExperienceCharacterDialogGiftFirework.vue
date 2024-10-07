<template>
  <div>
    <div class="container">
      <div class="line-container" v-for="i in 800">
        <div class="line"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
$width: 22vw;
$animation-duration: 1.5s;

.line-container {
  position: absolute;
  top: 50%;
  right: 50%;
  height: 0;

  .line {
    width: 100%;
    height: 0.5px;
    position: absolute;

    animation-name: firework;
    animation-duration: $animation-duration;
    animation-timing-function: cubic-bezier(0.26, 0.83, 0.26, 0.83);
    // animation-iteration-count: infinite; // TEST
    animation-delay: 400ms;
  }

  .dot {
    border-radius: 50%;
    position: relative;

    animation-name: fireworkflame;
    animation-duration: $animation-duration;
    // animation-iteration-count: infinite; // TEST
    animation-delay: 400ms;
  }
}

.line-container {
  transform-origin: right;

  @for $i from 1 through 800 {
    &:nth-child(#{$i}) {
      $r: random(360) * 1deg;
      transform: rotate($r);

      $w: (
        random(82) + 18) / 100;
      width: $width * $w;

      $n: random(2
      );
    $dot-width: 2px;

    @if $n ==1 {
      $dot-width: $dot-width * $w;

      .line,
      .dot {
        opacity: $w;
      }
    }

    @else if $n ==2 {
      $dot-width: $dot-width * (2 - $w);
    }

    .dot {
      top: -$dot-width / 2;
      height: $dot-width;
      width: $dot-width;
    }
  }
}
}

@keyframes firework {

  0%,
  100% {
    background-color: transparent;
    box-shadow: 0;
    left: 100%;
    width: 0%;
  }

  5% {
    background-color: darkorange;
    box-shadow: 0 0 1em darkred;
    left: 40%;
    width: 60%;
  }

  50% {
    background-color: darkorange;
    box-shadow: 0 0 1em darkred;
    left: 0;
    width: 0%;
  }
}

@keyframes fireworkflame {

  0%,
  15%,
  100% {
    background-color: transparent;
  }

  50% {
    background-color: salmon;
  }
}
</style>
