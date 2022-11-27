<h1 class="color">Contact</h1>
<h3>Submit some feedback about the website</h3>

<!-- /api/contact refferere til contactRouter app.post "/api/contact"-->
<form action="/api/contact" method="POST">
    <label for="name">Name: </label>
    <br>
    <input id="name" name="name: " placeholder="Name">
    <br>
    <label for="email">Email: </label>
    <br>
    <input id="email" name="email" type="email" placeholder="email">
    <br>
    <label for="message">Message</label>
    <br>
    <textarea placeholder="Type message" name="message" cols="30" rows="15" ></textarea>
    <br>
    <br>
    <button type="submit">Submit Feedback</button>
</form>


