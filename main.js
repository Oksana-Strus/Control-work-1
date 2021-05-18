// Основні критерії оцінки роботи
// HTML/CSS структура
// Коментарі
// Оптимізація (не потрібно компресити код чи проганяти через оптимізатори)
// Структура javascript
// Повинно все працювати

const TOP_BLOCK = document.querySelector('.top');
const EDIT_BLOCK = document.querySelector('.edit-block');
const BOTTOM = document.querySelector('.bottom');
const MIDDLER = document.querySelector('.middler');
const AREA = document.querySelector('.area');
const EDIT_BTN = document.querySelector('.edit');
const SAVE_BTN = document.querySelector('.save');
const FORM_SIZE = document.querySelector('.form-size');
const FORM_STYLE = document.querySelector('.form-style');
const FORM_FAMILY = document.querySelector('.form-family');
const TEXT_COLOR_BTN = document.querySelector('.text-color');
const BACKGROUND_COLOR_BTN = document.querySelector('.background-color');
const COLOR_BOX = document.querySelector('.color-box');
const COLORS = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'purple', 'skyblue'];
let active = true;
const FORM_TABLE_LIST = document.querySelector('.form-table-list');
const COUNT_NUMBER_BTN = document.querySelector('.count-number');
const SELECT_MARK_TYPE = document.querySelector('.select-mark-type');
const CREATE_TABLE_BTN = document.querySelector('.create-table');
const SELECT_TYPE_OF_BORDER = document.querySelector('.select-type-of-border');
const SELECT_COLOR_OF_BORDER = document.querySelector('.select-color-of-border');
const STYLE_BLOCK = document.querySelector('.style-block');
const STYLE_BTN = document.querySelector('.style');
const ADD_BTN = document.querySelector('.add');
const ADD_TABLE_LIST = document.querySelector('.add-table-list');
const TABLE_LISTS = document.querySelectorAll('.tableList');
const ALL_LI = document.querySelector('.all-li');
const ALL_TABLES = document.querySelector('.all-tables');
const CHOOSE_LISTS = document.querySelectorAll('.choose-list');
const UPPER_WIDTH = document.querySelectorAll('.upper-width');


UPPER_WIDTH.forEach(upperWidth => {
    upperWidth.addEventListener('focus', function () {
        this.style.outline = 'none';
        this.style.borderColor = 'lightblue';
        this.style.boxShadow = '0 0 5px skyblue';
    })
    upperWidth.addEventListener('blur', function () {
        this.style.outline = 'none';
        this.style.borderColor = '';
        this.style.boxShadow = '';
    })
})


CHOOSE_LISTS.forEach(chooseList => {
    chooseList.addEventListener('focus', function () {
        this.style.outline = 'none';
        this.style.borderColor = 'lightblue';
        this.style.boxShadow = '0 0 5px skyblue';
    })
    chooseList.addEventListener('blur', function () {
        this.style.outline = 'none';
        this.style.borderColor = '';
        this.style.boxShadow = '';
    })
})



TABLE_LISTS.forEach(tableList => {
    tableList.addEventListener('click', function (event) {
        if (event.target.value == 'list') {
            ALL_LI.classList.remove('hide');
            ALL_TABLES.classList.add('hide');
        } else {
            ALL_TABLES.classList.remove('hide');
            ALL_LI.classList.add('hide');
        }
    })
})


STYLE_BTN.addEventListener('click', function () {
    STYLE_BTN.style.outline = 'none';
    STYLE_BTN.style.boxShadow = '0 0 5px rgb(60, 163, 247)';
    STYLE_BLOCK.classList.remove('hide');
    EDIT_BLOCK.classList.add('hide');
})

STYLE_BTN.addEventListener('mousedown', function () {
    STYLE_BTN.style.outline = 'none';
})

EDIT_BTN.addEventListener('click', () => {
    AREA.value = TOP_BLOCK.innerHTML;
    EDIT_BLOCK.classList.remove('hide');
    STYLE_BLOCK.classList.add('hide');
    AREA.classList.remove('hide');
    ADD_BTN.classList.remove('hide');
    SAVE_BTN.classList.remove('hide')
})

EDIT_BTN.addEventListener('mousedown', () => {
    EDIT_BTN.style.outline = 'none';
    EDIT_BTN.style.boxShadow = '0 0 5px rgb(255, 208, 0)';
})


