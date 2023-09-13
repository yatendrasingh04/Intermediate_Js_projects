// to store values given in textarea
function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    // it works as a html, css code editor does
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    // it works and gives output as js code editor does
    output.contentWindow.eval(jsCode);
} 