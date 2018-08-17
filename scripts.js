
window.addEventListener('DOMContentLoaded', function () {

    //Created element called divcontainer
    let divContainer = document.createElement('div');
    divContainer.className = 'header-container';


    //Created h1 element and text node then appended text node to h1 element.
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1.');
    h1.appendChild(h1Text);

    // Appended h1 element (with text node) to the divcontainer element.
    divContainer.appendChild(h1);
    document.body.appendChild(divContainer);

    //Created H1 class
    h1.className = 'h1';

    //Created h2 element and text node then appended text node to h2 element.
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2.');
    h2.appendChild(h2Text);

    //Created H2 class
    h2.className = 'h2';

    // Appended h2 element (with text node) to the divcontainer element.
    divContainer.appendChild(h2);
    document.body.appendChild(divContainer);

    //Created h3 element and text node then appended text node to h3 element.
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3.');
    h3.appendChild(h3Text);

    //Created H3 class
    h3.className = 'h3';

    //Appended h3 element (with text node) to the divcontainer element.
    divContainer.appendChild(h3);
    document.body.appendChild(divContainer);

    //Created h4 element and text node then appended text node to h4 element.
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4.');
    h4.appendChild(h4Text);

    //Created H4 class
    h4.className = 'h4';

    //Appended h4 element (with text node) to the divcontainer element.
    divContainer.appendChild(h4);
    document.body.appendChild(divContainer);

    //Created h5 element and text node then appended text node to h5 element.
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5.');
    h5.appendChild(h5Text);

    //Created H5 class
    h5.className = 'h5';

    //Appended h5 element (with text node) to the divcontainer element.
    divContainer.appendChild(h5);
    document.body.appendChild(divContainer);

    //Created h6 element and text node then appended text node to h6 element.

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6.')
    h6.appendChild(h6Text);

    //Created H6 class
    h6.className = 'h6';

    //Appended h6 element (with text node) to the divcontainer element.
    divContainer.appendChild(h6);
    //document.body.appendChild(divContainer);


    //create an array with random colors
    let colors = [
        'pink',
        'blue',
        'orange',
        'black',
        'green',
        'brown',
        'yellow',
        'red',
    ];

    //created a function that applies random colors from the created array to elements.
    function getRandom() {
        let random = colors[Math.floor(Math.random() * colors.length)];
        return random;
    }

    //created an event listener that calls the random color function when double clicked and changes color to h1.
    h1.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h1.style.color = randomColor;
    })


     //created an event listener that calls the random color function when clicked once and changes color to h1.
     h1.addEventListener('click', function () {
        let randomColor = getRandom();
        h1.style.color = randomColor;
    })

    //created an event listener that calls the random color function when double clicked and changes color to h2.
    h2.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h2.style.color = randomColor;
    })

      //created an event listener that calls the random color function when clicked once and changes color to h2.
      h2.addEventListener('click', function () {
        let randomColor = getRandom();
        h2.style.color = randomColor;
    })

    //created an event listener that calls the random color function when double clicked and changes color to h3.
    h3.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h3.style.color = randomColor;
    })

     //created an event listener that calls the random color function when clicked once and changes color to h3.
     h3.addEventListener('click', function () {
        let randomColor = getRandom();
        h3.style.color = randomColor;
    })

    //created an event listener that calls the random color function when double clicked and changes color to h4.
    h4.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h4.style.color = randomColor;
    })

      //created an event listener that calls the random color function when clicked once and changes color to h4.
      h4.addEventListener('click', function () {
        let randomColor = getRandom();
        h4.style.color = randomColor;
    })

    //created an event listener that calls the random color function when double clicked and changes color to h5.
    h5.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h5.style.color = randomColor;
    })

      //created an event listener that calls the random color function when clicked once and changes color to h5.
      h5.addEventListener('click', function () {
        let randomColor = getRandom();
        h5.style.color = randomColor;
    })

    //created an event listener that calls the random color function when double clicked and changes color to h6.
    h6.addEventListener('dblclick', function () {
        let randomColor = getRandom();
        h6.style.color = randomColor;
    })

       //created an event listener that calls the random color function when clicked once and changes color to h6.
       h6.addEventListener('click', function () {
        let randomColor = getRandom();
        h6.style.color = randomColor;
    })



    let counter = 1;
    let ol = document.createElement('ol');

    //created function to add to list increased by 1 each time button is clicked once.
    function addItems() {
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item' + ' ' + counter);
        li.appendChild(liText);
        ol.appendChild(li);
        document.body.appendChild(ol);
        counter++;
    }

    //not working
    function removeItems() {

        //ol.removeChild(li);
        //ol.parentNode.removeChild(li);
        //document.removeChild(li)
        this.remove();
    }

    //Used button and event listener to add to list when clicked.
    listBtn.addEventListener('click', function () {
        let add = addItems();

    })

   
    //Trying to remove the item list when double clicked.  **Not working**
    listButton.addEventListener('dblclick', function () {
        let remove = removeItems();
        return remove;

    })






});
















