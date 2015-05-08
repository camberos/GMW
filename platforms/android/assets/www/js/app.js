$(document).ready(function(){
	hideAddressBar();

   var supportsOrientationChange = "onorientationchange" in window,
   orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	window.addEventListener(orientationEvent, function () {
	    hideAddressBar();
	}, false);

});
function hideAddressBar() {
    window.scrollTo(0, 0); // reset in case prev not scrolled  
    if ($('body.homeScreen').length == 0) {
        var nPageH = $(document).height();
        var nViewH = window.outerHeight;
        if (nViewH > nPageH) {
            nViewH = nViewH / window.devicePixelRatio;
            $('BODY').css('height', nViewH + 'px');
        }
    }
    window.scrollTo(0, 1);
}


function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name){
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name){
	    return unescape(y);
	    }
	  }
}

function setLocalStorageDate(storename){
    if(typeof(Storage)!=="undefined"){
	var dt = new Date();
	var localstoredate = storename + "date";
	localStorage.setItem(localstoredate, dt.getFullYear() + "/" + dt.getMonth() + 1 + "/" + dt.getDate());
     } else {
	return false;
     }
}

function checkLocalStorageDate(storename){
      if(typeof(Storage)!=="undefined"){
           var localstoredate = storename + "date";
           if(localStorage.getItem(localstoredate)){
            var todaydate = new Date();
            var today = todaydate.getFullYear() + "/" + todaydate.getMonth() + 1 + "/" + todaydate.getDate();
           	if(localStorage.getItem(localstoredate) < today){           	
           		return "old";
           	} else {
           		return "current";
           	}
           } else {
           	return false;
           }
     } else {
	return false;
     }
}

function getParameterByName(name) {

    var match = RegExp('[?&]' + name + '=([^&]*)')
                    .exec(window.location.search);

    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));

}

function getLocalStorage(storename){
     if(typeof(Storage)!=="undefined"){
	return localStorage.getItem(storename);	
     } else {
	return false;
     }
}

function setLocalStorage(storename,data){
     if(typeof(Storage)!=="undefined"){
	 localStorage.setItem(storename,data);
	 } else {
	return false;
     }
}

function setCookie(strCookieName,strCookieValue,intDaysToExpire,strPath,strDomain) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + intDaysToExpire);    
    strCookie = strCookieName + "=" +  escape(strCookieValue);
    strCookie += ((intDaysToExpire==null) ? "" : ";expires=" + exdate.toGMTString());    
    strCookie += ((strPath==null) ? "" : ";path=" + strPath);
    strCookie += ((strDomain==null) ? "" : ";domain=" + strDomain);
    document.cookie = strCookie;
}

function checkLocalStorageSize(){
       alert(JSON.stringify(localStorage).length);
   }

function addCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
