<template>
  <section v-if="loggedInUser" class="dashboard">
    <div class="dashboard-image-container" v-if="this.loggedInUser">
      <img :src="this.loggedInUser.profilePhoto.regular" alt="dash-avatar" class="dash-avatar" />
    </div>
    <div v-if="loggedInUser" class="dashboard-socials-info">
      <h1>{{this.fullName}}</h1>
      <h3>{{this.email}}</h3>
      <h3>Age: {{this.age}}</h3>
      <ul class="clean-list" v-for="(social, idx) in loggedInUser.socials" :key="idx">
        <li>
          <span>{{social.type}} :</span>
          {{(social.menFollowers + social.womenFollowers).toLocaleString()}}
          followers
        </li>
      </ul>
      <div class="dash-stats">
        <ul class="clean-list tags">
          <li class="influencer-tag" v-for="(tag, idx) in loggedInUser.tags" :key="idx">{{tag}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import moment from "moment";
export default {
  name: "dash-board",
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    this.getLoggetInUser();
  },
  computed: {
    fullName() {
      return this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
    },
    age() {
      return moment().diff(
        new Date(+this.loggedInUser.dateOfBirth * 1000),
        "years",
        false
      );
    },
    dateOfBirth() {
      return this.loggedInUser.dateOfBirth;
    },
    socials() {
      return this.loggedInUser.socials;
    },
    email() {
      return this.loggedInUser.email;
    }
  },
  methods: {
    async getLoggetInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
      if (!this.loggedInUser) {
        this.loggedInUser = await this.$store.dispatch("getLoggedInUser");
      }
    }
  }
};
</script>

