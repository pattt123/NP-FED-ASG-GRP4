import { User } from "/lib/user.js";
import { Stall } from "/lib/stall.js";

async function func() {
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

    const imgElement = document.getElementById("stallimg")
    imgElement.src = stall.image

    const h1Element = document.getElementsByTagName("h1")[0]
    h1Element.textContent = stall.name

    const descriptionElement = document.getElementById("description")
    descriptionElement.textContent = stall.description

    let items = ""
    stall.menuitems.forEach(menuitem => {
        let component = itemComponent.replace("%%id%%", menuitem.id)
        component = component.replace("%%name%%", menuitem.name)
        component = component.replace("%%desc%%", menuitem.description)
        component = component.replace("%%price%%", menuitem.price)
        component = component.replace("%%image%%", menuitem.image)
        items = items + component
    })
    const itemsElement = document.getElementById("items")
    itemsElement.innerHTML = items

    const nameInput = document.getElementById("name")
    nameInput.value = stall.name
    const descInput = document.getElementById("desc")
    descInput.value = stall.description

    const editElement = document.getElementById("edit")
    const saveElement = document.getElementById("save")

    editElement.addEventListener("click", async () => {
        h1Element.classList.add("hidden")
        descriptionElement.classList.add("hidden")
        nameInput.classList.remove("hidden")
        descInput.classList.remove("hidden")
        editElement.classList.add("hidden")
        saveElement.classList.remove("hidden")
    })

    saveElement.addEventListener("click", async () => {
        const nameValue = nameInput.value;
        const descValue = descInput.value;
        if (nameValue != stall.name && descValue != stall.description) {
            stall.name = nameValue;
            stall.description = descValue;
            await stall.write()
            window.location.reload()
        } else if (nameValue != stall.name ) {
            stall.name = nameValue;
            await stall.write()
            window.location.reload()
        } else if (descValue != stall.description) {
            stall.description = descValue;
            await stall.write()
            window.location.reload()
        }

        h1Element.classList.remove("hidden")
        descriptionElement.classList.remove("hidden")
        nameInput.classList.add("hidden")
        descInput.classList.add("hidden")
        editElement.classList.remove("hidden")
        saveElement.classList.add("hidden")
    })

}

const itemComponent = `
<div class="item border">
            <div>
                <img src="%%image%%" alt="" width="96px" height="96px">
                <span>
                    <h2>%%name%%</h2>
                    <span class="price">$%%price%%</span>
                    <p>%%desc%%</p>
                </span>
            </div>
            <a href="./item.html?id=%%id%%">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNmNDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtcGVuLWljb24gbHVjaWRlLXNxdWFyZS1wZW4iPjxwYXRoIGQ9Ik0xMiAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTciLz48cGF0aCBkPSJNMTguMzc1IDIuNjI1YTEgMSAwIDAgMSAzIDNsLTkuMDEzIDkuMDE0YTIgMiAwIDAgMS0uODUzLjUwNWwtMi44NzMuODRhLjUuNSAwIDAgMS0uNjItLjYybC44NC0yLjg3M2EyIDIgMCAwIDEgLjUwNi0uODUyeiIvPjwvc3ZnPg==" width="24px" height="24px"/>
            </a>
        </div>
`

await func()

