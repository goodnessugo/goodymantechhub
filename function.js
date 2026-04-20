document.getElementById("enrollForm").addEventListener("submit", async function (e) {
    e.preventDefault(); //this prevent page reload

    //  declare variables
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value
    };


    // try and catch logic for submittion of form
    try {
        const response = await fetch("http://localhost:5000/api/enroll", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });


        // this makes the result equals the response which is in json format
        const result = await response.json();


        // this execute success message to block and reset the form if the result is successful
        if (result.success) {
            document.getElementById("successMsg").style.display = "block";
            document.getElementById("enrollForm").reset();
        
        // Redirect to homepage
        window.location.href = "./index.html"
        }

    } catch (error) {
        alert("Error submitting form");
    }


});