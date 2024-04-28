function myfunc() {
    let arr = ['avinash', 'abhinaya', 'sridhar', 'vasavi'];
  
    for (let i = 0; i < arr.length; i++) {
      // Use template literal for safe string interpolation
      document.getElementById("main").innerHTML = `<marquee> <h1>${arr[i]}</h1></marquee>`
      document.getElementById("main").style.color = "red";
      document.getElementById("main").style.fontSize = "20px";
    }
  }

  function mytheme() {
    const navbar = document.getElementsByClassName("navbar")[0]; // Select the first navbar element
    if (navbar) {
      navbar.classList.toggle("navbar-dark"); // Toggle between light and dark themes
    } else {
      console.error("Navbar element not found!"); // Handle potential error
    }
  }
  