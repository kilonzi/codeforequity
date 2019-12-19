import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPi9RtnXBJzMcT3noIvTDuwbWHCPpDbLk",
    authDomain: "code-for-equity.firebaseapp.com",
    databaseURL: "https://code-for-equity.firebaseio.com",
    projectId: "code-for-equity",
    storageBucket: "code-for-equity.appspot.com",
    messagingSenderId: "687646693341",
    appId: "1:687646693341:web:1b9e003da4d42c9fac4834",
    measurementId: "G-DFVT0WJF79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')