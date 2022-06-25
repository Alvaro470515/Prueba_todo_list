<template>
    <div id="get-todo" class="container">
        <input class="form-control" :value="nueva_tarea" @change="obtener" placeholder="Recordar">
        <button class="btn btn-primary" @click="agregarTarea">Agregar</button>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {

        ...mapActions({
            obtenerTareas: "obtenerTareas",
            agregarTarea: "agregarTarea",
            eliminarTareas: "eliminarTareas"
        }),

        obtener(e) {
            this.obtenerTareas(e.target.value)
        },
    },
    computed: {
        ...mapGetters({ nueva_tarea: "nueva_tarea" }),
    }

}
</script>