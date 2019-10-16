<template>
  <div class="container-fluid px-5 py-4">
    <div class="main-container">
      <div class="row">
        <router-link to="/" tag="div" class="logo"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></router-link>
        <div class="col-12 offset-1 mb-5">
            <div class="row align-items-start news__container">
                <a class="back-link" href="#" @click="goBack">Voltar</a>
                <h4 v-if="pageTitle" class="title">{{ pageTitle }}</h4>
            </div>
            <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerPageLayout",
  props: {
    pageTitle: { type: String, required: false }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

.logo {
  position: fixed;
  top: 3rem;
  left: 3rem;

  &:hover {
    cursor: pointer;
  }
}

.news__container {
  margin-top: 6rem;
}

.back-link {
  color: $blue-color;
  position: relative;
  padding-left: 1rem;
  margin-right: 28vw;

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
    width: 0.75rem;
    height: 0.75rem;
    border: 4px solid $blue-color;
    border-right: none;
    border-top: none;
    border-radius: 2px;
    transform: rotate(45deg);
  }
}

.title {
  position: relative;
  font-family: SonnyGothicBold;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    width: 2.25rem;
    height: 0.25rem;
    background-color: $green-color;
    border-radius: 3px;
    bottom: -0.5rem;
    left: 0;
    margin-left: 40%;
  }
}

.main-container {
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
</style>
