function register(){
    let name=document.getElementById("name").value
    let mail=document.getElementById("mail").value
    let password=document.getElementById("password").value
    let contact=document.getElementById("number").value
    let address=document.getElementById("address").value

    if(name=="" || mail=="" || password=="" || contact=="" || address==""){
        alert("please fill your input fields ")

    }

    localStorage.setItem("username",name)
    localStorage.setItem("usermail",mail)
    localStorage.setItem("userpass",password)
    localStorage.setItem("usernum",contact)
    localStorage.setItem("useradd",address)

    alert("Account Create Successfully")

    window.location.href="login.html"

}

function login(){
    
    let loginmail=document.getElementById('mail').value
    let loginpass=document.getElementById('password').value

    if(loginmail=="" || loginpass=="" ){
        alert('Please Fill Your Input Feilds')
    }
    else{
        let registermail=localStorage.getItem("usermail")
        let registerpass=localStorage.getItem("userpass")

         if(loginmail == registermail && loginpass == registerpass){
        

          window.location.href="Home.html"
    }
    else{
        alert("Invalid User Mail or Passwors!")

        window.location.href="register.html"
    }
}
   }

   let username=localStorage.getItem('username')

   document.getElementById('username').innerText=username

   function logout(){
    localStorage.clear();
    

   }

   let account=document.getElementById('account');
   let logoutbtn=document.getElementById('logoutbtn');

   if(username){
    account.style.display='none'
    logoutbtn.style.display='block'
   }
   else{
     account.style.display='block'
    logoutbtn.style.display='none'
   }