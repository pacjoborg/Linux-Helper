var myApp = new Framework7(); 
var mainView = myApp.addView('.view-main');
 
var $$ = Dom7;
 
$$('.notification-LinuxVer').on('click', function () {
    myApp.addNotification({
        title: 'Linux Version',
        message: '3.19'
    });
});
