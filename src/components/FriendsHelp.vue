<script>
import IconClose from "./icons/IconClose.vue";
import Modal from "./Modal.vue";
import { mapState } from "vuex";


export default {
    name: "FriendsHelp",
    data() {
        return {
            isOpen: false,
            friendHelpUsed: false,
        };
    },
    components: {
        IconClose,
        Modal,
    },
    computed: {
        ...mapState(['correctAnswer']),
        friends_answer() {
            // array of answers
            let options = ['a', 'b', 'c', 'd'];

            //takeout correct answer from options and get one wrong answer randomly
            const correctAnswer = this.correctAnswer;
            options = options.filter(function(item) {
                return item !== correctAnswer
            });
            const randomWrongAnswer = options[Math.floor(Math.random() * options.length)];

            // new array with three correct and one incorrect answer and choose one randomly (75% to be correct)
            const possibleAnswers = [correctAnswer, correctAnswer, correctAnswer, randomWrongAnswer];
            const friendsAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
            return friendsAnswer.toUpperCase(); 
        },
    }
}
</script>
<template>
    <Modal
        @modal-show="isOpen = true"
        @modal-close="isOpen = false, friendHelpUsed = true"
        :helpUsed="friendHelpUsed"
        :isOpenModal="isOpen"
        modalTitle="Pomoć prijatelja"
    >
        <template #buttonIcon>
            <font-awesome-icon icon="fa-phone"/>
        </template>
        <template #modalText>
            <p class="mb-4 text-sm"><i>Prijatelj:</i> Tačan odgovor je pod <strong>{{ friends_answer }}</strong>.</p>
            <p class="mb-4 text-sm"><i>Ja:</i> Koliko si siguran?</p>
            <p class="mb-4 text-sm"><i>Prijatelj:</i> 75%</p>
        </template>
    </Modal>
</template>