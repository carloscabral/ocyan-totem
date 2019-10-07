<template>
  <main>
    <router-view></router-view>
    <Sidebar @clicked="changeSidebarState" :isSidebarOpen="sidebarShrinked" />
  </main>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Home",
  data: () => ({
    sidebarShrinked: false
  }),
  methods: {
    changeSidebarState() {
      this.sidebarShrinked = !this.sidebarShrinked
    }
  },  
  components: {
    Sidebar
  }  
};
</script>

<style scoped lang="scss">

@import "@/assets/scss/_variables.scss";

main {
  background-image: url("../assets/images/graphism.svg");
  background-repeat: no-repeat;
  background-position-x: 45rem;
  background-position-y: -14.25rem; 
}

</style>
