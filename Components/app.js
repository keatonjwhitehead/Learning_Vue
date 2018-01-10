Vue.component('greeting', {
     template:'<p>Hey there, I am a re-usable component</p>'
});

new Vue ({
     el: '#vue-app-one'
});

new Vue ({
     el: '#vue-app-two'
});
