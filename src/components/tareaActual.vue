<template>
    <div id="current-tareas" class="container">
        <h3 v-if="tareas.length > 0">Pendiente({{ tareas.length }})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in tareas">
                {{ todo.body }}
                <div class="btn-group">
                    <button type="button" @click="cambiar(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-cambiar"></span>Cambiar
                    </button>
                    <button type="button" @click="completar(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-ok-circle"></span>Completar
                    </button>
                    <button type="button" @click="quitar(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-quitar-circle"></span> Quitar
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {

        ...mapActions({
            cambiar: "cambiarTarea",
            completar: "completarTarea",
            quitar: "eliminarTarea"
        }),
    },
    computed: {
        ...mapGetters({ tareas: "tareas" }),
    }
}
</script>
<style>
.btn-group {
    float: right;
}
</style>