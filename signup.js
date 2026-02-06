import { User } from "../lib/user.js"

// 1. Event listener listen for button click
let buttonElement = document.getElementById('signup');

buttonElement.addEventListener('click', async () => {
    console.log("Button was clicked")

    // 2. Get values from inputs (.value)
    let name = document.getElementById("full_name").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("new_password").value
    let dob = document.getElementById("dob").value
     
    if (!name || !username || !password || !confirmPassword || !dob) {
        console.log("Please fill in all fields.");
        return;
    }

    // 3. Get user by username, and ensure its undefined.
    //user = await User.getUserByUsername("bob")
    //if (user === username) {
      //  console.log("User already exsits!")
    //}

    // 4. Make sure password matches in both first and re-enter field
    if (password !== confirmPassword) {
        console.log("Passwords do not match.");
    }
    
    // 5. Make sure age from date of birth is > 13
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 13) {
            message.textContent = "You must be at least 13 years old.";
            return;
        }

    try {
        // 5. Check if username already exists
        const existingUser = await User.getUserByUsername(username);
        if (existingUser) {
            message.textContent = "Username already exists.";
            return;
        }

        // 6. Create new user
        const newUser = new User(
            crypto.randomUUID(),
            username,
            password,
            name,
            dob,
            undefined
        );

        // 7. Write to Firestore
        //await newUser.write();

        // 8. Log user in
        newUser.logIn();

        // 9. Redirect
        window.location.href = "/";

    } catch (error) {
        console.error(error);
        console.log("Signup failed. Try again.");
    }
}); 

//References
//Source: OpenAI. (2026). ChatGPT (GPT-5.2) [Large language model]. https://chat.openai.com/