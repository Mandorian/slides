$(document).buttonClick(function () {
    $("input[value = 'submit']").on("click",function(){
        console.log("jll")
        var name = $("input[name = 'name']").val();
        var area = $("input[name = 'area']").val();
        var experence = $("input[name = 'experence']").val();
        var size = $("input[name = 'size']").val();
        var character = $("input[name = 'character']").val();
        eel.python_function('123456');
        eel.expose(dataToJs);
        function dataToJs(s){
            $("#show").html("").append("<div>name:<a href="+s+">"+s+"</a></div>")
        }
    })
})