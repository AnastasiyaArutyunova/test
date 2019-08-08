<template>
  <div class="profile">
    <div>
      <div class="img">
        <img
          class="bgHome"
          src="https://www.look.com.ua/mini/201209/15830.jpg"/>
        <img class="avatar" :src="user.avatar" />
      </div>
      <div class="user_data">
        <h1>{{ user.name }}, {{ user.age }}</h1>
      </div>
      <ul class="user_info">
        <li>
          <a><strong>{{ user.games }}</strong
            ><span>Games</span></a>
        </li>
        <li>
          <a><strong>{{ user.download }}</strong
            ><span>Downloads</span></a>
        </li>
        <li>
          <a><strong>{{ user.like }}</strong><span>Likes</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style scoped>
.profile {
  margin: 20px auto;
  width: 100%;
}

.bgHome {
  width: 100%;
  height: 16em;
}
.avatar {
  background: #fff;
  width: 7em;
  height: 7em;
  padding: 0.25em;
  margin-top: -10em;
}
.user_data h1 {
  margin-top: 15px;
  color: #333;
  margin-bottom: 0;
}
.user_info {
  margin-bottom: 0;
  cursor: pointer;
  padding: 0;
  list-style: none;
  display: table;
  width: 100%;
}
.user_info li {
  margin: 0;
  padding: 0;
  width: 33.33334%;
  display: table-cell;
  text-align: center;
  border-left: 0.1em solid transparent;
  line-height: 1;
}

.user_info li a,
.user_info li strong {
  display: block;
}
.user_info li a {
  background-color: #f7f7f7;
  padding: 0.93em 0;
  color: #46494c;
}
.user_info li a strong,
.user_info li a span {
  font-weight: 600;
  line-height: 1;
}
.user_info li a strong {
  font-size: 2em;
}
.user_info li a span {
  color: #717a7e;
}
</style>
