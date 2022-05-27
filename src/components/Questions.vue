<template>
  <section div id="questions">
      <div v-for="questionObj in questionsAll" :key="questionObj.id">
          <div v-if="questionObj.id === currentIndex">
            <h3>{{ questionObj.questions[0].name }}</h3>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: "questions",

props: ['currentIndex'],

data() {
    return { 
        questionsAll: [
            {
                id: 1,
                questions: [
                    {name: "Qual'è la squadra italiana che ha vinto piu' scudetti?"},
                ],
            },
            {
                id: 2,
                questions: [
                    {name: "Nel famosissimo film 'Quei bravi ragazzi', chi interpreteva il protagonista Henry Hill?"},
                ],
            },
            {
                id: 3,
                questions: [
                    {name: "Qual'è la città della cultura Italiana?"},
                ],
            },
            {
                id: 4,
                questions: [
                    {name: "In quale anno è stato creato il World Wide Web? "},
                ],
            },
            {
                id: 5,
                questions: [
                    {name: "Di quale gruppo è la canzone 'Let It Be'?"},
                ],
            },
        ]
    }
}
}
</script>

<style scoped lang="scss">

h3 {
    color: white;
}

</style>