AREA.addEventListener('focus', function () {
    AREA.style.outline = 'none';
    AREA.style.boxShadow = '0 0 15px rgba(46, 190, 226, 0.999)';
    AREA.style.borderColor = 'skyblue';
})

AREA.addEventListener('blur', function () {
    AREA.style.outline = 'none';
    AREA.style.boxShadow = 'none';
    AREA.style.borderColor = '';
})

function clearTable() {
    document.getElementById('width-bd').value = '';
    document.getElementById('height-td').value = '';
    document.getElementById('width-td').value = '';
    document.getElementById('count-tr').value = '';
    document.getElementById('count-td').value = '';
    SELECT_TYPE_OF_BORDER.value = 'solid';
    SELECT_COLOR_OF_BORDER.value = 'black';
}


function clearList() {
    document.getElementById('count-li').value = '';
    SELECT_MARK_TYPE.value = 'circle';
}

CREATE_TABLE_BTN.addEventListener('click', function (event) {
    if (FORM_TABLE_LIST.tableList.value === 'table') {
        let table = document.createElement('table');
        let countTr = document.getElementById('count-tr').value;
        let countTd = document.getElementById('count-td').value;


        for (let j = 1; j <= countTr; j++) {
            let tr = document.createElement('tr');
            for (let i = 1; i <= countTd; i++) {
                let td = document.createElement('td');
                td.style.width = document.getElementById('width-td').value + 'px';
                td.style.height = document.getElementById('height-td').value + 'px';
                td.style.borderWidth = document.getElementById('width-bd').value + 'px';
                td.style.borderStyle = SELECT_TYPE_OF_BORDER.value;
                td.style.borderColor = SELECT_COLOR_OF_BORDER.value;
                td.innerHTML = 'TD';
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        // TOP_BLOCK.appendChild(table);

        AREA.value += table.outerHTML;

    }

    TABLE_LISTS.forEach(tableList => {
        tableList.checked = false;
    })

    ALL_TABLES.classList.add('hide');
    ADD_TABLE_LIST.classList.add('hide');
    TOP_BLOCK.classList.remove('hide');
    MIDDLER.classList.remove('hide');
    BOTTOM.classList.remove('hide');
    EDIT_BLOCK.classList.remove('hide');
    clearTable();
})

CREATE_TABLE_BTN.addEventListener('mousedown', () => {
    CREATE_TABLE_BTN.style.outline = 'none';
})
CREATE_TABLE_BTN.addEventListener('mouseover', () => {
    CREATE_TABLE_BTN.style.backgroundColor = 'rgb(26, 122, 6)';
})
CREATE_TABLE_BTN.addEventListener('mouseout', () => {
    CREATE_TABLE_BTN.style.backgroundColor = '';
})



COUNT_NUMBER_BTN.addEventListener('click', function (event) {
    COUNT_NUMBER_BTN.style.outline = 'none';
    if (FORM_TABLE_LIST.tableList.value === 'list') {
        let ul = document.createElement("ul");
        ul.style.listStyleType = SELECT_MARK_TYPE.value;
        let count = document.getElementById('count-li').value;

        for (let i = 1; i <= count; i++) {
            let li = document.createElement("li");
            li.innerHTML = 'item' + [i];
            ul.appendChild(li);
        }
        AREA.value += ul.outerHTML;
        clearList()
        ADD_TABLE_LIST.classList.add('hide');
        TOP_BLOCK.classList.remove('hide');
        MIDDLER.classList.remove('hide');
        BOTTOM.classList.remove('hide');
        EDIT_BLOCK.classList.remove('hide');
        ALL_LI.classList.add('hide');
        TABLE_LISTS.forEach(tableList => {
            tableList.checked = false;
        })
    }

})

COUNT_NUMBER_BTN.addEventListener('mousedown', () => {
    COUNT_NUMBER_BTN.style.outline = 'none';
})
COUNT_NUMBER_BTN.addEventListener('mouseover', () => {
    COUNT_NUMBER_BTN.style.backgroundColor = 'rgb(26, 122, 6)';
})
COUNT_NUMBER_BTN.addEventListener('mouseout', () => {
    COUNT_NUMBER_BTN.style.backgroundColor = '';
})



COLOR_BOX.addEventListener('click', function (event) {
    if (active) {
        TOP_BLOCK.style.color = event.target.style.backgroundColor;
    } else {
        TOP_BLOCK.style.backgroundColor = event.target.style.backgroundColor;
    }
    COLOR_BOX.classList.add('hide')
})






SAVE_BTN.addEventListener('mouseover', () => {
    SAVE_BTN.style.backgroundColor = 'rgb(26, 122, 6)';
})
SAVE_BTN.addEventListener('mouseout', () => {
    SAVE_BTN.style.backgroundColor = '';
})
SAVE_BTN.addEventListener('mousedown', () => {
    SAVE_BTN.style.outline = 'none';
    SAVE_BTN.style.boxShadow = '0 0 10px rgba(46, 204, 14, 0.556)';
})

SAVE_BTN.addEventListener('mouseup', () => {
    SAVE_BTN.style.border = '';
    SAVE_BTN.style.boxShadow = '';
})
SAVE_BTN.addEventListener('click', () => {
    TOP_BLOCK.innerHTML = AREA.value;
    AREA.value = '';
    AREA.classList.add('hide');
    ADD_BTN.classList.add('hide');
    SAVE_BTN.classList.add('hide')
})


ADD_BTN.addEventListener('mouseover', () => {
    ADD_BTN.style.backgroundColor = 'rgb(196, 5, 5)';
})
ADD_BTN.addEventListener('mouseout', () => {
    ADD_BTN.style.backgroundColor = '';
})
ADD_BTN.addEventListener('mousedown', () => {
    ADD_BTN.style.outline = 'none';
    ADD_BTN.style.boxShadow = '0 0 10px red';
})

ADD_BTN.addEventListener('mouseup', () => {
    ADD_BTN.style.border = '';
    ADD_BTN.style.boxShadow = '';
})
ADD_BTN.addEventListener('click', () => {
    ADD_TABLE_LIST.classList.remove('hide');
    TOP_BLOCK.classList.add('hide');
    BOTTOM.classList.add('hide');
    MIDDLER.classList.add('hide');

})


TEXT_COLOR_BTN.addEventListener('click', function (event) {
    COLOR_BOX.innerHTML = '';
    for (let i = 0; i <= 9; i++) {
        let smallDiv = document.createElement('div');
        smallDiv.className = 'parameters';
        smallDiv.style.backgroundColor = COLORS[i];
        COLOR_BOX.appendChild(smallDiv);
    }
    COLOR_BOX.classList.remove('hide');
    active = true;
})

BACKGROUND_COLOR_BTN.addEventListener('click', function (event) {
    COLOR_BOX.innerHTML = '';
    for (let i = 0; i <= 9; i++) {
        let smallDiv = document.createElement('div');
        smallDiv.className = 'parameters';
        smallDiv.style.backgroundColor = COLORS[i];
        COLOR_BOX.appendChild(smallDiv);
    }
    COLOR_BOX.classList.remove('hide')
    active = false;
})

FORM_SIZE.addEventListener('click', (event) => {
    if (event.target.name === 'size') {
        TOP_BLOCK.style.fontSize = event.target.value;
    }
})


FORM_FAMILY.addEventListener('change', (event) => {
    TOP_BLOCK.style.fontFamily = event.target.value;

})

FORM_FAMILY.addEventListener('focus', (event) => {
    FORM_FAMILY.style.outline = 'none';
    FORM_FAMILY.style.borderColor = 'lightblue';
    FORM_FAMILY.style.boxShadow = '0 0 5px skyblue';
})

FORM_FAMILY.addEventListener('blur', (event) => {
    FORM_FAMILY.style.outline = 'none';
    FORM_FAMILY.style.borderColor = '';
    FORM_FAMILY.style.boxShadow = 'none';
})

FORM_STYLE.bold.addEventListener('click', () => {

    if (FORM_STYLE.bold.checked) {
        TOP_BLOCK.style.fontWeight = 'bold';
    } else {
        TOP_BLOCK.style.fontWeight = 'normal';
    }
})

FORM_STYLE.cursive.addEventListener('click', () => {
    if (FORM_STYLE.cursive.checked) {
        TOP_BLOCK.style.fontStyle = 'italic';
    } else {
        TOP_BLOCK.style.fontStyle = 'normal';
    }
})