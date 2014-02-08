$(document).ready(function() {
    $("#botonvideo").click(function() {
        $(this).css("display", "none");
        $("#img1").css("display", "none");
        $("#vid1").css("display", "block");
        $("#botonfoto").css("display", "block");
    });
    $("#botonfoto").click(function() {
        $(this).css("display", "none");
        $("#img1").css("display", "block");
        $("#vid1").css("display", "none");
        $("#botonvideo").css("display", "block");
    });


    $("#valencia").click(function() {
        $("#cuerpo").load("valencia.html");
    });
    $("#alicante").click(function() {
        $("#cuerpo").load("alicante.html");
    });
    $("#castellon").click(function() {
        $("#cuerpo").load("castellon.html");
    });

});

