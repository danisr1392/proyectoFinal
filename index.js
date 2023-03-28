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

    
});