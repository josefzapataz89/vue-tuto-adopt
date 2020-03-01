<template>
  <div>
    <h1>Cats for Adoption</h1>
    <hr>
    <v-data-table
      :headers="headers"
      :items="cats"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import cats from '@/data/cats'
export default {
  name: 'Cats',
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
      ],
      cats
    }
  }
}
</script>

<style scoped>

</style>
