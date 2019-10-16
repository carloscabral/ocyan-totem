<template>
  <main>
    <div class="pie">
      <div class="pie-content"><span class="timer">{{ myTimer }}</span></div>
    </div>
    <router-view></router-view>
    <Sidebar @clicked="changeSidebarState" :isSidebarOpen="sidebarShrinked" :isButtonHidden="hideButton" />
  </main>
</template>

<script>
import Sidebar from "./Sidebar";

export default {

  name: "Home",
  data: () => ({
    myTimer: "3:00",
    sidebarShrinked: true,
    hideButton: false
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.changeSidebarState
    });
  },
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

// Pie Counter

$time: 180; //seconds
$bg-color: #fff;
$accent-color: #e5e5e5;
$accent-color-dark: #c1d300;

.pie {
  position: fixed;
  display: block;
  top: 7.5rem;
  left: 3rem;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background: $accent-color;
	background-image: linear-gradient(to right, transparent 50%, $accent-color-dark 0);
	color: $accent-color-dark;
  animation: bg2 #{$time}s step-end;
  animation-fill-mode: forwards;
  z-index: 999;

	&::before {
		content: '';
		display: block;
		margin-left: 50%;
		height: 100%;
		border-radius: 0 100% 100% 0 / 50%;
		background-color: inherit;
		transform-origin: left;
		animation: spin #{$time / 2}s linear 2, bg #{$time}s step-end;
    animation-fill-mode: forwards;
	}
  
  &-content {
    position: absolute;
    background: $bg-color;
    left: .35rem;
    right: .35rem;
    top: .35rem;
    bottom: .35rem;
    z-index: 2;
    border-radius: 50%;
  }
}

@keyframes bg {
	50% {
		background: $accent-color-dark;
	}
}

@keyframes bg2 {
	100% {
		background: $accent-color-dark;
	}
}

.timer {
  position: absolute;
  top: 37%;
  left: 15%;
  font-size: 1.3rem;
  line-height: 1;
  color: $primary-color;
  font-family: SonnyGothicBold;
}

</style>