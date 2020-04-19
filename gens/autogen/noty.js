/*
<script type="text/javascript">var recurso = ["gold", "coins"];</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-noty/2.3.8/packaged/jquery.noty.packaged.min.js"></script>
<script type="text/javascript" src="https://muhadda.github.io/t32/js/genNotify.js"></script></html>
*/
var bandeiras = ["us", "fr", "nl", "de", "us", "ru", "br", "us", "ca", "se", "es", "us"];
var divsnoty = "<div id='notyTemplate' style='display: none'><div><div class='noty_message'><div><i class='fa fa-check-circle ' style='color: #018418;'></i> <span class='notyFlag'></span> <span class='notyName yellow' style='font-weight: bold;'>%name%</span> generated <span class='notyMessage'></span> <span class='notyRes'>%res%</span>!</div><div class='noty_close'></div></div></div></div><div id='notyTemplateFail' style='display: none'><div><div class='noty_message'><div><i class='fa fa-exclamation-triangle' style='color: #f12b2b;'></i> <span class='notyName yellow' style='font-weight: bold;'>%name%</span>: Failed Verification</div><div class='noty_close'></div></div></div></div>";
$("body").append(divsnoty);

function random(min, max) {return Math.floor(Math.random() * (max - min + 1) + min);}
function makeid(tamanho){
    var text = "";
    var possible = "abcdefghijklmnoprstuvwxyz";

    for( var i=0; i < tamanho; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
$(document).ready(function() {
    var enable_notifications=parseInt("1");
	$(document).ready(function(){
        $('.loadingScreen').fadeOut(500);
        stickyNote();
    });
    var skip_generate=parseInt("0");
    var min_noti_delay=parseInt("4000");
    var max_noti_delay=parseInt("10000");
    var min_noti_points=parseInt("0");
    var max_noti_points=parseInt("0");
    function stickyNote(){
        if(enable_notifications==0)return false;
        var count=1;
        var counter=0;
        var next=random(min_noti_delay,max_noti_delay);
        if($('#noty_bottomRight_layout_container li:not(.i-am-closing)').length >= 1){
            $('#noty_bottomRight_layout_container li').addClass("i-am-closing");
            $.noty.closeAll();
        }
        while(counter<count){
            counter++;
            //var Name=ChatUserNames[Math.floor(Math.random() * ChatUserNames.length)];
			var Name=makeid(random(1,2))+"****"+makeid(random(1,3));
            var fakeIP=random(1,999)+"."+random(1,999)+"."+random(1,999)+"."+random(1,999);
            var $template;
            if(random(1,10)==10){
                $template=$($('#notyTemplateFail').html());
            }
            else{
				//$(".notyMessage").text(random(900,9999)).fadeIn();
                $template=$($('#notyTemplate').html());
                //if(min_noti_points>0 && max_noti_points>0 && max_noti_points>min_noti_points){
                    var msg=$template.find('.notyMessage').html();
                    //msg=msg.replace(""," "+random(min_noti_points,max_noti_points));
                    $template.find('.notyMessage').html(random(5000,9999));
					
                //}

            }
            $template.find('.notyFlag').html("<img src='https://cdnjs.cloudflare.com/ajax/libs/DinaKit/1.2/css/images/flags/"+bandeiras[random(0,bandeiras.length-1)]+".png' />");
            $template.find('.notyName').text(Name);
			$template.find('.notyRes').text(recurso[random(0,recurso.length-1)]);



            var n = noty({
                layout: 'bottomRight',
                type: 'alert',
                theme: 'relax',
                //timeout: 3000,
                killer: false,
                text: '',
                template: $template.html(),
                animation: {
                    open: 'animated fadeInUp', // Animate.css class names
                    close: 'animated fadeOutRight', // Animate.css class names
                    easing: 'swing', // unavailable - no need
                    //speed: 900 // unavailable - no need
                },
                maxVisible:1
            });
        }

        setTimeout(function(){stickyNote()},next);
    }

    $.noty.defaults = {
        layout: 'topRight',
        theme: 'defaultTheme', // or 'relax'
        type: 'alert',
        text: '', // can be html or string
        dismissQueue: true, // If you want to use queue feature set this true
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
            close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
            easing: 'swing',
            speed: 200 // opening & closing animation speed
        },
        timeout: 500, // delay for closing event. Set false for sticky notifications
        force: false, // adds notification to the beginning of queue when set to true
        modal: false,
        maxVisible: 3, // you can set max visible notification for dismissQueue true option,
        killer: true, // for close all notifications before show
        closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {},
        },
        buttons: false // an array of buttons
    };
	
});