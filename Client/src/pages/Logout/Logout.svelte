<script>
import {useNavigate} from "svelte-navigator"
import { toast } from '@zerodevx/svelte-toast'

    
const navigate = useNavigate();

const logOut = async () => {
        // Det data/input man får fra browser sendes med POST request i json format som gemmes i data variablen nedenfor.
        const response = await fetch("http://localhost:8080/api/logout",{
            method: 'POST',
            })
        // data er objektet(message) fra backend som vi lavede i userRouter 
        const data = await response.json(); // data/objectet laves om til Json
        console.log(data) 

        // {success: true, location: "/api"}
        // {success: false, location: "/login"}
        if (data.success)
            navigate(data.location) 
            toast.push('Your are logged out!', {
                theme: {
                '--toastColor': 'mintcream',
                '--toastBackground': 'rgba(72,187,120,0.9)',
                '--toastBarBackground': '#2F855A'
            }
            })      
}

</script>
  
<a href="#" on:click={logOut} class="nav-link">Logout</a>