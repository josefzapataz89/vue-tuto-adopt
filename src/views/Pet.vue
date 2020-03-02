<template>
  <v-row>
      <v-col md="4" offset="4">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title>
            <h1>{{$attrs.species}}</h1>
          </v-card-title>
          <h2>Name: <small>{{animal.name}}</small></h2>
          <h3>Age: <small>{{animal.age}}</small></h3>
          <h3>Color: <small>{{animal.color}}</small></h3>
          <h3>Gender: <small>{{animal.gender}}</small></h3>
          <h3>Weight: <small>{{animal.weight}}</small></h3>
          <h3>Location: <small>{{animal.location}}</small></h3>
          <h3>Notes: <small>{{animal.notes}}</small></h3>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Pet',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    this.animal = this[this.$attrs.species][this.$attrs.id]
  }
}
</script>

<style scoped>
  v-row {
    width: calc(30vw);
  }
  v-card__title {
    text-transform: capitalize !important;
  }
</style>
