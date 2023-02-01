import {defineComponent} from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView';
import {fetchMeetupById} from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  data() {
    return {
      loading: true,
      error: false,
      meetup: undefined,
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(newVal) {
        this.loading = true;
        this.meetup = undefined;

        fetchMeetupById(newVal)
          .then((meetup) => {
            this.error = false;
            this.meetup = meetup;
          }).catch((e) => {
          this.error = e.message;
        }).finally(() => {
          this.loading = false;
        });
      }
    },
  },

  template: `
    <div class="page-meetup">
    <MeetupView v-if="meetup" :meetup="meetup"/>

    <UiContainer v-else-if="loading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>

    <UiContainer v-else-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>
    </div>`,
});
