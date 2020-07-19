(function(){

    Vue.component('message',{
        props:['message'],
        template:`
         <p>
            Nome selecionado:
            <b>{{message}}</b>
        </p>`
    });

})();