<template>
  <div class="reservation-wrapper">
    <div class="reservation-steps">
      <ul>
        <li v-for="step in steps" :key="step.id">
          <span v-text="step.id"></span>
          <span v-text="step.title"></span>
        </li>
      </ul>
    </div>
    <div class="reservation-container">
      <transition name="fade" mode="out-in">
        <component 
          v-for="panel in steps" 
          :key="panel.id" 
          :is="panel.component" 
          @change:message="changeMessage"
          v-if="activePanel === panel.id" 
          :message="message" />
      </transition>
    </div>
  </div>
</template>

<script>
import MoreInfoPanel from '@/components/reservation/panels/MoreInfoPanel.vue';
import UserInfoPanel from '@/components/reservation/panels/UserInfoPanel.vue';
import SummaryPanel from '@/components/reservation/panels/SummaryPanel.vue';

export default {
  name: 'home',
  components: {
    MoreInfoPanel,
    UserInfoPanel,
    SummaryPanel,
  },
  data: () => {
    return {
      message: 'This is a message',
      activePanel: -1,
      steps: [
        {
          id: 1,
          title: 'User Info',
          component: 'UserInfoPanel',
        },
        {
          id: 2,
          title: 'More Info',
          component: 'MoreInfoPanel',
        },
        {
          id: 3,
          title: 'Summary',
          component: 'SummaryPanel',
        },
      ]
    }
  },

  created() {
    this.activePanel = this.steps[0].id;
  },

  methods: {
    changeMessage: function(message) {
      this.message = message;
    },
  }
};
</script>

<style>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}
</style>

