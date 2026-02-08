import { User } from "/lib/user.js";
import { MenuItem } from "/lib/menuitem.js";
import { Stall } from "/lib/stall.js";
import { IMGAPIKEY } from "/env.js";

async function func() {
    // Load data from database and check that stall owner is allowed to edit this item
    const user = await User.loggedInUser()
    if (user == undefined) {
        window.location.href = "/"
        return;
    } 
    const stall = await Stall.getStallById(user.stall)
    if (stall == undefined) {
        window.location.href = "/"
        return;
    }
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id")
    if (!params.has('id')) {
        id = crypto.randomUUID()
    }
    const menuitem = await MenuItem.getMenuItemByStallIdAndId(stall.id, id)

    const fileElement = document.getElementById("fileinput")
    fileElement.addEventListener("change", () => {
        imageElement.src = URL.createObjectURL(fileElement.files[0])
        console.log(fileElement.files[0])
    })
    const imageElement = document.getElementById("image")
    const nameElement = document.getElementById("itemname")
    const priceElement = document.getElementById("price")
    const descElement = document.getElementById("desc")
    const submit = document.getElementById("submit")
    
    // Load exisitng menu item details if the id is valid, if not will be creating new menu item
    let image = ""
    if (menuitem == undefined) {
        submit.textContent = "Create"
    } else {
        imageElement.src = menuitem.image;
        image = menuitem.image
        nameElement.value = menuitem.name
        priceElement.value = menuitem.price
        descElement.value = menuitem.description
    }

    // Handle form submission and updating of the menu item
    submit.addEventListener("click", async () => {
        const errorElement = document.getElementById("error")
        if (!errorElement.classList.contains("hidden")) {
            errorElement.classList.add("hidden")
        }
        if (submit.disabled) {
            const errormsgElement = document.getElementById("errormsg")
            errormsgElement.textContent = "Slow down!"
            errorElement.classList.remove("hidden")
            return;
        }
        submit.disabled = true
        setTimeout(() => {
            submit.disabled = false;
        }, 1000*10)
        const price = parseFloat(priceElement.value);
        if (isNaN(price)) {
            const errormsgElement = document.getElementById("errormsg")
            errormsgElement.textContent = "Price has to be a valid number!"
            errorElement.classList.remove("hidden")
            return;
        }

        const name = nameElement.value
        const desc = descElement.value;
        
        // Handle image uploading
        if (fileElement.files && fileElement.files[0]) {
            const imageFile = fileElement.files[0];
            try {
                const api = "https://img.potassium.sh"
                const res = await fetch(api + "/new", {
                    method: "POST",
                    headers: {
                        "Content-Type": imageFile.type,
                        "X-API-Key": IMGAPIKEY,
                    },
                    body: imageFile,
                });
                const result = await res.json()
                image = api + result.url
                imageElement.src = image
            } catch (error) {
                const errormsgElement = document.getElementById("errormsg")
                errormsgElement.textContent = `Unable to upload image: ${error.message}`;
                errorElement.classList.remove("hidden");
                return;
            }
        }
        
        const newMenuItem = new MenuItem(id, stall.id, name, desc, image, price)
        await newMenuItem.write()
        window.location.href = "/vendor/edit/"
    })
}

await func()
