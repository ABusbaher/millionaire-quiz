<script>
import { mapMutations, mapState } from "vuex";
import QuitQuiz from "./buttons/QuitQuiz.vue";
import ConfirmAnswer from "./buttons/ConfirmAnswer.vue";
import QuestionJson from "@/Questions.json";

export default {
    data() {
        return {
            selectedAnswer: "",
            currentQuestionObj: {},
            isAnswered: false,
            isFiftyFiftyHelpUsed: false,
        }
    },
    components: {
        QuitQuiz,
        ConfirmAnswer,
    },
    props: {
        twoIncorectAnswers: Array,
        cutByHalfHelpUsed: Boolean,
    },
    methods: {
        ...mapMutations(["nextScore", "setCurrentScore","previousScore", "setCorrenctAnswer"]),
        answered(value) {
           if (value == "") {
                return this.$swal.fire({ 
                    icon: 'error', 
                    title: 'Greška!', 
                    text: 'Niste izabrali odgovor!',
                    confirmButtonText: "OK",
                    confirmButtonColor: "red",
                });
            };
            if (value == this.currentQuestionObj.correctAnswer) {
                this.$swal.fire({
                    icon: 'success',
                    title: 'Čestitamo',
                    text: 'Odgovor je tačan!',
                    confirmButtonText: "Nastavi",
                    confirmButtonColor: "blue",
                });
                this.isAnswered = true;
                setTimeout(() => {
                    this.nextScore();
                    this.get_random_question;
                    this.selectedAnswer = '';
                    this.isAnswered = false;
                    this.cutByHalfHelpUsed == true ? this.isFiftyFiftyHelpUsed = true : this.isFiftyFiftyHelpUsed = false;
                }, 1000);
                
            } else {
                this.$swal.fire({ 
                    icon: 'error', 
                    title: 'Greška!', 
                    text: 'Odgovor nije tačan!',
                    confirmButtonText: "Završi kviz",
                    confirmButtonColor: "red",
                });
                this.isAnswered = true;
                setTimeout(() => {
                    this.$router.push('/score');
                    if (this.currentScore > 100000) {
                        this.setCurrentScore(100000);
                    } else {
                        this.setCurrentScore(0);
                }
                }, 2000);
            }
            
        },
        incorectAnswerDisable(value) {
            return this.twoIncorectAnswers.includes(value)
        }
    },
    computed: {
        get_random_question() {
            if (this.currentScore > 1000000) {
                this.previousScore();
                this.$swal.fire({
                    title: 'Čestitamo postali ste milioner!!!',
                    width: 600,
                    padding: '3em',
                    color: 'blue',
                    background: '#fff',
                    imageUrl: "src/assets/images/firework2.gif",
                    imageWidth: 550,
                    imageHeight: 225,
                    imageAlt: "Fireworks",
                    confirmButtonText: "Završi kviz",
                    confirmButtonColor: "blue",
                    })
                return this.$router.push('/score');
            };
            if (this.currentScore < 10000) {
                return this.$router.push('/score');
            };
            const getQuestion = 'questions_' + this.currentScore;
            const questionsObj = QuestionJson.questions[0][getQuestion];
            this.currentQuestionObj =  questionsObj[Math.floor(Math.random()* questionsObj.length)];
            this.setCorrenctAnswer(this.currentQuestionObj.correctAnswer);
            return this.currentQuestionObj;
        },
        ...mapState(['currentScore', 'scores', 'correctAnswer'])
    }
}
</script>

<template>
     <div class="h-60 flex items-center justify-center">
        <h2 class="text-white text-3xl">
          {{ get_random_question.question }}
        </h2>
      </div>

    <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-2">
        <div 
            :key="answer" v-for="(answer, key) in get_random_question.answers" 
            class="col-span-2 mr-3 mb-3"
            :class="[isFiftyFiftyHelpUsed == false && incorectAnswerDisable(key) ? 'invisible' : '']"
        >
            <input class="sr-only peer" type="radio" :value="key" name="answer" 
                v-model="selectedAnswer" :id="key" 
            >
            <label 
                class="flex p-5 bg-white border border-gray-300 rounded-lg 
                    cursor-pointer focus:outline-none  peer-checked:ring-blue-800
                    peer-checked:ring-4 peer-checked:border-transparent" 
                :class="[isAnswered && key == get_random_question.correctAnswer ? 'bg-green-300' : '',
                    isAnswered && this.selectedAnswer == key && key != get_random_question.correctAnswer ? 'bg-red-300' : '',
                    isAnswered == false ? 'hover:bg-gray-100' : '']"
                :for="key">{{key}}: {{ answer }}
            </label>
        </div>
    </div>

    <div class="flex justify-between">
        <QuitQuiz/>
        <ConfirmAnswer
            :value=this.selectedAnswer
            @onClick="answered"
        />
    </div>

</template>