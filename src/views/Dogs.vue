<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <hr>
    <br>
    <v-data-table
      :headers="headers"
      :items="dogs"
      :items-per-page="5"
      class="elevation-1"
    >
      <template
        slot="item.name"
        scope="data"
      >
        <router-link :to="`/pets/dogs/${data.item.id}`" tag="td">{{data.item.name}}</router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dogs',
  data () {
    return {
      headers: [
        {
          text: 'Pet name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Breed',
          align: 'start',
          value: 'breed'
        },
        {
          text: 'Species',
          align: 'start',
          value: 'species'
        },
        {
          text: 'Gender',
          align: 'start',
          value: 'gender'
        },
        {
          text: 'Age',
          align: 'start',
          value: 'age'
        },
        {
          text: 'Color',
          align: 'start',
          value: 'color'
        },
        {
          text: 'Weight',
          align: 'start',
          value: 'weight'
        },
        {
          text: 'Location',
          align: 'start',
          value: 'location'
        },
        {
          text: 'Notes',
          align: 'start',
          value: 'notes'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style scoped>

</style>
