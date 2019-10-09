<template>
  <main>
    <router-view></router-view>
    <Sidebar @clicked="changeSidebarState" :isSidebarOpen="sidebarShrinked" :isButtonHidden="hideButton" />
  </main>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Home",
  data: () => ({
    sidebarShrinked: true,
    hideButton: false
  }),
  mounted () {
    if (this.$route.name === "dashboard") { 
      this.sidebarShrinked = false
      this.hideButton = true
    }
  },
  methods: {
    changeSidebarState() {
      if (this.$route.name === "dashboard") { 
        this.sidebarShrinked = false
        this.hideButton = true
      } else {
        this.sidebarShrinked = !this.sidebarShrinked
        this.hideButton = false
      }
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
