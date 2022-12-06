<script>
import { mapState } from "vuex";


export default {
    name: "CurrentAmount",
    computed: {
        ...mapState(['currentScore','scores']),
        format_scores() {
            // reverse order of scores and takeout first and last element (0 and 2000000)
            const reverseScores = this.scores.slice(1, -1).reverse();
            return reverseScores;
        },
    }
}
</script>
<template>
    <div class="grid grid-cols-3 gap-1">
        <div></div>
        <div>
          <h3 class="text-white text-center text-xl text-bold pt-10 pb-5">
          Pitanja za:
          </h3>
         <table class="border-separate border border-white text-white w-full text-right">
            <tbody :key="score" v-for="(score) in format_scores" >
                <tr>
                    <td class="border border-white p-3"
                        :class="[
                            this.currentScore == score ? 'border border-blue-800 bg-white text-blue-800' : ''
                            ,score == 100000 ? 'border border-gray-400 text-gray-400' : ''
                            ]"
                        >{{score}}
                    </td>
                </tr>
            </tbody>
         </table>
        </div>
      </div>
</template>