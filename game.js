const debug = document.getElementsByClassName('debug')[0];


// Structure of DOM
const Structure = {
    viewport:{
        class: 'viewport',
        parent: 'body',
        type: 'div'
    },
    console:{
        class: 'console',
        parent: 'viewport',
        type: 'div'
    },
    title:{
        class: 'title',
        parent: 'console',
        type: 'div'
    },
    description:{
        class: 'description',
        parent: 'console',
        id: 'description',
        type: 'div'
    },
    stats:{
        class: 'stats',
        parent: 'console',
        type: 'div'
    },
    nav:{
        class: 'nav',
        parent: 'console',
        type: 'div'
    },
    // btn:{
    //     class: 'btn-1',
    //     parent: 'nav',
    //     type: 'button'
    // },
    // btn2:{
    //     class: 'btn-2',
    //     parent: 'nav',
    //     type: 'button'
    // },
    // btn3:{
    //     class: 'btn-3',
    //     parent: 'nav',
    //     type: 'button'
    // }
}


// Objects
const Locations = {
    townsquare: ["Store", "Cave", "Dragon's Den"],
    store: ["Townsquare", "Buy", "Sell"]
}


// This will populate the DOM with appropriate html tags
let initialization = (function () {
    const struct_key = Object.keys(Structure);
    let nameOfElement, parent, type, classname, child;
    for (let i = 0; i < struct_key.length; i++) {
        nameOfElement = struct_key[i];
        parent = Structure[nameOfElement]['parent'];
        type = Structure[nameOfElement]['type'];
        classname = Structure[nameOfElement]['class'];

        if (parent === 'body') {
            child = document.createElement(type);
            document.body.appendChild(child);
            child.className = classname;
        } else if (nameOfElement.slice(0,3)==='btn') {
            child = document.createElement(type);
            document.getElementsByClassName(parent)[0].appendChild(child);
            child.classList.add('btn', classname);
        } else {
            child = document.createElement(type);
            document.getElementsByClassName(parent)[0].appendChild(child);
            child.className = classname;
        }
    }
})();


// This will populate the DOM with appropriate buttons
function populate_button (location) {
    let btn;
    for (let i = 0; i < Locations[location].length; i++) {
        btn = document.createElement('button');
        document.getElementsByClassName('nav')[0].appendChild(btn);
        btn.classList.add('btn', `btn-${i+1}`);
        btn.innerHTML = Locations[location][i];
    }
};
populate_button('townsquare');


// global variables



// DOM elements
let title = document.getElementsByClassName('title')[0];
let description = document.getElementsByClassName('description')[0];
let stats = document.getElementsByClassName('stats')[0];
let nav = document.getElementsByClassName('nav')[0];
let btn = document.getElementsByClassName('btn');

