Guide = function() 
{   
    $(".colour").each(function()
    {
        //hex colour
        var hexColour = $(this).find(".hex").text();
        
        //add swatch
        $('<div/>').addClass("swatch").css("background", hexColour).prependTo($(this));
        
        //add clipboad text
        $(this).append( "<div class='clipboard'>copied!</div>" );
        
        //copy hex colour on click
        $(this).zclip({
            path: 'js/ZeroClipboard.swf',
            copy: hexColour,
            afterCopy: function() {
                //display copied! message when clicked
                $(this).find(".clipboard").show();
                setTimeout(function() { 
                    $(".clipboard").fadeOut(200);
                    }, 500
                );
            }
        });
    });
};

$(function() 
{
    new Guide();
});