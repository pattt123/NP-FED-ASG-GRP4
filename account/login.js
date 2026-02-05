import { User } from "../lib/user.js"

// 1. Event listener listen for button click
// 2. Get input values of username and passowrd
// 3. Get user by username
let buttonElement = document.getElementById("login");
let textMessage = document.getElementById("textMessage");
buttonElement.addEventListener('click', async () => {
    console.log("Button was clicked");

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (!username || !password) {
        textMessage.textContent = "Please enter username and password.";
        return;
    }

    try {
        // 1. Get user by username
        let user = await User.getUserByUsername(username);

        if (!user) {
            textMessage.textContent = "User not found.";
            return;
        }

        // 2. Check password
        if (user.password !== password) {
            textMessage.textContent = "Invalid password.";
            return;
        }

        // 3. Password matches → login
        user.logIn();
        textMessage.textContent = "Login successful!";
        console.log("Logged in:", user);

        // 4. Redirect
        window.location.href = "/";

    } catch (error) {
        console.error(error);
        textMessage.textContent = "Login error occurred.";
    }
});

//References
//Source: OpenAI. (2026). ChatGPT (GPT-4.1) [Large language model]. https://chat.openai.com/