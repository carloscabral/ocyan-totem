<template>
    <InnerPageLayout pageTitle="Políticas da Ocyan">
          <p class="subtitle">Segue abaixo a lista de políticas com orientações sobre os assuntos relacionados à Ocyan:</p>
          <ul class="pdf__list">
            <li class="pdf__items" v-for="(item, index) in pdfList" :key="index">
                <a :href="item.linkURL" target="_blank">{{ item.name }}</a>
            </li>
          </ul>        
    </InnerPageLayout>
</template>


<script>
import InnerPageLayout from "./InnerPageLayout";

export default {
  name: "Politics",
  components: {
    InnerPageLayout
  },  
  data: () => ({
    pdfList: [
      {
        id: 1,
        name: "Política 01",
        linkURL: "https://www.youtube.com/watch?v=wZkTh_T75QY",
      },
      {
        id: 2,
        name: "Política 02",
        linkURL: "https://www.youtube.com/watch?v=wvUQcnfwUUM",
      },
      {
        id: 3,
        name: "Política 03",
        linkURL: "https://www.youtube.com/watch?v=w-l5FyA3pgo",
      }, 
      {
        id: 4,
        name: "Política 04",
        linkURL: "https://www.youtube.com/watch?v=IgomTOOgl8M",
      }, 
      {
        id: 5,
        name: "Política 05",
        linkURL: "https://www.youtube.com/watch?v=t4QK8RxCAwo",
      }
    ]
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

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
