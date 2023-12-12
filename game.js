const debug = document.getElementsByClassName('debug')[0];

// Structure of html
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
    btn1:{
        class: 'btn-1',
        parent: 'nav',
        type: 'button'
    },
    btn2:{
        class: 'btn-2',
        parent: 'nav',
        type: 'button'
    },
    btn3:{
        class: 'btn-3',
        parent: 'nav',
        type: 'button'
    }
}
const Struct_Keys = Object.keys(Structure);

// Objects
const locations = {
    townsquare: ["Store", "Cave", "Dragon's Den"],
    store: ["Townsquare", "Buy", "Sell"]
}

// Initial function calls
initialization();
initial_populate_button();


// variables
let btn1 = document.getElementsByClassName('btn-1')[0];
let btn2 = document.getElementsByClassName('btn-2')[0];
let btn3 = document.getElementsByClassName('btn-3')[0];


// Functions Start here


// This will populate the DOM with appropriate objects
function initialization () {
    let nameOfElement, parent, type, classname, child;
    for (let i = 0; i < Struct_Keys.length; i++) {
        nameOfElement = Struct_Keys[i];
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
}

function initial_populate_button() {
    
}