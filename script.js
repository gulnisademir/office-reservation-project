
let formDOM =document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()
    
    let nameInputDOM=document.querySelector('#username')
    let passwordInputDOM=document.querySelector('#password')

    if(nameInputDOM.value&&passwordInputDOM.value){
           console.log("Giriş başarılı.")
           console.log("Username:"+nameInputDOM.value+"  "+"Password:"+passwordInputDOM.value+" ile giriş yapıldı.")
           localStorage.setItem('username',nameInputDOM+'password',passwordInputDOM)

           nameInputDOM.value=""
           passwordInputDOM.value=""
    }else{
        console.log("Hatalı giriş.")
        nameInputDOM.value=""
        passwordInputDOM.value=""
    }
 
}
