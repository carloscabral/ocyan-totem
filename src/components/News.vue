<template>
  <div class="container-fluid">
    <div class="news">
      <div class="row">
        <div class="col mt-5"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></div>
        <div class="col-12 offset-1 mt-4">
          <div class="row align-items-start">
            <div class="col-4"><a class="back-link" href="#">&#8249;&nbsp;Voltar</a></div>
            <div class="col-8"><h4 class="title">Comunicados e Notícias</h4></div>
          </div>
          <div class="selections mt-3">
            Teste
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "News",
};
</script>

<style scoped lang="scss">

@import "@/assets/scss/_variables.scss";

.news {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1rem;
    width: 100%;
    height: 1.5rem;
    background-color: $blue-color;
  }
}

.selections {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: #f7f7f7;
    height: 150px;
    width: 100%;
    top: 0;
    left: -9rem;
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

  &::after {
    content: "";
    position: absolute;
    width: 2.25rem;
    height: .25rem;
    background-color: $green-color;
    border-radius: 3px;
    bottom: -.5rem;
    left: 0;
    margin-left: 4.75rem;
  }
}

</style>
