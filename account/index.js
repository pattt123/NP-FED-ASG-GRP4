import { User } from "../lib/user.js";

const saveBtn = document.getElementById("saveBtn");

async function func() {
    // get element for error messages
    const message = document.getElementById("message")
    message.textContent = ""

    // get logged-in user
    const user = await User.loggedInUser();
    if (!user) {
        window.location.href = "/account/login.html"
        return;
    }

    // get display elements
    const nameElement = document.getElementById("namedisplay")
    nameElement.textContent = nameElement.textContent.replace("LOADING", user.name)
    const usernameElement = document.getElementById("usernamedisplay")
    usernameElement.textContent = usernameElement.textContent.replace("LOADING", user.username)


    saveBtn.addEventListener("click", async () => {
        // get inputs
        const usernameInput = document.getElementById("username").value.trim();
        const nameInput = document.getElementById("name").value;
        const currentPasswordInput = document.getElementById("current_password").value;
        const newPasswordInput = document.getElementById("new_password").value;

        // 🔐 verify current password
        if (currentPasswordInput != "") {
            if (currentPasswordInput !== user.password) {
                message.textContent = "Incorrect current password!"
                return;
            }
            user.password = newPasswordInput
        }

        // ✏️ edit fields (only if filled)
        if (usernameInput != "") {
            const check = await User.getUserByUsername(usernameInput);
            if (check != undefined) {
                message.textContent = "User with username " + usernameInput + " already exists!"
                return;
            }
            user.username = usernameInput;
        }
        if (nameInput != "") {
            user.name = nameInput;
        }

        // 💾 save to Firestore
        await user.write();
        window.location.reload()
    });

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("userid")
        localStorage.removeItem("username")
        window.location.href = "/account/login.html"
    })
}

await func()

//References
//Source: OpenAI. (2026). ChatGPT (GPT-4.1) [Large language model]. https://chat.openai.com/
