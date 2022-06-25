<template>
    <div id="tareaCompletada-todos">
        <h3 v-if="tareas_completadas.length > 0"> Realizadas({{ tareas_completadas.length }})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="tarea in tareas_completadas">
                {{ tarea.body }}
                <button type="button" @click="eliminar(tarea)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-eliminar-circle"></span> Eliminar
                </button>
            </li>
        </ul>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods:
    {
        ...mapActions({ eliminar: "eliminarTarea" }),
    },
    computed: {

        ...mapGetters({ tareas_completadas: "tareaCompletada" })
    }
}
</script>