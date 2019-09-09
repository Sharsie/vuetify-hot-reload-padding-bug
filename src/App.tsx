import { Component, Vue } from 'vue-property-decorator';
import { VApp, VAppBar, VContent } from 'vuetify/lib';

@Component({
  components: {
    VApp,
    VAppBar,
    VContent,
  },
})
export default class App extends Vue {
  public render() {
    return (
        <v-app id='app'>
          <v-app-bar app>
            Padding bug
          </v-app-bar>
          <v-content>
            Content
          </v-content>
        </v-app>
    );
  }
}

