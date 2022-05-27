<template>
  <div id="container">

    <h1 v-if="questions.length === 0 || questions.length === 5" id="title">CHI VUOL ESSERE MILIONARIO</h1>

    <Layout />

    <!-- Inizio Gioco -->
    <div v-if="questions.length === 0" class="start-button">
      <button class="start" @click="getIndex()"><h3>Inizia la tua scalata</h3></button>
    </div>

    <!-- Durante il gioco -->
    <div id="question" v-else-if="questions.length < 5">
      <Questions :currentIndex='currentIndex' />
      <Answers :currentIndex='currentIndex' :questions='questions' @changeIndex='updateIndex($event)' @emptyQuestion='emptyQuestion($event)' />
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

export default {
name: "container",

  components: {
    Answers,
    Questions,
    Layout,
  },

  data() {
    return {
        currentIndex: 0,
        questions: [],
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
      }
  }
};
</script>

<style scoped lang="scss">

h1 {
  color: white;
}

#title {
  margin: 30px 0;
  color: white;
}

#question {
  border: 1px solid white;
  border-radius: 50px;
  margin: -20px 100px;
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

</style>
