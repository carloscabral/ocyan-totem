<template>
    <div class="sidebar" :class="{ 'no-shrinked': !isSidebarOpen, 'shrinked': isSidebarOpen }">
        <div class="sidebar__button" @click="$emit('clicked')">
            <img class="sidebar__icon" :class="{ 'icon-flip': isSidebarOpen }" src="../assets/images/indicator-left.svg">
        </div>
        <div class="sidebar__body">
            <div v-for="(item, index) in items" :key="index">
                <a class="sidebar-item" :href="item.link" target="_blank">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <div class="sidebar-item__image">
                                <img :src="require(`../assets/images/${item.icon}`)" :alt="item.icon">
                            </div>
                        </div>
                        <div :class="{ invisible: isSidebarOpen }" class="col-10">
                            <div class="sidebar-item__title">
                                <h4>{{ item.title }}</h4>
                            </div>
                        </div>
                        <div :class="{ invisible: isSidebarOpen }" class="col">
                            <div class="sidebar-item__text">
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                    </div>    
                </a>                
            </div>
            <div class="sidebar__footer"><p>Copyright © 2019 - Ocyan</p></div>     
        </div>
    </div>
</template>

<script>

export default {
  name: "Sidebar",
  props: {
      isSidebarOpen: { type: Boolean, required: true }
  },
  data: () => ({
    items: [
      {
        icon: "ic-phone.svg",
        title: "Canal Linha de Ética",
        text: "Reporte qualquer conduta indevida de forma segura e/ou anônima.",
        link: "https://canalconfidencial.com.br/linhadeeticaocyan/"
      },
      {
        icon: "ic-form.svg",
        title: "Formulários de conformidade",
        text: "Acesse este link e mantenha seus registros sempre atualizados.",
        link: "https://www.ocyan-sa.com/pt-br/conformidade"
      },
      {
        icon: "ic-thumb-up.svg",
        title: "Página de conformidade",
        text: "Acesso à pagina de conformidade.",
        link: "https://www.ocyan-sa.com/pt-br/conformidade"
      },
      {
        icon: "ic-news.svg",
        title: "Comunicados e notícias",
        text: "Repositório de comunicados e notícias, com filtros de busca.",
        link: "https://www.ocyan-sa.com/pt-br/sala-de-imprensa/noticias"
      },
      {
        icon: "ic-manual.svg",
        title: "Manual da marca",
        text: "Esteja sempre alinhado à correta utilização da marca Ocyan.",
        link: "https://www.odebrecht.com/pt-br/comunicacao/releases/ocyan-e-o-novo-nome-da-odebrecht-oleo-e-gas"
      },
      {
        icon: "ic-welcome.svg",
        title: "Manual de boas-vindas",
        text: "Guia digital do integrante, que aborda os principais temas sobre a Ocyan.",
        link: "https://www.ocyan-sa.com/pt-br/quem-somos"
      },
      {
        icon: "ic-politics.svg",
        title: "Políticas da Ocyan",
        text: "Consulte aqui todas as políticas da empresa",
        link: "https://api.ocyan-sa.com/sites/default/files/2018-08/politica_sobre_conformidade_1.pdf"
      }
    ]
  }),
};
</script>

<style scoped lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.sidebar {

  transition: all .5s cubic-bezier(.57,.21,.69,1.25);

  position: absolute;
  width: 24.5rem;
  display: fixed;
  right: 0;
  top: 0;
  background-color: $primary-color;
  box-shadow: -20px 0 20px 0 rgba(34, 46, 56, 0.18);

  &__button {
    display: flex;
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0;
    left: -3rem;
    background-color: $sidebar-color;
    z-index: 999;

    &:hover {
      cursor: pointer;
    }
  }

  &__icon {
    align-items: center;
    padding-left: 25%;

    &.icon-flip {
        transform: rotate(180deg);
        margin-left: .75rem;
    }
  }

  &__body {

  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3.5rem;
    background-color: $primary-color;
    box-shadow: 0 -20px 20px 0 rgba(0, 0, 0, 0.08);
    width: 100%;

    p {
      margin-top: .75rem;
      text-align: center;
      font-size: .875rem;
      line-height: 1.5;
      color: #fff;
      font-weight: bold;
    }
  }
}

a {
  text-decoration: none;
}

.sidebar-item {
  margin-bottom: 1px;
  padding: 1.5rem;
  z-index: 9999;
  position: relative;
  background-color: $sidebar-color;
  transition: all 0.2s ease;
  display: block;

  &:hover {
    background-color: $primary-color;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.12);
    top: 0;
    left: 0;
  }

  &__image {
    width: 2.5rem;
    height: 2.5rem;
  }

  &__title > * {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
    text-decoration: none;
    
  }

  &__text > * {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #d2e7f3;
    font-weight: 200;
    padding-left: 3.9rem;
    margin-bottom: 0;
    display: block;
    text-decoration: none;
  }
}

.shrinked {
    width: 5.5rem;
    height: auto;
}

.no-shrinked {
    width: 24.5rem;
    height: 140vh;
}

.invisible {
    display: none;
}

</style>
