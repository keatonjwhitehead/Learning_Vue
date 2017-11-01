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
})
