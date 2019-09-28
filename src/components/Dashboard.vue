<template>
  <div class="container-fluid px-5 py-4 main">
    <div class="row">
      <div class="col-1 mt-3"><img src="../assets/images/logo.svg" alt="Ocyan Logo"></div>
      <div class="col-5">
        <form class="search-wrapper">
          <img class="search-wrapper__icon" src="../assets/images/ic-search.svg" alt="Ícone de lupa">
          <input class="search-wrapper__input" type="text" placeholder="Palavra chave. Ex.: Plataforma">
          <button class="search-wrapper__button" type="submit">Buscar</button>
        </form>        
      </div>
      <div class="col-4 mt-3" style="height: 400px;">
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
      <div class="col">Central de Destaque</div>
    </div>
    <div class="row">
      <div class="col">Central de Notícias</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped lang="scss">

  .main {
    background-image: url("../assets/images/graphism.svg");
    background-color: transparent;
    background-position-y: -14rem;
    background-position-x: 47rem;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .search-wrapper {
    position: relative;
    border-radius: 8px;
    border-style: none;
    width: 100%;
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
      background-color: #009cde;
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
      color: #3F5B70;
    }

    &__radio-flag {
      margin-top: -4px;
    }

    &__radio-button {
      
      height: 1.5rem;
      width: 1.5rem;
      border: 1px solid #009CDE;
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
        background-color: #009CDE;
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

</style>
