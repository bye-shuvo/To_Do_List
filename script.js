let list = [];
let serial = [];

let section = document.getElementById("section");
let input = document.getElementById("input");

let serialno = document.createElement('div');

let addtext = () => {
    serial.push(section.childElementCount + 1);
    list.push(input.value);
}

let rmtext = () => {
    serial.pop();
    list.shift();
}

let addlist = () => {
    addtext();
    if (input.value != 0) {
        section.insertAdjacentHTML('beforeend', '<div class="listitems"></div>');
        serialno.innerHTML = serial[serial.length - 1];
        section.children[list.length - 1].appendChild(serialno);
        section.children[list.length - 1].innerHTML += list[list.length - 1];
    }
    else {
        alert("Enter a list item!");
    }
}

let rmlist = () => {
    if (section.childElementCount) {
        rmtext();
        section.children[0].remove();
        if (section.childElementCount) {
            for(let k = 0 ; k < section.childElementCount;k++){
            serialno.innerHTML = serial[k];
            section.children[k].innerHTML = '';
            section.children[k].appendChild(serialno);
            section.children[k].innerHTML += list[k];
            }
        }
    }
    else {
        alert('No Task to delete!');
    }
}