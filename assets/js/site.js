
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
}
function delete_cookie(name) {
  document.cookie = name +'=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function add_dark_style_link() {
  // dark_mode_link should have been set in the head when the dark mode was checked for
  // document.querySelector('head').innerHTML += dark_mode_link;
  $('head').append(dark_mode_link);
}

function toggle_dark_mode() {
  if (getCookie("unhexium_dark_mode") == "enabled") {
    document.getElementById("dark_mode_style").remove();
    delete_cookie("unhexium_dark_mode");
  } else {
    add_dark_style_link();
    setCookie("unhexium_dark_mode", "enabled", 180);
  }
  darkchangefunctions.forEach(function(func) {
    func();
  });
}

// Add auto-anchors to all specified levels of headers
$(document).ready(function() {
  $('h1,h2').filter('[id]').each(function () {
    $(this).wrapInner('<a href="#'+$(this).attr('id')+'" class="auto-anchors"></a>');
  });
});
