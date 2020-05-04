<template>
  <section class="offer-preview-container">
    <div class="offers-preview">
      <span>{{this.offer.from.brandName}}</span>
      <span>{{this.offer.subject}}</span>
      <span>{{this.offer.createdAt / 1000 | date}}</span>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../services/event.bus.service.js";
export default {
  props: {
    offer: Object
  }
};
</script>