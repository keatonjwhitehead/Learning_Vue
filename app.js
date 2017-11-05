new Vue({
    el: '#vue-app-data-methods',
    data: {
        name: 'Keaton',
        job: 'Developer',

    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
new Vue({
     el: '#vue-app-data-binding',
     data: {
          website: 'https://moodle.cs.colorado.edu/',
          websiteTag: '<a href="https://moodle.cs.colorado.edu/">The Moodle homepage</a>',
          job: 'Developer'
     }
});
new Vue({
     el: '#vue-app-events',
     data: {
          age: 20,
          x: 0,
          y:0
     },
     methods: {
          add: function(inc){
             this.age += inc;
          },
          subtract: function(dec){
             this.age -= dec;
          },
          balance: function(){
               if (this.age >= 100){
                    this.age = 20;
               }
          },
          updateXY:function(event){
               this.x = event.offsetX;
               this.y = event.offsetY;
          },
          click:function(){
               alert('You do not have access to this site yet :(');
          }
     }
});
new Vue({
     el: '#vue-app-event-handeling',
     data: {
          age: 20,
          x: 0,
          y:0
     },
     methods: {
          add: function(inc){
             this.age += inc;
          },
          subtract: function(dec){
             this.age -= dec;
          },
          ageCheck:function(message, event){
               if(age < 18){
                    event.prevent()
                    alert(message);
               }
          }


     }
});
new Vue({
     el: "#vue-app-keyboard-events",
     data: {

     },
     methods: {
          logName:function(){
               console.log('You entered your name');
          },
          logAge:function(){
               console.log('You entered your age');
          }
     }
})
