<template>
  <div id="container">

    <h1 v-if="questions.length === 0 || questions.length === 5" id="title">CHI VUOL ESSERE MILIONARIO</h1>

    <Layout />

    <!-- Inizio Gioco -->
    <div v-if="questions.length === 0" class="start-button">
      <button class="start" @click="getIndex()"><h3>Inizia la tua scalata</h3></button>
    </div>

    <!-- Durante il gioco -->
    <div v-else-if="questions.length < 5">
      <div class="question" :class="{ 'd-none': isContinue === true}">
        <Questions :currentIndex='currentIndex' />
        <Answers :currentIndex='currentIndex' :questions='questions' 
        @changeIndex='updateIndex($event)' 
        @emptyQuestion='emptyQuestion($event)' 
        @getContinue='pagePrice($event)'
        @pageIndex='pageIndex($event)' />
      </div>
      <div v-if="isContinue === true" class="price">
        <Price :pageI='pageI'/>
        <div>
          <button class="next-page" @click="nextPage()"><h3>Prossima Domanda</h3></button>
        </div>
      </div>
    </div>

    <!-- Fine gioco -->
    <div v-else>
      <h1>COMPLIMENTI! Hai vinto un milione di Euro!</h1>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Answers from "../components/Answers.vue";
import Questions from "../components/Questions.vue";
import Layout from "../components/Layout.vue";
import Price from "../components/Price.vue";

export default {
name: "container",

  components: {
    Answers,
    Questions,
    Layout,
    Price,
  },

  data() {
    return {
        currentIndex: 0,
        questions: [],
        isContinue: false,
        pageI: null,
    }
  },

  methods: {
      getIndex() {
          this.currentIndex = Math.floor(Math.random() * 5) + 1;
          this.questions.push(this.currentIndex);
      },

      updateIndex(updatedIndex) {
        this.currentIndex = updatedIndex; 
      },

      emptyQuestion(empty) {
        this.questions = empty;
      },

      pagePrice(pagePrice) {
        this.isContinue = pagePrice;
      },

      pageIndex(pageIndex) {
        this.pageI = pageIndex;
      },

      nextPage() {
        this.isContinue = false;
      }

  }
};
</script>

<style scoped lang="scss">

#container {
  padding-top: 50px;
}

h1 {
  color: white;
}

#title {
  margin: 30px 0;
  color: white;
}

.question {
  border: 1px solid white;
  border-radius: 50px;
  margin: -20px 100px;
}

.price {
  border: 0;
  margin-top: 50px;
}

.start-button {
  display: flex;
  justify-content: center;
  .start {
      font-size: 30px;
      padding: 5px 30px;
      margin-bottom: 80px;
      border-radius: 20px;
      cursor: pointer;
      transition: all .2s ease-in-out;
  }
  .start:hover {
    transform: scale(1.2);
  }
}

.next-page {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgb(19,10,74);
  border: 1px solid white;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all .4s ease-in-out;
}

.next-page:hover {
  background-color: green;
}

.d-none {
  display: none;
}

</style>
