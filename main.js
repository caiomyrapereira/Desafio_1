(function Main(){
  

   const App = new Vue({
       el:'#app',
       data:{
         clients:[
            {
                name: "Kauan Pereira Rocha",
                telefone: "(81) 9479-5548"
            },
            {
                name: "Antônio Oliveira Cunha",
                telefone: "(73) 3626-4953"
            },
            {
                name: "Paulo Ferreira Sousa",
                telefone: "(61) 5620-5278"
            },
            {
                name: "Beatrice Silva Gomes",
                telefone: "(81) 9362-3427"
            },
            {
                name: "Gabriela Oliveira Sousa",
                telefone: "(19) 6770-3263"
            },
            {
                name: "Alex Oliveira Correia",
                telefone: "(32) 6974-7896"
            },
            {
                name: "Breno Azevedo Martins",
                telefone: "(91) 7167-8651"
            },
            {
                name: "Giovanna Rocha Barros",
                telefone: "(21) 6495-8033"
            },
            {
                name: "Daniel Sousa Carvalho",
                telefone: "(81) 9852-4166"
            },
            {
                name: "Luis Rodrigues Barros",
                telefone: "(85) 8946-9329"
            },
            {
                name: "Felipe Fernandes Almeida",
                telefone: "(21) 7167-9927"
            },
            {
                name: "Lavinia Ribeiro Ferreira",
                telefone: "(35) 6497-5127"
            },
            {
                name: "Danilo Araujo Costa",
                telefone: "(91) 5514-7876"
            },
            {
                name: "Leila Fernandes Cunha",
                telefone: "(11) 5356-3574"
            },
            {
                name: "Livia Silva Ribeiro",
                telefone: "(47) 4241-8712"
            }
        ],
        clientfullName:'',
        message:''

       },
       methods: {
        filterClient(client){
            const regex = RegExp('^'+this.removeSpace(this.clientfullName),'gim');
            return regex.test(client.name);     
        },
        removeSpace(string){
            const newString = string.replace(/\s{2,}/g, ' ').trim();
            return newString;
        },    
        selectClient(client){
            this.message = client.name+' - '+client.telefone;
        }
       },
       template:`
        <div>
            <filterClient
             v-model="clientfullName" 
            >
            </filterClient>
            <listUser 
             v-bind:clients="clients"
             v-bind:selectClient="selectClient"
             v-bind:filterClient="filterClient"
            >
           </listUser>
           <message
            v-bind:message="message"
           >
           </message>
        </div>
       `

   })
  

})();