/* Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios. */

const app = new Vue({
    el:"#app",
    data:{
        email: ""
    },
    created(){
       this.generateEmail()
    },
    methods:{
        generateEmail(){
            let newEmail = [];
            for(let i =0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((element) =>{
                    newEmail.push(element.data.response);
                }) 
                this.email = newEmail;
                console.log(newEmail);
            }
        }
    }
})
            