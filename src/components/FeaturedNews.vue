<template>
  <div>
    <div class="featured-news">
        <p class="featured-news__category">{{ category }}</p>
        <h1 class="featured-news__title">{{ title }}</h1>
        <div class="featured-news__image">
            <img :src="imageURL">
            <span></span>
        </div>
        
        <div class="featured-news__more">
            <h4 class="featured-news__text">{{ linkText }}</h4>
            <div class="featured-news__button">
                <a v-if="isVideo" class="featured-news__button--swoop" :href="linkURL" target="_blank"></a>
                <a v-else class="featured-news__button--simple" :href="linkURL" target="_blank"></a>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>

export default {
  name: "FeaturedNews",
  props: { 
      category:  { type: String, required: true },
      title: { type: String, required: true },
      imageURL: { type: String, required: true },
      linkText: { type: String, required: true },
      linkURL: { type: String, required: true }, 
      isVideo: { type: Boolean, required: true } 
    }
};
</script>

<style scoped lang="scss">

@import "@/assets/scss/_variables.scss";

.featured-news {

    padding-top: 8rem;
    position: relative;

    &__category {
        color: $secondary-color;
        text-transform: uppercase;
        font-size: .75rem;
        letter-spacing: 1px;
        font-weight: bold;
        padding-left: 2rem;
        position: relative;
        line-height: 1.5;

        &:before {
            position: absolute;
            content: "";
            width: 1rem;
            height: 2px;
            top: 45%;
            left: 0;
            background-color: $text-color;
        }
    }

    &__title {
        font-size: 2.25rem;
        line-height: 1.3;
        color: $primary-color;
        max-width: 25rem;
        margin: 0;
        user-select: none;
    }

    &__more {
        display: flex !important;
        align-items: center;
        height: 4.5rem;
        margin-top: 1.5rem;
    }

    &__text {
        font-size: 1.5rem;
        color: $secondary-color;
        line-height: 1.5;
    }

    &__image img {
        position: absolute;
        display: block;
        right: -11rem;
        top: 5rem;
        width: 333px;
        height: 333px;
        border-radius: 50%;
        object-fit: cover;
        user-select: none;
    }

    &__image span {
        position: absolute;
        width: 433px;
        height: 433px;
        right: -14rem;
        top: 2rem;
        background-color: transparent;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 50%;        
    }
    
    &__button {
            display: flex;
            margin-left: 1.25rem;
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;

        &--swoop {

            width: inherit;
            height: inherit;
            border-radius: inherit;
            animation: swoop 2.5s infinite;
            animation-direction: reverse;
            animation-timing-function: cubic-bezier(0.71, 0.13, 1, 0.71);
            background-color: $blue-color;
            position: relative;
            transition: background-color .2s ease;

            &:hover {
                background-color: darken($blue-color, 10%);
            }

            &::before {
                content: "";
                position: absolute;
                width: 7.5rem;
                height: 7.5rem;
                background-color: scale-color($blue-color, $lightness: 90%);
                top: -32%;
                left: -32%;
                border-radius: 50%;
                z-index: -999;
            }

            &::after {
                content: "";
                position: absolute;
                background: url("../assets/images/ic-btn-play.svg") center no-repeat;
                width: 1.8125rem;
                height: 1.8125rem;            
                top: 29%;
                left: 32%;         
            }            
        }

        &--simple {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background-color: $blue-color;
            position: relative;
            transition: background-color .2s ease;
            
            &:hover {
                background-color: darken($blue-color, 10%);
            } 
            
            &::after {
                content: "";
                position: absolute;
                top: 38%;
                left: 35%;
                width: 1rem;
                height: 1rem;
                border: 2px solid #fff;
                border-bottom: 0;
                border-left: 0;
                transform: rotate(45deg);
            }             
        }
    }
}

@keyframes swoop {
    0% { box-shadow: inset 0 0 0 0 $blue-color, inset 0 0 0 0 $swoop-bg; }
    50% { box-shadow: inset 0 0 0 0 $blue-color, inset 0 0 0 1rem $swoop-bg; }
    100% { box-shadow: inset 0 0 0 1rem $blue-color, inset 0 0 0 1rem $swoop-bg; }
}


</style>
