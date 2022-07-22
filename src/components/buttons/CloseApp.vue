<template>
    <button @click.prevent="closeApp()" 
        class="bg-white hover:bg-red-500 text-red-700 font-semibold 
        hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Zatvori igru
    </button>
</template>

<script>
export default {
    name: "CloseApp",
    methods: {
        closeApp() {
             this.$swal.fire({
                title: 'Da li ste sigurni da želite da napustite aplikaciju?',
                text: "Prozor će se automatski zatvoriti posle potvrde",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'red',
                confirmButtonText: 'Želim napustititi',
                cancelButtonText: 'Predomislio sam se',
                }).then((result) => {
                if (result.isConfirmed) {
                    window.open('','_self').close();
                }
            })
        }
    }
}
</script>