<template>
  <div id="home">
    <Container />
  </div>
  
</template>

<script>
// @ is an alias to /src
import Container from "../components/Container.vue";

export default {
  name: "Home",

  components: {
    Container,
  },
};
</script>

<style scoped lang="scss">
#home {
  height: 100vh;
  box-sizing: border-box;
  margin: -20px -5px;
  background-color: rgb(19,10,74);
  font-family: 'Montserrat', sans-serif;
}
</style>
