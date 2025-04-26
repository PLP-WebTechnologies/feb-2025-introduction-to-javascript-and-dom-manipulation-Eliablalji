<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript and DOM Manipulation</title>
    <style>
        #myElement {
            background-color: lightblue;
            padding: 10px;
            margin-bottom: 10px;
        }
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Welcome to the Page!</h1>

    <div id="myElement">This is an element that will be manipulated by JavaScript.</div>

    <button id="changeTextBtn">Change Text</button>
    <button id="changeStyleBtn">Change Style</button>
    <button id="addElementBtn">Add New Element</button>
    <button id="removeElementBtn">Remove Last Element</button>

    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>

    <script>
        // Get references to the elements we'll be working with
        const myElement = document.getElementById('myElement');
        const changeTextBtn = document.getElementById('changeTextBtn');
        const changeStyleBtn = document.getElementById('changeStyleBtn');
        const addElementBtn = document.getElementById('addElementBtn');
        const removeElementBtn = document.getElementById('removeElementBtn');
        const myList = document.getElementById('myList');

        // Function to change the text content of the div
        function changeText() {
            myElement.textContent = 'The text has been changed!';
        }

        // Function to change the background color and add a class
        function changeStyle() {
            myElement.style.backgroundColor = 'lightgreen';
            myElement.classList.add('highlight');
        }

        // Function to add a new list item
        function addListItem() {
            const newListItem = document.createElement('li');
            newListItem.textContent = New Item ${myList.children.length + 1};
            myList.appendChild(newListItem);
        }

        // Function to remove the last list item
        function removeLastListItem() {
            if (myList.children.length > 0) {
                myList.removeChild(myList.lastElementChild);
            } else {
                alert('The list is empty!');
            }
        }

        // Add event listeners to the buttons
        changeTextBtn.addEventListener('click', changeText);
        changeStyleBtn.addEventListener('click', changeStyle);
        addElementBtn.addEventListener('click', addListItem);
        removeElementBtn.addEventListener('click', removeLastListItem);
    </script>

</body>
</html>