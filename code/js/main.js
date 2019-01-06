var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/java");



$(document).ready(function () {
    var gutterActiveColor = $(".ace_gutter-active-line").css("background");
    var backgroundColor = $('#editor').css("background-color");
    var gutterColor = $(".ace_gutter").css("background-color");
    var gutterFontColor = $(".ace_gutter").css("color");
    
    var footer = $("#footer");
    var navegation = $("#navegation");
    var directory = $(".directory");

    var directoryFontColor = $("nav ul li");
    
    navegation.css("background", gutterColor);
    footer.css("background", gutterColor);
    footer.css("color", gutterFontColor );


    directory.css("background-color", backgroundColor);
    directory.css("color", gutterFontColor);

    directoryFontColor.css("color", gutterFontColor);
    $("select").css("color", gutterFontColor);

    $(".ace_gutter").css("background", "none");

    $(".options > *").hover(function(){
        $(this).css("background-color",backgroundColor);
        }, function(){
        $(this).css("background-color", "transparent");
    });
    
});
