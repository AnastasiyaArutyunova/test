<template>
  <div class="container">
    <div v-for="game in games" class="card">
      <div class="card_img"><img :src="game.photo" width="100%" /></div>
      <div class="card_content">
        <h3 class="title">{{ game.name }}</h3>
        <span class="left price">{{ game.price }}&#8381; </span>
          <router-link :to="'/detail/'+game.id">
        <button class="right btn" >Play</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      games: [
        {
          photo:
            "http://hqwallpapersgalaxy.com/Uploads/9-3-2018/25041/thumb-johnny-depp-2017-ratchett.jpg",
          name: "Полярный экспресс",
          price: 564,
            id:1
        },
        {
          photo:
            "https://cdn.suwalls.com/wallpapers/movies/kai-47-ronin-26072-400x250.jpg",
          name: "Троя",
          price: 999,
            id:2
        },
        {
          photo:
            "https://cod45.ru/wp-content/uploads/2017/12/d1af15ee7b301f7f0ea08223d2266405.jpg",
          name: "Терминатор",
          price: 60,
            id:3
        },
        {
          photo: "https://thumb.thewallpapers.org/23/400_dear_john-002.jpg",
          name: "Ромео и Джульетта",
          price: 125,
            id:4
        },
        {
          photo:
            "http://www.moviewallpapers101.com/wallpapers/Hollywood/2014/The_Maze_Runner/2014/9/2/tn1_The_Maze_Runner_Movie_Wallpaper_27_gbtkc.jpg",
          name: "Лабиринт",
          price: 345,
            id:5
        },
        {
          photo:
            "http://www.moviewallpapers101.com/wallpapers/Hollywood/2014/The_Legend_of_Hercules/2014/1/8/tn1_The_Legend_of_Hercules_Movie_Wallpaper_9_dvusn.jpg",
          name: "Викинги",
          price: 540,
            id:6
        },
        {
          photo:
            "https://movieplayer.net-cdn.it/t/images/2016/12/01/ob_31e37d_lov_jpg_400x250_crop_q85.jpg",
          name: "Графини ",
          price: 555,
            id:7
        },
        {
          photo:
            "https://m.media-amazon.com/images/M/MV5BYWRiYzg1OTQtNWEyMy00ODJmLWI3MWItNWVjNjAzMjM1YjE3XkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY250_SX400_AL_.jpg",
          name: "Гарри Поттер",
          price: 78,
            id:8
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
}
.card {
  margin: 20px;

  box-shadow: 0 0 0.5em #acacac;
}
@media (min-width: 992px) {
  .card {
    width: calc(100% / 12 * 3);
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .card {
    width: calc(100% / 12 * 5);
  }
}
@media (max-width: 767px) and (min-width: 576px) {
  .card {
    width: calc(100% / 12 * 9);
  }
}
@media (max-width: 575px) and (min-width: 320px) {
  .card {
    width: calc(100% / 12 * 10);
  }
}
.card_img {
}
.card_content {
  padding: 20px;
  overflow: hidden;
}
.title {
  margin-bottom: 15px;
}
.left {
  float: left;
}
.price {
  line-height: 1.6em;
}
.right {
  float: right;
}
.btn {
  padding: 5px 10px;
  background: #333;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  line-height: 1em;
  outline: none;
}
</style>
