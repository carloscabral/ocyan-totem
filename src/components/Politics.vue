<template>
  <div class="container-fluid px-5 py-4 mb-5">
    <div class="news">
      <div class="row">
        <div class="logo col-1 mt-4"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></div>
        <div class="col-12 offset-1 mt-4 news__container">
          <div class="row align-items-start">
            <div class="col-4"><a class="back-link" href="#" @click="goBack">Voltar</a></div>
            <div class="col-8"><h4 class="title">Políticas da Ocyan</h4></div>
          </div>

          <p class="subtitle">Segue abaixo a lista de políticas com orientações sobre os assuntos relacionados à Ocyan:</p>

          <ul class="pdf__list">
            <li class="pdf__items" v-for="(item, index) in pdfList" :key="index">
                <a :href="item.linkURL" target="_blank">{{ item.name }}</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Politics",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },  
  data: () => ({
    pdfList: [
      {
        id: 0,
        name: "Política 01",
        linkURL: "https://www.youtube.com/watch?v=wZkTh_T75QY",
      },
      {
        id: 1,
        name: "Política 02",
        linkURL: "https://www.youtube.com/watch?v=wvUQcnfwUUM",
      },
      {
        id: 2,
        name: "Política 03",
        linkURL: "https://www.youtube.com/watch?v=w-l5FyA3pgo",
      }          
    ]
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";


.back-link {
  color: $blue-color;
  position: relative;
  padding-left: 1rem;

  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;  
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
    margin-left: 3.75rem;
  }
}




.subtitle {
    font-family: SonnyGothicBook;
    margin-bottom: 6.06rem;
    margin-top: 4.5rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgba(0,0,0,.12);
        left: 0;
        bottom: -2rem;
    }
}

.pdf__list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    * {
        text-decoration: none;
    }
}

.pdf__items {
    position: relative;
    padding-left: 4.5rem;
    margin-bottom: 4.5rem;
    font-size: 1.5rem;

    &::before {
        content: "";
        position: absolute;
        width: 2.94rem;
        height: 3.375rem;
        background-image: url("../assets/images/img-pdf.svg");
        top: -.75rem;
        left: 0;
    }
}


</style>
