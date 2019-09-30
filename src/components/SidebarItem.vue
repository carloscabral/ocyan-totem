<template>
  <div class="sidebar-item">
    <div class="row align-items-center">
        <div class="col-2">
        <div class="sidebar-item__image">
            <img :src="require(`../assets/images/${icon}`)" :alt="icon">
        </div>
        </div>
        <div class="col-10">
        <div class="sidebar-item__title">
            <h4>{{ title }}</h4>
        </div>
        </div>
        <div class="col">
        <div class="sidebar-item__text">
            <p>{{ text }}</p>
        </div>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: { icon: String, title: String, text: String }
};
</script>

<style scoped lang="scss">

@import "@/assets/scss/_variables.scss";

.sidebar-item {
  
  margin-bottom: 1px;
  padding: 1.5rem;
  z-index: 9999;
  position: relative;
  background-color: $sidebar-color;
  transition: all .2s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgba(255,255,255,.12);
    top: 0;
    left: 0;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }

  &__image {
    width: 2.5rem;
    height: 2.5rem;
  }

  &__title {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
  }

  &__text {
    font-size: .875rem;
    line-height: 1.5rem;
    color: #D2E7F3;
    font-weight: 200;
    padding-left: 3.9rem;
    margin-bottom: 0;

    > * {
        margin-bottom: 0;
    }
  }
}

</style>
