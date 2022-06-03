<template>
  <section id="price">
        <div class="container" >
          <button v-for="price, i in prices" :key='i' class="current-price" :class="{ 'orange': i === pageI }">
              <h3>{{ price }} $</h3>
          </button>
        </div>
  </section>
</template>

<script>
export default {
name: 'price',

props: ['pageI'],

data() {

    return {

        prices: ['250.000', '500.000', '750.000', '1.000.000']

    }

}
}
</script>

<style scoped lang="scss">

#price {
    background-color: rgb(19,10,74);;
}

.current-price {
    width: 20%;
    margin: 20px;
    padding: 20px;
    border: 1px solid white;
    background-color: rgba(0,0,0,0.1);
    color: white;
}

.orange {
    background-color: orange;
}

</style>