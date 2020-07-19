(function(){

    Vue.component('filterClient',{
        props:['value'],
        template:`
         <input 
          type="text" 
          id="input" 
          placeholder="Name"
          v-on:input="$emit('input', $event.target.value)"
         >
        `
    });

})(); 