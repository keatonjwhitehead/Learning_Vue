new Vue({
    el: '#vue-app',
    data: {
        name: 'Keaton',
        job: 'Developer'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});