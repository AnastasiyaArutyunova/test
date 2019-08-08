<template>
  <div id="app">
    <nav>
      <router-link
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        class="menu_link">{{ link.title }}</router-link
      >
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
    import { mapGetters } from 'vuex'
export default {

  computed: {
      ...mapGetters([
          'getId',
      ]),
    links() {
          if (this.getId ) {
        return [
          {
            title: "Games",
            url: "/"
          },
          {
            title: "Profile",
            url: "/profile"
          }
        ];
      } else {
        return [
          {
            title: "Games",
            url: "/"
          },
          {
            title: "Login",
            url: "/login"
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
}
nav {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #333;
  background-image: -o-linear-gradient(bottom, #222222 0%, #555555 100%);
  background-image: -moz-linear-gradient(bottom, #222222 0%, #555555 100%);
  background-image: -webkit-linear-gradient(bottom, #222222 0%, #555555 100%);
  /*background-image: -ms-linear-gradient(bottom, #222222 0%, #555555 100%);*/
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, #222222),
    color-stop(1, #555555)
  );
  background-image: linear-gradient(bottom, #222222 0%, #555555 100%);
}
.menu_link {
  text-decoration: none;
  border-right: 1px solid #222;
  border-left: 1px solid #555;
  color: #ccc;
  /*display: block;*/
  font-size: 16px;
  height: 50px;
  /*overflow: hidden;*/
  /*text-align: center;*/
  /*text-shadow: 0 -1px 0 #000;*/
  /* -webkit-box-shadow: inset 0 0 10px transparent;*/
  /* -moz-box-shadow: inset 0 0 10px transparent;*/
  float: left;
  position: relative;
  padding: 0 15px;
  /*width: 20%;*/
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
main{
  width: 100%;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px){
  main{
    max-width: 1140px;
    width: auto;
  }
}
@media (max-width: 1199px) and (min-width: 992px){
  main {
    max-width: 960px;
    width: auto;
  }
}
@media (max-width: 991px) and (min-width: 768px){
  main {
    max-width: 720px;
    width: auto;
  }
}
@media (max-width: 767px) and (min-width: 576px){
  main {
    width: auto;
    max-width: 540px;
  }
}
@media (max-width: 575px) and (min-width: 320px){
  main {
    width: auto;
    max-width: 400px;
  }
}
</style>
