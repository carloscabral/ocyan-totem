<template>
  <div class="container-fluid px-5 py-4 mb-5">
    <div class="news">
      <div class="row">
        <div class="logo col-1 mt-4"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></div>
        <div class="col-12 offset-1 mt-4 news__container">
          <div class="row align-items-start">
            <div class="col-4"><a class="back-link" href="#" @click="goBack">Voltar</a></div>
            <div class="col-8"><h4 class="title">Comunicados e Notícias</h4></div>
          </div>
          <form>
            <div class="selections mt-3 row align-items-center pl-3">

              <select class="select" id="id_year">
                <option value="" disabled selected>Selecione o ano</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </select>

              <select class="select" id="id_order">
                <option value="recent">De recentes para antigos</option>
                <option value="older">De antigos para recentes</option>
              </select>                

              <div class="search-wrapper">
                <input class="search-wrapper__input" type="text" placeholder="Digite algo para buscar">
              </div>               

              <a class="clean-filter mb-0" @click="clearFilters">Limpar filtros</a>   

            </div>              
            
          </form>
          <div class="news-list mt-4">
            <p class="news-list__results"><strong>{{ newsResults.length }}</strong> resultados foram encontrados.</p> 
            <div class="row mt-5" v-for="(item, index) in newsResults" :key="index">
              <div class="col-1 news-list__block">
                <h2 class="news-list__day">{{ item.day }}</h2>
                <h3 class="news-list__month">{{ item.month }}</h3>
                <p class="news-list__year">{{ item.year }}</p>
              </div>
              <div class="col-7">
                <h3 class="news-list__title">{{ item.title }}</h3>
                <p class="news-list__text mt-2">{{ item.text }}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    clearFilters() {
      alert("Limpa os filtros.")
    }
  },  
  data: () => ({
    newsResults: [
      {
        id: 0,
        day: "28",
        month: "Maio",
        year: "2019",
        title:
          "Ocyan completa quatro anos de uso de MPD e reforça pioneirismo na perfuração de poços",
        text:
          "A empresa já perfurou 20 poços com esta técnica, operados principalmente pelas sondas ODN I, ODN II e Delba III, desde o fim do ano de 2014."
      },
      {
        id: 1,
        day: "27",
        month: "Maio",
        year: "2019",
        title: "Ocyan marca presença na segunda edição do FPSO Brasil Congress",
        text:
          "Evento ocorre nos dias 28 e 29 de maio, na cidade do Rio de Janeiro. "
      },
      {
        id: 2,
        day: "14",
        month: "Maio",
        year: "2019",
        title: "Ocyan wave challenge recebe mais de 100 inscrições este ano",
        text:
          "Startups de todas as regiões do país se inscrevem no primeiro programa da plataforma de inovação da Ocyan"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";


// Form
/* Reset Select */
select {
  appearance: none;
  outline: 0;
  box-shadow: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-position: calc(100% - 1rem) center;
  //background-size: 3rem;
  background-repeat: no-repeat;
}

/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  padding: 0 4rem 0 1.5rem;
  color: $text-color;
}

select {
  cursor: pointer;
}

.select, .search-wrapper {
  position: relative;
  border: solid 1px $blue-color !important;
  margin-right: 2rem;
  background-color: #fff;
  height: 3.5rem;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  font-family: SonnyGothicBook;
}

.clean-filter {
  font-size: 1rem;
  line-height: 1.5;
  color: $primary-color !important;
  position: relative;
  padding-left: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/images/icon-clear-filter.svg");
    background-repeat: no-repeat;
    top: 7%;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
}

.search-wrapper {

  min-width: 19rem;

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/images/ic-search.svg");
    background-repeat: no-repeat;
    top: 35%;
    left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
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
}


.back-link {
  color: $blue-color;
  position: relative;
  padding-left: 1rem;
  font-family: SonnyGothicBold;

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 0;
    width: .75rem;
    height: .75rem;
    border: 4px solid $blue-color;
    border-right: none;
    border-top: none;
    border-radius: 2px;
    transform: rotate(45deg);
  }

  &:hover {
    color: darken($blue-color, 10%);
  }
}

.news {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1.5rem;
    left: -3rem;
    width: 100%;
    height: 1.5rem;
    background-image: url("../assets/images/header-bg.png");
    background-repeat: no-repeat;
  }
}

.selections {
  position: relative;
  height: 9.75rem;


  &::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.03);
    height: inherit;
    width: 105%;
    top: 0;
    left: -10.5rem;
  }
}

.back-link {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
}

.title {
  position: relative;
  font-family: SonnyGothicBold;


  &::after {
    content: "";
    position: absolute;
    width: 2.25rem;
    height: 0.25rem;
    background-color: $green-color;
    border-radius: 3px;
    bottom: -0.5rem;
    left: 0;
    margin-left: 4.75rem;
  }
}

.news-list {
  &__results,
  &__text {
    font-size: 1rem;
    line-height: 1.5;
    color: $text-color;
    font-family: SonnyGothicBook;
  }

  &__title,
  &__month {
    font-size: 1.5rem;
    color: $primary-color;
  }

  &__day, &__month {
    font-family: SonnyGothicBold;
  }

  &__day,
  &__month,
  &__year {
    text-align: center;
    margin-left: -0.5rem;
    line-height: 1;
  }

  &__day {
    font-size: 3.375rem;
    color: $primary-color;
  }

  &__year {
    color: $primary-color;
  }

  &__title {
    line-height: 1.33333;
    font-family: SonnyGothicExtraBold;
  }

  &__title,
  &__text {
    max-width: 42.9rem;
    margin-left: 3.5rem;
  }

  &__block {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 8rem;
      width: 1px;
      background-color: $green-color;
      top: 0;
      right: -1.5rem;
    }
  }
}
</style>
