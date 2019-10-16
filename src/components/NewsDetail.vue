<template>
    <InnerPageLayout pageTitle="">
        <div class="row">
          <div class="col-8 mt-4">

            <h1 class="news-detail__title">Ocyan completa quatro anos de uso de MPD e reforça pioneirismo na perfuração de poços</h1>
            <span class="news-detail__date">11 de Junho de 2019</span>
            <img class="news-detail__image" src="https://www.opetroleo.com.br/wp-content/uploads/2017/05/plataforma-petroleo-cima.jpg" alt="Imagem do post" >
            <p class="news-detail__text">A Ocyan completa quatro anos de uso da tecnologia em águas profundas na costa brasileira com perfuração com pressão controlada (MPD ou Managed Presure Drilling), garantindo maior segurança operacional no desenvolvimento de poços complexos. Desde o final de 2014, a empresa já perfurou 20 poços com esta técnica, operados principalmente pelas sondas: ODN I, ODN II e Delba III.

“Quando participamos da implementação da tecnologia no país em ambiente offshore, nosso objetivo foi fornecer uma solução ao cliente diante de algumas limitações em avanços da perfuração por conta da geologia. Ao contratar a Ocyan, o cliente demandou o uso dessa metodologia, o que foi importante para o setor” explica Heitor Gioppo, vice-presidente da Ocyan.

Dentre os 20 poços perfurados no Brasil com o emprego da tecnologia pela Ocyan, a empresa foi a primeira do mundo a utilizar a técnica FMCD (Float Mud Cap Drilling) em águas profundas, uma das possíveis maneiras de uso do MPD, o que reforça o pioneirismo da companhia.</p>
            <p class=" mt-2"><span class="news-detail__link">Mais informações:</span>&nbsp;<a href="https://www.ocyan-sa.com" target="_blank">www.ocyan-sa.com</a></p>

            <div class="rating">
              <h3 class="rating__title">Como você avalia esse conteúdo?</h3>
              <div class="rating__stars">
                <star-rating @rating-selected="setRating" active-color="#C1D300" star-size="25" padding="4"></star-rating>
                <span class="rating__evaluation" :class="getEvaluationClass">{{ evaluation }}</span>
              </div>
              <p :class="{invisible: !isMessageVisible}" class="rating__message">Muito obrigado pela sua avaliação! <router-link to="/" tag="a">Toque aqui para voltar para a tela inicial.</router-link></p>
            </div>

          </div>

          <!-- <div class="pie">
            <div class="pie-content"><span class="timer">{{ myTimer }}</span></div>
          </div> -->


          <!-- <div class="col-3 offset-1">
            <aside class="news-sidebar">

              <div class="pie">
                <div class="pie-content"><span class="timer">{{ myTimer }}</span></div>
              </div>

              <div class="last-news">
                <h4 class="last-news__title">Últimos comunicados</h4>
                <div class="last-news__list" v-for="(item, index) in latestNews" :key="index">
                  <a :href="item.linkURL" target="_blank" class="last-news__link">{{ item.title }}</a>
                  <p class="last-news__date">{{ item.timeAgo }}</p>
                </div>
              </div>

            </aside>
          </div> -->

      </div>       
    </InnerPageLayout>
</template>


<script>
import InnerPageLayout from "./InnerPageLayout";
import StarRating from 'vue-star-rating'

