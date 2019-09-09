import Vue from 'vue';
import { VApp, VAppBar, VContent } from 'vuetify/lib';

export default Vue.extend({
    name: 'App',
    components: {
        VApp,
        VAppBar,
        VContent,
    },
    render: (createElement) => {
        return createElement('v-app', [
           createElement('v-app-bar', {
               props: {
                   app: true,
               },
           }, 'Padding bug .tsx'),
           createElement('v-content', 'Test'),
        ]);
    },
});
