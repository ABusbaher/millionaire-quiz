<script>
import { mapMutations } from "vuex";

export default {
    name: "QuitQuiz",
    methods: {
        ...mapMutations(["previousScore"]),
        leaveQuiz() {
            this.$swal.fire({
                title: 'Da li ste sigurni da želite da odustanete?',
                text: "Sačuvaćete sumu iz prethodnog pitanja",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'red',
                confirmButtonText: 'Želim odustatati',
                cancelButtonText: 'Predomislio sam se',
                }).then((result) => {
                if (result.isConfirmed) {
                    this.previousScore();
                    this.$router.push('/score');
                }
            })
        }
    }
}
</script>

<template>
    <button
        @click.prevent="leaveQuiz()" 
        class="bg-white hover:bg-red-500 text-red-700 font-semibold 
          hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Odustani
    </button>
</template>
