<template>
  <div class="container-fluid px-5 py-4">
    <div class="row">
      <div class="col-1 mt-3"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></div>
      <div class="col-5">
        <form class="search-wrapper">
          <img class="search-wrapper__icon" src="../assets/images/ic-search.svg" alt="Ícone de lupa">
          <input class="search-wrapper__input" type="text" placeholder="Buscar palavra chave. Ex.: Plataforma">
          <button class="search-wrapper__button" type="submit">Buscar</button>
        </form>        
      </div>
      <div class="col-4 mt-3">
        <div class="form__group">
          <div class="form__radio-group">
            <input type="radio" class="form__radio-input" id="br" name="language">
            <label for="br" class="form__radio-label">
              <img class="form__radio-flag" src="../assets/images/img-brazil.svg" alt="Português">
              <span class="form__radio-button"></span>
              br</label>
          </div>
          <div class="form__radio-group">
            <input type="radio" class="form__radio-input" id="en" name="language">
            <label for="en" class="form__radio-label">
              <img class="form__radio-flag" src="../assets/images/img-usa.svg" alt="Inglês">
              <span class="form__radio-button"></span>
              en</label>
          </div>          
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 offset-md-1">
          <FeaturedNews class="featured-section"
            :category="featuredItems[this.activeFeaturedId].category"
            :title="featuredItems[this.activeFeaturedId].title"
            :imageURL="featuredItems[this.activeFeaturedId].imageURL"
            :link-text="featuredItems[this.activeFeaturedId].linkText"
            :linkURL="featuredItems[this.activeFeaturedId].linkURL"
            :is-video="featuredItems[this.activeFeaturedId].isVideo" />           
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Carousel />
      </div>
    </div>
    <span v-show="activeFeaturedId >= 1" class="featured-section__btn-prev" @click="goPrev"></span>
    <span v-show="activeFeaturedId < featuredItems.length -1" class="featured-section__btn-next" @click="goNext"></span> 
  </div>
</template>

<script>
import FeaturedNews from "./FeaturedNews";
import Carousel from "./Carousel";

export default {
  name: "Dashboard",
  data: () => ({
    activeFeaturedId: 0,
    featuredItems: [
        { 
            id: 0,
            category: "Notícias", 
            title: "Startups poderão receber verba por inovação no setor petroleiro",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg", 
            linkText: "Assista o vídeo",
            linkURL: "https://www.youtube.com/watch?v=V3mhhT3c7oY",
            isVideo: true 
        },
        { 
            id: 1,
            category: "Comunicados", 
            title: "Ocyan abre inscrições de startups para concurso de inovação em óleo e gás",
            imageURL: "http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg", 
            linkText: "Leia o comunicado",
            linkURL: "https://www.youtube.com/watch?v=gBAhgZZNR7E",
            isVideo: false
        },
        {   
            id: 2,
            category: "Releases", 
            title: "Ocyan vai intensificar negócios no mercado de FPSOs e prepara nova plataforma",
            imageURL: "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg", 
            linkText: "Leia o comunicado",
            linkURL: "https://www.youtube.com/watch?v=LGfhStYcCZk",
            isVideo: false
        },
        {   
            id: 3,
            category: "Notícias", 
            title: "Ocyan, Magma e Brasfels formam joint-venture para sistema risers",
            imageURL: "https://www.tnpetroleo.com.br/media/cache/42/ae/42aee16959525612d6399d4ce68c7313.jpg", 
            linkText: "Assista o vídeo",
            linkURL: "https://www.youtube.com/watch?v=YdJc7-ZEuT0",
            isVideo: true
        }
    ]
  }),
  methods: {
    goPrev() {
        (this.activeFeaturedId <= 0) ? this.activeFeaturedId = 0 : this.activeFeaturedId --
    },
    goNext() {
        (this.activeFeaturedId >= this.featuredItems.length - 1) ? this.activeFeaturedId = this.featuredItems.length -1 : this.activeFeaturedId ++
    }
  },    
  components: {
    FeaturedNews, Carousel
  }   
};
</script>

<style scoped lang="scss" scoped>

@import "@/assets/scss/_variables.scss";

  .search-wrapper {
    position: relative;
    border-radius: 8px;
    border-style: none;
    width: 95%;
    height: 3.75rem;
    background-color: rgba(187, 188, 188, 0.2);
    overflow: hidden; 

    &__icon {
      position: absolute;
      top: 35%;
      margin-left: 1rem;
    }

    &__input {
      height: inherit;
      width: inherit;
      border-style: none;
      background-color: transparent;
      outline: 0;
      padding-left: 2.75rem;

      &::-webkit-input-placeholder {
        color: rgba(0,0,0,.38);
        font-size: 1rem;
      }

    }

    &__button {
      position: absolute;
      right: 0;
      height: inherit;
      border-style: none;
      padding: .8rem 1.5rem;
      background-color: $blue-color;
      color: #fff;
      font-size: .8rem;
      text-transform: uppercase;
      outline: 0;
    }

  }

  .form {

    &__radio-group {
      width: 8rem;
      display: inline-block;
    }

    &__radio-label {
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      position: relative;
      padding-left: 2rem;
      color: $primary-color;
    }

    &__radio-flag {
      margin-top: -4px;
    }

    &__radio-button {
      
      height: 1.5rem;
      width: 1.5rem;
      border: 1px solid $blue-color;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;

      &::after {
        content: "";
        display: block;
        height: .8rem;
        width: .8rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background-color: $blue-color;
        opacity: 0;
        transition: all .2s ease;
      }
    }

    &__radio-input {
      display: none;
    }

    &__radio-input:checked ~ &__radio-label &__radio-button::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .featured-section {
      
    &__btn-prev {
        position: absolute;
        top: 30%;
        left: 5rem;
        width: 3.5rem;
        height: 3.5rem;
        border: 1rem solid $light-grey;
        border-bottom: 0;
        border-left: 0;
        border-radius: 4px;
        transform: rotate(225deg);
        transition: border .2s ease;

        &:hover {
            cursor: pointer;
            border-color: darken($light-grey, 20%);
        }
    }

    &__btn-next {
        @extend .featured-section__btn-prev;
        left: 58.5rem !important;
        transform: rotate(45deg);

    }      
  }

</style>