export default {
  name: "NewsDetail",
  components: {
    InnerPageLayout, StarRating
  },
  data: () => ({
    myTimer: "3:00",
    rating: 0,
    evaluation: "",
    isMessageVisible: false,
    latestNews: [
      {
        id: 0,
        title: "Mês Internacional da Conscientização da Auditoria Interna",
        timeAgo: "Ontem",
        linkURL: "https://www.youtube.com/watch?v=wZkTh_T75QY",
      },
      {
        id: 1,
        title: "Ocyan lança plataforma de tecnologia",
        timeAgo: "3 dias atrás",
        linkURL: "https://www.youtube.com/watch?v=wvUQcnfwUUM",
      },
      {
        id: 2,
        title: "Novo sistema integra dados de sondas",
        timeAgo: "5 dias atrás",
        linkURL: "https://www.youtube.com/watch?v=w-l5FyA3pgo",
      }          
    ]    
  }),  
  mounted() {
    clearInterval(interval);
    let interval = setInterval(() => {
        let timer = this.myTimer;
        let newTimer = timer.split(":");
        let minutes = newTimer[0];
        let seconds = newTimer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        this.myTimer = minutes + ':' + seconds

        if (minutes == 0 && seconds == 0) { 
          clearInterval(interval);
          this.$router.push({ name: 'dashboard'});
        }

    }, 1000);     
  },
  watch: {
    rating() {
      
      this.isMessageVisible = true

      if (this.rating == 3) {
        this.evaluation = "regular"
      } else if (this.rating <= 2) {
        this.evaluation = "ruim"
      } else if (this.rating == 4) {
        this.evaluation = "bom"
      } else if (this.rating == 5) {
        this.evaluation = "ótimo"
      }
    }
  },
  computed: {
    getEvaluationClass() {
      return {
        bad: this.evaluation === "ruim",
        regular: this.evaluation === "regular",
        good: this.evaluation === "bom",
        great: this.evaluation === "ótimo"
      }
    }
  },   
  methods: {
    setRating(rating) {
      this.rating = rating
    },
    countdown() {
      clearInterval(interval);

      let interval = setInterval(() => {
          let timer = this.myTimer;
          let newTimer = timer.split(":");
          let minutes = newTimer[0];
          let seconds = newTimer[1];
          seconds -= 1;
          if (minutes < 0) return;
          else if (seconds < 0 && minutes != 0) {
              minutes -= 1;
              seconds = 59;
          }
          else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

          this.myTimer = minutes + ':' + seconds

          if (minutes == 0 && seconds == 0) { 
            clearInterval(interval);
            this.$router.push({ name: 'dashboard'});
          }
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

.rating {
  position: relative;
  margin-top: 4.5rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: -2rem;
    left: 0;
    background-color: rgba(0,0,0,.12);
  }

  &__title {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: $primary-color;
    font-weight: normal;
  }

  &__stars {
    margin: 2.25rem 0;
  }

  &__evaluation {
    position: absolute;
    top: 42%;
    left: 60%;
    color: #fff;
    text-transform: uppercase;
    font-family: SonnyGothicBold;
    font-size: .75rem;
    line-height: 1;
    letter-spacing: 1px;
    text-align: center;
  }

  .bad, .regular, .good, .great {
    padding: .5rem .4rem .4rem;
  }
  .bad {
    background-color: #FF2700;
  }
  .regular {
    background-color: gray;
  }
  .good, .great { 
    background-color: $green-color;
  }

  &__message {
    color: $primary-color;
  }

  .invisible {
    opacity: 0;
  }
}

.news-detail {

  &__title {
    font-family: SonnyGothicBold;
    color: $primary-color;
    line-height: 1.3;
  }

  &__image {
    height: 27rem; 
    width: 100%; 
    display: block;
  }

  &__date {
    color: #787878;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 1.5rem 0;
    display: block;
  }

  &__text {
    font-family: SonnyGothicBook;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    color: $primary-color;
  }

  &__link {
    font-family: SonnyGothicBold;
    color: $primary-color;
  }
}

.news-detail__text::first-letter {
  color: $primary-color;
  padding: 0 .3rem;
  margin: 0 .3rem 0 0;
  font-family: SonnyGothicBold;
  font-size: 4.5rem;
  float: left;
  line-height: 1;
}

.last-news {
  margin-top: 9rem;
  max-width: 15rem;

  &__title {
    color: $primary-color;
    text-transform: uppercase;
    font-family: SonnyGothicBold;
    line-height: 1.5;
  }

  &__link {
    margin-top: 1.5rem;
    display: block;
    line-height: 1.5;
    font-family: SonnyGothicBold;
    margin-bottom: .5rem;
  }

  &__date {
    font-family: SonnyGothicItalic;
    color: $primary-color;
  }
}


// Pie Counter

$time: 180; //seconds
$bg-color: #fff;
$accent-color: #e5e5e5;
$accent-color-dark: #c1d300;


.news-sidebar {
  position: relative;
}

.pie {
  position: fixed;
  display: block;
  top: 3rem;
  left: 0;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background: $accent-color;
	background-image: linear-gradient(to right, transparent 50%, $accent-color-dark 0);
	color: $accent-color-dark;
  animation: bg2 #{$time}s step-end;
  animation-fill-mode: forwards;

	&::before {
		content: '';
		display: block;
		margin-left: 50%;
		height: 100%;
		border-radius: 0 100% 100% 0 / 50%;
		background-color: inherit;
		transform-origin: left;
		animation: spin #{$time / 2}s linear 2, bg #{$time}s step-end;
    animation-fill-mode: forwards;
	}
  
  &-content {
    position: absolute;
    background: $bg-color;
    left: .35rem;
    right: .35rem;
    top: .35rem;
    bottom: .35rem;
    z-index: 2;
    border-radius: 50%;
  }
}

@keyframes spin {
	to {
		transform: rotate(.5turn);
	}
}

@keyframes bg {
	50% {
		background: $accent-color-dark;
	}
}

@keyframes bg2 {
	100% {
		background: $accent-color-dark;
	}
}

.timer {
  position: absolute;
  top: 37%;
  left: 15%;
  font-size: 1.3rem;
  line-height: 1;
  color: $primary-color;
  font-family: SonnyGothicBold;
}


</style>
