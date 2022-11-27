<script>

import {useNavigate} from "svelte-navigator"
import { toast } from '@zerodevx/svelte-toast'  

const navigate = useNavigate(); 

let email = "";
let password = "";


const logIn = async () => {
        // Det data/input man får fra browser sendes med POST request i json format som gemmes i data variablen nedenfor.
        const response = await fetch("http://localhost:8080/api/login",{
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        });
        // data er objektet(message) fra backend som vi lavede i userRouter 
        const data = await response.json(); // data/objectet laves om til Json
        console.log(data); 

        // kode forståelse: 
        // {success: true, location: "/api"}
        // {success: false, location: "/login"}
        if (data.success){
            toast.push('Successful login! ', {
                theme: {
                '--toastColor': 'mintcream',
                '--toastBackground': 'rgba(72,187,120,0.9)',
                '--toastBarBackground': '#2F855A'
            }
            })
            navigate(data.location)
        }   else {
            navigate(data.location)
            toast.push('fail to login')    
        }     
}

</script>


<main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div class="form-floating">
        <input type="email" class="form-control" required placeholder="name@example.com" bind:value={email}>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password" bind:value={password}>
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" on:click|preventDefault={logIn}>Login</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  </main>