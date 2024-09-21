<template>
  <div id="user_infos" v-if="route.name !== 'home'">
    <v-row no-gutters class="pl-5 pr-2 pt-5">
      <v-col v-for="userInfo in userInfos" :cols="userInfo.cols" class="px-2 user_infos-content">
        <div class="user_infos-content_container">
          <v-progress-linear :model-value="userInfo.total ? userInfo.value / userInfo.total * 100 : ''"
            :color="userInfo.color" class="user_infos-progress"></v-progress-linear>

          <v-icon :icon="`mdi-${userInfo.iconMdi}`" :color="userInfo.color" class="user_infos-icon"
            :class="`user_infos-icon-${userInfo.iconPosition}`"></v-icon>

          <span v-if="userInfo.level" class="user_info-level">{{ userInfo.level }}</span>

          <span v-if="userInfo.value && userInfo.total" class="user_info-value-with-total">{{ userInfo.value }}/{{
            userInfo.total
            }}</span>
          <span v-else-if="userInfo.value" class="user_info-value">{{ userInfo.value }}</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();

const userInfos = ref([
  {
    iconMdi: 'decagram',
    iconPosition: 'left',
    color: 'blue',
    value: 3651,
    total: 5000,
    level: 11,
    cols: 4
  },
  {
    iconMdi: 'gold',
    iconPosition: 'right',
    color: 'amber',
    value: 5672,
    cols: 3
  },
  {
    iconMdi: 'diamond-stone',
    iconPosition: 'right',
    color: 'green',
    value: 26,
    cols: 3
  },
])
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

#user_infos {
  position: fixed;
  top: 0;
  width: 100vw;

  .user_infos-content {
    .user_infos-content_container {
      position: relative;

      .user_infos-icon {
        position: absolute;
        top: 50%;
        text-shadow: $shadow;

        &.user_infos-icon-left {
          font-size: 34px;
          left: 0;
          transform: translate(-50%, -50%);
        }

        &.user_infos-icon-right {
          font-size: 28px;
          right: 0;
          transform: translate(50%, -50%);
        }
      }

      .user_infos-progress {
        height: 20px !important;
        border-radius: 5px;
        box-shadow: $shadow;
      }

      .user_info-level {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: 900;
        color: white;
      }

      .user_info-value-with-total,
      .user_info-value {
        position: absolute;
        width: 100%;
        top: 0;
        font-size: 14px;
        font-weight: 700;
        color: white;
        text-shadow: $shadow;
      }

      .user_info-value-with-total {
        text-align: center;
      }

      .user_info-value {
        right: 15px;
        text-align: right;
      }

    }

  }

}
</style>