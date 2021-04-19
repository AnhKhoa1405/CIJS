const test = [{
        name: "Item 1",
    },
    {
        name: "Item 2",
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
    {
        name: "Item 6",
    },
];

window.onload = function() {
    for (let i = 0; i < test.length; i++) {
        document.getElementById("renderMenu").insertAdjacentHTML("beforeend",
            `<span>${test[i].name}</span>`)
    }
}