function UpdateIFrame() { 
    var iframePanel = $('#output_panel').contents().find("html");
    var iframeOutput = ("<html><head><meta charset='utf-8'/><style type='text/css'>"+$('#css_panel').val()+"</style></head><body>"+$('#html_panel').val()+"</body></html>")
    iframePanel.html(iframeOutput);
    document.getElementById("output_panel").contentWindow.eval($("#js_panel").val());
}

$(".panel").height(window.outerHeight - 137);
$(".panel").width(window.outerWidth/2 - 2);

$(".toggle").hover(
    function(){
        $(this).addClass('highlight_hover');
    },
    function(){
        $(this).removeClass('highlight_hover');
    }
);

$(".toggle").click(
    function(){
        $(this).toggleClass('active');
        $(this).removeClass('highlight_hover');
        var panel = ("#" + $(this).attr("id") + "_panel");
        $(panel).toggleClass('hidden');
        var noofpanels = $(".active").length;
        $(".panel").width(window.innerWidth/noofpanels-2);
        UpdateIFrame();
    }
);

$('textarea').on('change keyup paste', function() {
    UpdateIFrame();
});

UpdateIFrame();
