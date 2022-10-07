var i = 0;
var txt = '\n To attain a lead or managerial position in the field of Information \n Systems in a growing company where I can utilize my knowledge and \n expertise in web and mobile development, be a flexible team player \n and efficient leader, and provide an opportunity for professional \n growth and career advancements.'; 
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.getElementById("demo").style.color = "black";
    document.getElementById("demo").style.fontSize = "x-large";
  }
}

var head = document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'styles.css';

        head.appendChild(link);
        

        