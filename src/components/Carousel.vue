<template>
  <div class="carousel">
    <p class="carousel__title">Central de Notícias</p>
    <div class="carousel__cards">
        <div class="carousel__inner-cards">

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://s1.static.brasilescola.uol.com.br/be/conteudo/images/1-petroleo.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan and Magma Global announce new CompRiser® partner</p>
                <div class="carousel-tile__date"><span>Ontem</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://images.oedigital.com/images/maritime/w600/photo-ocyan-94723.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan signs Petroleum, Gas and Biofuel Industry Integrity Pact</p>
                <div class="carousel-tile__date"><span>2 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://www.opetroleo.com.br/wp-content/uploads/2019/07/ocyan-1.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan presents new model of riser tower system at Rio Oil & Ga...</p>
                <div class="carousel-tile__date"><span>4 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://tnpetroleo.com.br/media/cache/7a/4b/7a4b03c4fcca116e0a4145a09aeab3a6.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan pursuing quality quality certification in Macaé</p>
                <div class="carousel-tile__date"><span>7 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://s1.static.brasilescola.uol.com.br/be/conteudo/images/1-petroleo.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan and Magma Global announce new CompRiser® partner</p>
                <div class="carousel-tile__date"><span>12 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://images.oedigital.com/images/maritime/w600/photo-ocyan-94723.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan signs Petroleum, Gas and Biofuel Industry Integrity Pact</p>
                <div class="carousel-tile__date"><span>18 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://www.opetroleo.com.br/wp-content/uploads/2019/07/ocyan-1.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan presents new model of riser tower system at Rio Oil & Ga...</p>
                <div class="carousel-tile__date"><span>25 dias</span></div>
            </div>

            <div class="carousel-tile" 
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%), url(https://tnpetroleo.com.br/media/cache/7a/4b/7a4b03c4fcca116e0a4145a09aeab3a6.jpg) center;
  background-size: cover">
                <p class="carousel-tile__text">Ocyan pursuing quality quality certification in Macaé</p>
                <div class="carousel-tile__date"><span>1 mês</span></div>
            </div>                                                 

        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Carousel",
  props: { 
    }
};
</script>

<style scoped lang="scss" scoped>

@import "@/assets/scss/_variables.scss";

.carousel {
    position: relative;
    margin-top: 4rem;

    &__title {
        color: $text-color;
        font-size: 1rem;
        line-height: 1.5;
        font-weight: bold;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 4.5rem;
            height: .25rem;
            background-color: $green-color;
            top: 130%;
            left: 0;
        }

    }

    &__cards {
        width: 73vw;
        overflow: scroll;
        //background-color: red;
        margin: 0 -3rem;
        padding: 0 2rem 1.5rem;
    }
}


.carousel__inner-cards {
    display: flex;
}

.carousel-tile {
    
    min-width: 16.25rem;
    height: 23.56rem;  
    border-radius: 3px;
    position: relative;
    transition: all .3s ease;
    transform: scale(.9);

    &:hover {
        transform: scale(1);
        box-shadow: 0 40px 35px -20px rgba(0, 0, 0, 0.28);
        cursor: pointer;
    }

    &__text {
        position: absolute;
        bottom: 0;
        margin: 1rem;
        font-size: .875rem;
        line-height: 1.5;
        text-align: left;
        color: #fff;
    }

    &__date {
        position: absolute;
        top: .5rem;
        right: .5rem;
        background-color: $primary-color;
        padding: .15rem 1rem;
        border-radius: 3px;
        box-shadow: 0 4px 5px 0 rgba(0,0,0,.2);

        span {
            font-size: .75rem;
            font-weight: bold;
            line-height: 1;
            color: #fff;            
        }
    }
}

</style>
