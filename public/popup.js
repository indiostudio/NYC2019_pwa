$(document).ready(function(){
function aceiteAviso(){
	var cookie_set = function(expiredays, cookie_name, value) {
			var exp = new Date();
			exp.setDate(exp.getDate() + expiredays);
			// set cookie
			document.cookie = cookie_name + '=' + value + ';path=/' + ((expiredays == null || expiredays == 0) ? '' : ';expires=' + exp.toGMTString());
		}
	cookie_set(1, 'avisoHome', 'avisoHome');            
}	
var cookie_get = function(name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(name + "=");
        if (c_start != -1) {
            c_start = c_start + name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function PopUp(){
    $("#modal").addClass('show');
}
    
var cookie_check = function(c) {
    if (c == null || c == "") {
        return false;
    } else {
        return true;
    }
}
	
if (!cookie_check(cookie_get('avisoHome'))) {
    PopUp();
}
$(".ok button").click(function(){
    if($("#aceiteHome")[0].checked){
        aceiteAviso();       
    }
    $("#modal").removeClass('show');
});
    
});