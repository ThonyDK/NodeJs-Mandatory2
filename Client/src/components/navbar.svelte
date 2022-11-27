<script>
    import {Router, Link, Route} from "svelte-navigator";
    import Logout from "../pages/Logout/Logout.svelte"


</script>


    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link to="/api" class="navbar-brand" aria-current="page">Home</Link>
          
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">Login</Link>
              </li>
              <li class="nav-item">
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <!--
    <nav class="navbar navbar-dark bg-dark">
        <Link to="/api">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>    
    </nav>
    -->

