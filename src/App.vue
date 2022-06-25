<template>
  <div id="app" class="container">
    <completarTarea />
    <obtenerTareas />
    <tareaActual />
  </div>
</template>

<script>
import obtenerTareas from './components/obtenerTareas.vue'
import tareaActual from './components/tareaActual.vue'
import completarTarea from './components/completarTarea.vue'
export default {
  components: {
    obtenerTareas,
    tareaActual,
    completarTarea
  }

}
</script>

<style>
body {
  background-color: #fff;
  font-family: Helvetica, sans-serif;
}

input {
  width: 50%;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  align-items: center;


}

button {
  height: 40px;

}

h3 {
  text-align: center;
  color: aquamarine;

}
</style>
