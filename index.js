$(function(){

    $(".text-slider").hide();

    $(".text-slider:first").show();

    /*botones slider*/
    $(".select-slider li").click(function(){
        
        $(".select-slider li").removeClass();
        $(this).addClass("active-slider");

        var id = $(".select-slider .active-slider").attr("id");

        $(".text-slider").hide();

        $(".text-slider:nth-child(" + id + ")").fadeIn("slow");
    });

    /*boton legalidad*/

    $(".legalidad-info").hide();


    $(".legalidad-clicker img").click(function(){

        let clase = $(".legalidad-clicker img").attr("class");

        if(clase == "legalidad-clicker-down"){

            $(".legalidad-clicker-down").attr("src", "css/imagenes/legalidad/flechas/arriba.png");
            $(".legalidad-clicker-down").removeClass();
            $(".legalidad-clicker img").addClass("legalidad-clicker-up");
            $(".legalidad-info").show();
        }else if(clase == "legalidad-clicker-up"){

            $(".legalidad-clicker-up").attr("src", "css/imagenes/legalidad/flechas/abajo.png");
            $(".legalidad-clicker-up").removeClass();
            $(".legalidad-clicker img").addClass("legalidad-clicker-down");
            $(".legalidad-info").hide();
        }

    });

});