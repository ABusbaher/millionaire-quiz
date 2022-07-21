<script>
import { mapMutations, mapState } from "vuex";
import QuitQuiz from "./buttons/QuitQuiz.vue";
import ConfirmAnswer from "./buttons/ConfirmAnswer.vue";

export default {
    data() {
        return {
            questions: [ {
                questions_10000: [
                {
                    question: "Koje su boje strumfovi?",
                    answers: { a: "Plave", b: "Žute", c: "Zelene", d: "Crvene" },
                    correctAnswer: "a",
                },
                {
                    question: "Kome se u laži nos povećava?",
                    answers: { a: "Paji Patku", b: "Šilji", c: "Pinokiju", d: "Dambu" },
                    correctAnswer: "c",
                },
                ],
                questions_50000: [
                {
                    question: "Kada u trci prestignete trećeg učesnika na kom mestu ste vi?",
                    answers: { a: "Drugom", b: "Trećem", c: "Prvom", d: "Četvrtom" },
                    correctAnswer: "b",
                },
                {
                    question: "Koji je glavni grad Švajcarske?",
                    answers: { a: "Bern", b: "Cirih", c: "Ženeva", d: "Lucern" },
                    correctAnswer: "a",
                },
                ],
                questions_100000: [
                {
                    question: "Kako se zove grupa čiji su članovi Alan Ford, Jeremija, Bob Rok, Sir Oliver?",
                    answers: { a: "Broj jedan", b: "TNT", c: "THC", d: "BS" },
                    correctAnswer: "b",
                },
                {
                    question: "Kako se zove je najveći okean?",
                    answers: { a: "Pacifik (Tihi okean)", b: "Indijski", c: "Severni ledeni", d: "Atlantik" },
                    correctAnswer: "a",
                },
                ],
                questions_500000: [
                {
                    question: "Šta je u vizitkarti Al Caponea navedeno da je njegovo zanimanje?",
                    answers: { a: "Stolar", b: "Zidar", c: "Prodavac nameštaja", d: "Prodavac osiguranja" },
                    correctAnswer: "c",
                },
                {
                    question: "Koje godine je Ana Ivanović osvija Roland garos?",
                    answers: { a: "2007", b: "2009", c: "2010", d: "2008" },
                    correctAnswer: "d",
                },
                ],
                questions_1000000: [
                {
                    question: "Kako se zove ludi naučnik, najveći protivnik strip junaka Zagora?",
                    answers: { a: "Helingen", b: "Okulus", c: "Ludi Tomi", d: "Profesor Balzak" },
                    correctAnswer: "a",
                },
                {
                    question: "Koliko ljudi u jednoj ekipi počinju vaterpolo utakmicu?",
                    answers: { a: "5", b: "7", c: "8", d: "6" },
                    correctAnswer: "b",
                },
                ],
            }],
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
    },
    methods: {
        ...mapMutations(["nextScore", "setCurrentScore","previousScore", "setCorrenctAnswer"]),
        answered(value) {
           if (value == "") {
                return alert("Niste izabrali odgovor");
            };
            if (value == this.currentQuestionObj.correctAnswer) {
                alert("Odgovor je tačan");
                this.isAnswered = true;
                setTimeout(() => {
                    this.nextScore();
                    this.get_random_question;
                    this.selectedAnswer = '';
                    this.isAnswered = false;
                    this.isFiftyFiftyHelpUsed = true;
                }, 500);
                
            } else {
                alert("Odgovor nije tačan");
                this.isAnswered = true;
                setTimeout(() => {
                    this.$router.push('/score');
                    if (this.currentScore > 100000) {
                        this.setCurrentScore(100000);
                    } else {
                        this.setCurrentScore(0);
                }
                }, 1500);
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
                alert("Čestitamo postali ste milioner");
                return this.$router.push('/score');
            };
            if (this.currentScore < 10000) {
                return this.$router.push('/score');
            };
            const getQuestion = 'questions_' + this.currentScore;
            const questionsObj = this.questions[0][getQuestion];
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