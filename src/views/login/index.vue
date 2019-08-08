<template>
  <div>
    <form @submit.prevent="submit" ref="form">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" v-model="form.name" />
      </p>
      <p>
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="form.password"/>
      </p>
      <p>
        <label for="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          name="confirm_password"
          type="password"
          v-model="form.confirm_password"/>
      </p>
      <p>
        <input type="submit" value="SUBMIT" id="submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: {
        name: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    submit() {
      if (
        this.form.name.trim() !== "" &&
        this.form.password.trim() !== "" &&
        this.form.confirm_password.trim() !== "" &&
        this.form.password === this.form.confirm_password
      ) {
        this.$store.dispatch("login", this.form).then(() => {
          this.$router.push("/profile");
        });
      }
    }
  }
};
</script>

<style scoped>
form {
  background: #fff;
  padding: 20px;
  max-width: 400px;
  margin: 100px auto 0;
  box-shadow: 0 0 1em #acacac;
  border-radius: 5px;
}
p {
  margin: 0 0 1em 0;
  position: relative;
}
label {
  display: block;
  font-size: 1em;
  margin: 0 0 0.5em;
  color: #333;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
}

input[type="text"],
input[type="password"] {
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  font-size: 1em;
  padding: 0.8em 0.5em;
  border-radius: 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background: #fff;
}
input[type="submit"] {
  background: #333;
  box-shadow: 0 3px 0 0 #1d3c6a;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1em;
  line-height: 1em;
  margin: 1em 0 0;
  outline: none;
  padding: 0.8em 0;
  text-shadow: 0 1px #68b25b;
}
</style>
