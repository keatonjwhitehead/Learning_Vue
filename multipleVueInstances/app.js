var one = new Vue ({
     el:"#vue-app-one",
     data:{
          title:'View App One',
     },
     methods:{

     },
     computed:{
          greet:function(){
               return 'Hello from app one :)';
          }
     }
});
var two = new Vue ({
     el:"#vue-app-two",
     data:{
          title:'View App Two',
          show:true
     },
     methods:{
          changeTitle:function(){
               one.title = "Title changed";
               show = false;
          },
          changeTitleBack:function(){
               one.title = "View app-one";
               show = true;
          }
     },
     computed:{
          greet:function(){
               return 'Yo dudes, this is app 2 speaking to ya :)';
          }
     }
});
