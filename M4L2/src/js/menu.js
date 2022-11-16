//Remember what this is? jQuery Document Ready Event: https://www.w3schools.com/jquery/jquery_syntax.asp
$(function() {

    const studentName = "Cameron Peterson";
    const projectTitle = "Mod 4 Lab 2";

    //What is different here?
    //How are you able to do a multiline comment?
    const menu = `
    <h2>
        ${studentName}
    </h2>
    <ul>
        <li>
            <a href="/M4L2/index.html">Home</a>
        </li>
        <li>
            <a>Data Attributes</a>
            <ul>
                <li>
                    <a href="/M4L2/DataAttributes/data-attributes.html">Introduction</a>
                </li>
                <li>
                    <a href="/M4L2/DataAttributes/data-attribute-creation.html">Create Data Elements</a>
                </li>
                <li>
                    <a href="/M4L2/DataAttributes/data-and-objects.html">Data  &nbsp;Attributes and Objects</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="/M4L2/article-viewer.html">Try it</a>
        </li>
        <li>
            <a href="/M4L2/extra.html">Extra</a>
        </li>
    </ul>

    <h3>
        ${projectTitle}
    </h3>
    ` 

    //This is the only spot where jQuery is used. $('nav') select the nav element and .html(menu) changes the innerHTML to the menu variable
    $('nav').html(menu);


});
