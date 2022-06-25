import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    nueva_tarea: ''
  },

  getters: {
    /* obtienen daots del state */
    nueva_tarea: state => state.nueva_tarea,
    tareas: state => state.tareas.filter((tarea) => { return !tarea.completada }),
    tareaCompletada: state => state.tareas.filter((tarea) => { return tarea.completada })
  },

  mutations: {
    /* Son acciones para modificar el state */
    obtenerTareas(state, tarea) {
      state.nueva_tarea = tarea
    },
    agregarTarea(state) {
      console.log('agregarTarea')
      state.tareas.push({
        body: state.nueva_tarea,
        completada: false
      })
      console.log(state.tareas)
    },
    cambiarTarea(state, tarea) {
      var tareas = state.tareas
      tareas.splice(tareas.indexOf(tarea), 1)
      state.tareas = tareas
      state.nueva_tarea = tarea.body
    },
    eliminarTarea(state, tarea) {
      var tareas = state.tareas
      tareas.splice(tareas.indexOf(tarea), 1)

    },
    completarTarea(state, tarea) {
      tarea.completada = !tarea.completada
    },
    eliminarTareas(state) {
      state.nueva_tarea = ''
    }
  },
  actions: {
    /* Son metodos para que hagan una mutacion del state "commit" */
    obtenerTareas({ commit }, tarea) {
      commit('obtenerTareas', tarea)
    },
    agregarTarea({ commit }) {
      commit('agregarTarea')

    },
    cambiarTarea({ commit }, tarea) {
      commit('cambiarTarea', tarea)
    },
    eliminarTarea({ commit }, tarea) {
      console.log(tarea)
      commit('eliminarTarea', tarea)
    },
    completarTarea({ commit }, tarea) {
      console.log('pare')
      commit('completarTarea', tarea)
    },
    eliminarTareas({ commit }) {
      commit('eliminarTareas')
    }

  },


})