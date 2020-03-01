<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="dogs"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'
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
      dogs
    }
  }
}
</script>

<style scoped>

</style>
