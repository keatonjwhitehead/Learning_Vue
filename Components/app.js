Vue.component('greeting', {
     template:'<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
     data:function() {
          return{
               name:'Keaton'
          }
     },
     methods:{
          changeName:function(){
               this.name = 'Mario';
          }
     }
});

new Vue ({
     el: '#vue-app-one',
});

new Vue ({
     el: '#vue-app-two'
});
