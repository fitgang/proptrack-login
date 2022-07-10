// 'login' UI will be displayed by default
let uiInView = ["login"];

let sectionDisplayed = document.getElementById(`${uiInView[0]}-section`),
submitBtn = sectionDisplayed.querySelector("button.submit");

// Removing an animation
setTimeout(()=>sectionDisplayed.classList.remove("pop-up"), 1000);

submitBtn.addEventListener("click", checkUIAndAct);

function checkUIAndAct(e) {
  // This functions finds the UI displayed and decides the flow
  switch (uiInView) {
    case "password":
    // A unique function will carry a different flow from here to verify the password  
    break;
    case "register": 
    // A unique function will carry a different flow from here to register a new user
    break;
    default:
    // 'login' UI is displayed by default 
    checkInputAndAct()
  }
}

function checkInputAndAct() {
  const input = document.getElementById("input-account").value.trim();

  if (input.length === 0) {
    // If the input element is empty, ask the user for an email
    alert("Please enter an email.");
    return
  }

  // Check if the user is an existing user
  verifyUser(input)

  function verifyUser(userEmail) {
    // This function verifies if the user is an existing one or not
    // A get request will be made to an API with the request body containing the userEmail
    // A response will be sent from the server
    // If the response sent says the user is existing, then the 'password' UI will be displayed
    // Else the 'register' UI will be displayed

    // For development, a single email is used for verification,i.e., abc123@email.com
    if (userEmail === "abc123@email.com") {
      // Existing user
      changeUITo("password");
      
    }
    else {
      // New user
      changeUITo("register");
    }
  }
}

function changeUITo(name) {
  // Hide the existing UI displayed
  sectionDisplayed.classList.add("shift-to-left");
  // Update UI in JS
  uiInView.unshift(name);
  sectionDisplayed = document.getElementById(`${name}-section`);
  submitBtn = sectionDisplayed.querySelector("button.submit");
  // Display the next UI
  sectionDisplayed.classList.remove("shift-to-left", "shift-to-right"); 
}
