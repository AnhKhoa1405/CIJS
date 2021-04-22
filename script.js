const navItem = [{
        name: "Item 1",
        children: [
            "Item 1.1",
            "Item 1.2",
            "Item 1.3",
        ]
    },
    {
        name: "Item 2",
        children: [
            "Item 2.1",
            "Item 2.2",
            "Item 2.3",
            "Item 2.4",
            "Item 2.5",
        ]
    },
    {
        name: "Item 3",
    },
    {
        name: "Item 4",
    },
    {
        name: "Item 5",
    },
]

window.onload = function() {
    for (let i = 0; i < navItem.length; i++) {
        document.getElementsByClassName("menu")[0].innerHTML += `<span> ${navItem[i].name} 
        <div class=" menu-vertical menu_dropdown">
        </div>        
        </span>`;
        if (navItem[i].children != undefined) {
            for (let j = 0; j < navItem[i].children.length; j++) {
                document.getElementsByClassName("menu_dropdown")[i].innerHTML +=
                    `<span> ${navItem[i].children[j]} </span>`;
            }

        }
    }
}