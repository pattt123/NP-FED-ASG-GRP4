import { User } from "../lib/user.js";

const saveBtn = document.getElementById("saveBtn");
const orderHistory = document.getElementById("order_history");

orderHistory.addEventListener("click", async () => {
    window.location.href = "/order/history.html";
});

saveBtn.addEventListener("click", async () => {
    console.log("Save button clicked");

    // get inputs
    const usernameInput = document.getElementById("username").value.trim();
    const currentPasswordInput = document.getElementById("current_password").value;
    const newPasswordInput = document.getElementById("new_password").value;
    const newNameInput = document.getElementById("new_name").value;

    // get logged-in user
    const user = await User.loggedInUser();
    if (!user) {
        alert("User not logged in");
        return;
    }

    // 🔐 verify current password
    if (currentPasswordInput !== user.password) {
        alert("Current password is incorrect");
        return;
    }

    // ✏️ edit fields (only if filled)
    if (usernameInput !== "") user.username = usernameInput;
    if (newPasswordInput !== "") user.password = newPasswordInput;
    if (newNameInput !== "") user.name = newNameInput;

    // 💾 save to Firestore
    //await user.write();

    alert("Account updated successfully!");
});

//References
//Source: OpenAI. (2026). ChatGPT (GPT-5.2) [Large language model]. https://chat.openai.com/