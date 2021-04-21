const navItem = [{
        name: "Item1",
        children: [
            "Item 1.1",
            "Item 1.2",
            "Item 1.3",
        ]
    },
    {
        name: "Item2",
        children: [
            "Item 2.1",
            "Item 2.2",
            "Item 2.3",
            "Item 2.4",
            "Item 2.5",
        ]
    },
    {
        name: "Item3",
    },
    {
        name: "Item4",
    },
    {
        name: "Item5",
    },
]

window.onload = function() {
    for (let i = 0; i < navItem.length; i++) {
        document.getElementById("renderMenu").insertAdjacentHTML("beforeend",
                `<span id="${navItem[i].name}" onmouseover=addChildern('${navItem[i].name}')>${navItem[i].name}</span>`)
            // if (navItem[i].children != undefined) {
            //     for (let j = 0; j < navItem[i].children.length; j++) {
            //         document.getElementById(`${navItem[i].name}`).insertAdjacentHTML("beforeend",
            //             `<span id="${navItem[i].children[j]}")>${navItem[i].children[j]}</span>`)
            //     }

        // }
    }
}

function addChildern(name) {

}