<template>
  <UiCalendarView>
    <template #cell="{ date }">
      <template v-if="meetupsByDate[date.toDateString()]">
        <UiCalendarEvent
          v-for="meetup in meetupsByDate[date.toDateString()]"
          :key="meetup.id"
          tag="a"
          :href="`/meetups/${meetup.id}`"
          class="calendar-event"
        >
          {{ meetup.title }}
        </UiCalendarEvent>
      </template>
    </template>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  computed: {
    meetupsByDate: function () {
      let result = {};

      for (const meetup of this.meetups) {
        const index = new Date(meetup.date).toDateString();
        if (result[index] && result[index].length) {
          result[index].push(meetup);
        } else {
          result[index] = [meetup];
        }
      }

      return result;
    },
  },
};
</script>

<style scoped></style>
