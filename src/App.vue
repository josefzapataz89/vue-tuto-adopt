<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    >
      <div id="nav">
        <v-list rounded>
          <v-list-item-group color="primary">
            <v-list-item :key="home" :to="'/'" link>
              <v-list-item-icon>
                <i class="material-icons">
                  home
                </i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :key="cats" :to="'/cats'" link>
              <v-list-item-icon>
                <i class="material-icons">
                  pets
                </i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Cats</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :key="dogs" :to="'/dogs'" link>
              <v-list-item-icon>
                <i class="material-icons">
                  pets
                </i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Dogs</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :key="pet" :to="'/pet'" link>
              <v-list-item-icon>
                <i class="material-icons">
                  pets
                </i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pet</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Adopt a Pet</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    primaryDrawer: {
      model: 'dark',
      type: 'Temporary',
      clipped: true,
      floating: true,
      mini: false
    },
    footer: {
      inset: false
    }
  })
}
</script>
