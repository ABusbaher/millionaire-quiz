<script>
import IconClose from "./icons/IconClose.vue";
import Modal from "./Modal.vue";
import { mapState } from "vuex";


export default {
    name: "AudienceHelp",
    data() {
        return {
            isOpen: false,
            audienceHelpUsed: false,
        };
    },
    components: {
        IconClose,
        Modal,
    },
    computed: {
        ...mapState(['correctAnswer']),
        audience_answers() {
            // array of answers
            let options = ['a', 'b', 'c', 'd'];

            //takeout correct answer from options and get one wrong answer randomly
            const correctAnswer = this.correctAnswer;
            options = options.filter(function(item) {
                return item !== correctAnswer
            });
            const randomWrongAnswer = options[Math.floor(Math.random() * options.length)];

            // new object with correct and incorect answer
            const audienceAnswers = {'correct_answer': correctAnswer.toUpperCase(), 'wrong_answer': randomWrongAnswer.toUpperCase()}
            return audienceAnswers; 
        },
    }
}
</script>
<template>
    <Modal
        @modal-show="isOpen = true"
        @modal-close="isOpen = false, audienceHelpUsed = true"
        :helpUsed="audienceHelpUsed"
        :isOpenModal="isOpen"
        modalTitle="Pomoć publike"
    >
        <template #buttonIcon>
            <font-awesome-icon icon="fa-solid fa-people-group"/>
        </template>
        <template #modalText>
            <p class="mb-4 text-sm">Publika je glasala i rezultati su sledeći: </p>
            <p class="mb-4 text-sm">80% za odgovor pod <strong>{{ audience_answers["correct_answer"] }}</strong>.</p>
            <p class="mb-4 text-sm">20% za odgovor pod <strong>{{ audience_answers["wrong_answer"] }}</strong>.</p>
        </template>
    </Modal>
   
</template>