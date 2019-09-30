<template>
  <main>
    <div class="bg-image"></div>
    <div class="sidebar short">
      <div class="sidebar__button">
        <img class="sidebar__icon" src="../assets/images/indicator-left.svg">
      </div>
      <div class="sidebar__body">
        <div class="div" v-for="(item, index) in items" :key="index">
          <SidebarItem :icon="item.icon" :title="item.title" :text="item.text" />
        </div>     
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "Home",
  data: () => ({
    items: [
      { icon: "ic-phone.svg", title: "Canal Linha de Ética", text: "Reporte qualquer conduta indevida de forma segura e/ou anônima." },
      { icon: "ic-form.svg", title: "Formulários de conformidade", text: "Acesse este link e mantenha seus registros sempre atualizados." },
      { icon: "ic-thumb-up.svg", title: "Página de conformidade", text: "Acesso à pagina de conformidade." },
      { icon: "ic-news.svg", title: "Comunicados e notícias", text: "Repositório de comunicados e notícias, com filtros de busca." },
      { icon: "ic-manual.svg", title: "Manual da marca", text: "Esteja sempre alinhado à correta utilização da marca Ocyan." },
      { icon: "ic-welcome.svg", title: "Manual de boas-vindas", text: "Guia digital do integrante, que aborda os principais temas sobre a Ocyan." },
      { icon: "ic-politics.svg", title: "Políticas da Ocyan", text: "Consulte aqui todas as políticas da empresa" }
    ]
  }),  
  components: {
    SidebarItem
  }  
};
</script>

<style scoped lang="scss">

@import "@/assets/scss/_variables.scss";

main {
    background-image: url("../assets/images/graphism.svg");
    background-color: transparent;
    background-position-y: -14rem;
    background-position-x: 47rem;
    background-repeat: no-repeat;
    background-size: contain;
}

.sidebar {

  transition: all .2s ease;

  &__button {
    display: flex;
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0;
    right: 24.5rem;
    background-color: $sidebar-color;
    z-index: 999;

    &:hover {
      cursor: pointer;
    }
  }

  &__icon {
    align-items: center;
    padding-left: 25%;
  }

  &__body {
    position: absolute;
    width: 24.5rem;
    height: 100%;
    display: fixed;
    right: 0;
    top: 0;
    background-color: $primary-color;
    box-shadow: -20px 0 20px 0 rgba(34, 46, 56, 0.18);
    overflow-y: scroll;
    overflow-x: hidden;
  }
}


</style>
