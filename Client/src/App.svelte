<script>
  import {Router, Link, Route} from "svelte-navigator";
  import Navbar from "./components/navbar.svelte";
  import Login from "./pages/Login/Login.svelte";  
  import Home from "./pages/Home/Home.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'

  
</script>

<main>
<Router>
  <Navbar />
  <div>
    <Route path="/api"><Home /></Route>
    <Route path="/contact"><Contact /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/logout"></Route>
  </div>

</Router>  

<SvelteToast />


</main>

<style>
  
</style>


