/**

RoPro (https://ropro.io) v1.5

The RoPro extension is developed by:
                               
,------.  ,--. ,-----.,------. 
|  .-.  \ |  |'  .--./|  .---' 
|  |  \  :|  ||  |    |  `--,  
|  '--'  /|  |'  '--'\|  `---. 
`-------' `--' `-----'`------' 
                            
Contact me:

Discord - Dice#1000
Email - dice@ropro.io
Phone - 650-318-1631

Write RoPro:

RoPro Software Corporation
999 Peachtree Street NE
Suite 400
Atlanta, GA 30309
United States

RoPro Terms of Service:
https://ropro.io/terms

RoPro Privacy Policy:
https://ropro.io/privacy-policy

© 2022 RoPro Software Corporation
**/

document.addEventListener('fetchStatus', function(event) { //Adds status back to profile page
	document.getElementById("user-stat").removeAttribute("data-userstatus-disabled")
    angular.element(document.getElementsByClassName('header-caption')[0].children[1]).scope().isUserStatusDisabled()
    angular.element(document.getElementsByClassName('header-caption')[0].children[1]).scope().blurStatusForm()
})