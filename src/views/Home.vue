<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="8">
        <h1 class="text-center">Adopt a new best friend. <small><b>({{ animalCount }} Pet's [Cats: {{ getAllCats.length }} / Dogs: {{ getAllDogs.length }}])</b></small></h1>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn
          @click.prevent="togglePetForm"
          outlined large color="indigo">
          <v-icon>mdi-plus</v-icon>
          Add a new Pet
        </v-btn>
      </v-col>
    </v-row>

    <v-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <v-container>
        <v-row>
          <v-text-field
            v-model="formData.name"
            :rules="nameRules"
            :counter="15"
            label="Pet's Name"
            required
          ></v-text-field>
        </v-row>
        <v-row align="center">
          <v-select
            :items="['cats', 'dogs']"
            v-model="formData.species"
            label="Specie"
            required
          ></v-select>
        </v-row>
        <v-row>
          <v-text-field
            v-model="formData.age"
            label="Pet's Age"
            type="number"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn outlined large color="primary" type="submit">Add new pet</v-btn>
          <v-btn outlined large color="warning" @click.prevent="clear">clear</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        species: '',
        age: 0
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'animalCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, name, age } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      console.log('saving')
      this.addPet(payload)

      // reset form after submit
      this.clear()
    },
    clear () {
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
