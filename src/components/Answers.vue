<template>
  <div id="answers">
      <div v-for="answerObj in answersAll" :key="answerObj.id">
          <div v-if="answerObj.id === index"> 
            <button v-for="answer, i in answerObj.answers" :key="i"
            :class="{ 'orange': isActive && curIndex === i, 'green': isCorrect && curIndex === i, 'red': isWrong && curIndex === i}" 
            class="answer" 
            @click='getAnswer(answerObj.answers[i].correct, i)'>
            <h3>{{ answerObj.answers[i].name }}</h3></button>             
          </div>
      </div>
  </div>
</template>

<script>

export default {

name: "Answers",

props: ['currentIndex', 'questions'],

data() {
    
    return {

        isActive: false,
        isCorrect: false,
        isWrong: false,

        isContinue: false,
        pagePrice: -1,

        empty: [],

        index: this.currentIndex,

        curIndex: 0,

        answersAll: [
            {
                id: 1,
                answers: [
                    {name: "Juventus", correct: true},
                    {name: "Milan"},
                    {name: "Inter"},
                    {name: "Genoa"},
                ],
            },
            {
                id: 2,
                answers: [
                    {name: "Robert De Niro"},
                    {name: "Ray Liotta", correct: true},
                    {name: "Joe Pesci"},
                    {name: "Tom Hardy"},
                ],
            },
            {
                id: 3,
                answers: [
                    {name: "Firenze"},
                    {name: "Matera"},
                    {name: "Procida", correct: true},
                    {name: "Trieste"},
                ],
            },
            {
                id: 4,
                answers: [
                    {name: "1994"},
                    {name: "1988"},
                    {name: "1990"},
                    {name: "1991", correct: true},
                ],
            },
            {
                id: 5,
                answers: [
                    {name: "Beatles", correct: true},
                    {name: "Rolling Stones"},
                    {name: "Deep Purple"},
                    {name: "Queen"},
                ],
            },
        ]
    }
},

methods: {

    getQuestion(correct) {

            if(correct === true) {
                this.index = 0;
                this.index = Math.floor(Math.random() * 5) + 1;
            if(this.questions.includes(this.index)) {
                return this.getQuestion(correct)
            } else {
                this.questions.push(this.index);
                this.changeIndex()
                this.pagePrice++;
            }
            } else {
                console.log('Sbagliato')
                this.emptyQuestion()
            }

    },

    getAnswer(correct, index) {

        this.curIndex = index
        console.log(index) 

        this.isActive = true;

        setTimeout(() => {

            if(correct === true) {
                this.isActive = false;
                this.isCorrect = true;
            } else {
                this.isActive = false;
                this.isWrong = true;
            }
            
        }, 2000);


        setTimeout(() => {
            
            this.getQuestion(correct)

            if(correct === true) {
                this.isCorrect = false;
                this.isContinue = true;
                this.getContinue();
                this.pageIndex();
            } else {
                this.isWrong = false;
            }


        },4000);
        
    },
 
    changeIndex() {
        this.$emit('changeIndex', this.index)
    },

    emptyQuestion() {
        this.$emit('emptyQuestion', this.empty)
    },

    getContinue() {
        this.$emit('getContinue', this.isContinue)
    },

    pageIndex() {
        this.$emit('pageIndex', this.pagePrice)
    },
},

}
</script>

<style scoped lang="scss">

.answer {
    width: 40%;
    margin: 20px;
    padding: 20px;
    border-radius: 50px;
    border: 1px solid white;
    cursor: pointer;
    transition: all .6s ease-in-out;
    background-color: rgba(0,0,0,0.1);
    color: white;
    }
    .answer:hover {
      transform: scale(1.1);
    }
    
.orange {
    background-color: orange;
}

.green {
    background-color: green;
}

.red {
    background-color: red;
}    
</style>