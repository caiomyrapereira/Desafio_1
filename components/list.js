(function(){
 
    Vue.component('listUser',{
        props:['clients','selectClient','filterClient'],
        template:`
         <ul>
                <li 
                 v-for="(client, index) in clients"
                 v-if="filterClient(client)"
                >
                <a 
                 href="#"
                 @click="selectClient(client)"
                >
                    {{client.name}}
                </a>
            </li>
         </ul>`
    });



})();