const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal")
const overlay = document.getElementById("overlay")



// for opening popup
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector(btn.dataset.target).classList.add("active")
        overlay.classList.add("active")
    })
})

//for closing popup using X sign
close_modals.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const modal = btn.closest(".modal")
        modal.classList.remove("active")
        overlay.classList.remove("active")
    })
})
//after opening popup if u click outside popup it will close
window.onclick = event=>{
    if (event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal=>{
            modal.classList.remove("active")
        })
        overlay.classList.remove("active")
    }
}
//contact form validation
function validate(){
    // localStorage.setItem('credentials', JSON.stringify({"user1":"pass1","u2":"p2"}));
    // console.log(JSON.parse(localStorage.credentials))

    var name = document.getElementById("name").value 
    var subject = document.getElementById("subject").value 
    var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    var error_message = document.getElementById('error_message')
    error_message.style.padding = "10px"
    var text 
    if (name.length < 2 ){
        error_message.innerHTML = "Please enter valid name (min length: 3)"
        return false
    }
}

function login(){
    user = document.getElementById("username").value
    pwd = document.getElementById("password").value
    error_message.style.padding = "10px"

    if(!user || !pwd){
        error_message.innerHTML = "Please enter email and password"
        return false
        
    }
    if ( !localStorage.credentials ||!JSON.parse(localStorage.credentials)[user]){
        error_message.innerHTML = "User not found"
        return false
    }
    if (JSON.parse(localStorage.credentials)[user]!==pwd){
        error_message.innerHTML = "Password is incorrect"
        return false
    
    }
    localStorage.setItem("loggedIn",11)
    // console.log('lstrge',localStorage)
    error_message.style.background = "#00ff00"

    error_message.innerHTML = "Logged in successfully!"
    
    setTimeout(() => {
        window.location.href='index.html'
        
    }, 2000); 
    return false

}

function signup(){
    fullname = document.getElementById("fullname").value
    user = document.getElementById("username").value
    pwd = document.getElementById("password").value
    error_message.style.padding = "10px"

    if(!user || !pwd){
        error_message.innerHTML = "Please fill all fields"
        return false
        
    }

    if ( localStorage.credentials && JSON.parse(localStorage.credentials)[user]){
        error_message.innerHTML = "User already found. Please choose different username"
        return false
    }
    // if (JSON.parse(localStorage.credentials)[user]!==pwd){
    //     error_message.innerHTML = "Password is incorrect"
    //     return false
    
    // }
    if (localStorage.getItem("credentials")){
        creds = JSON.parse(localStorage.getItem("credentials"))
    }
    else {
        creds = {}    
    }
    creds[user]=pwd
    localStorage.setItem("credentials",JSON.stringify( creds))

    localStorage.setItem("loggedIn",11)
    // console.log('lstrge',localStorage)
    error_message.style.background = "#00ff00"

    error_message.innerHTML = "Signed up successfully!"
    
    setTimeout(() => {
        window.location.href='index.html'
        
    }, 2000); 
    return false

}

function logout(){
    setTimeout(() => {
        localStorage.setItem("loggedIn",0)
        window.location.reload()
        
    }, 2000);
    return false
}