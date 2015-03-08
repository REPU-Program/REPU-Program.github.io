// Created by iWeb 2.0.4 local-build-20150228

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.repus.org/REPU/Photos_files/rss.xml",false,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.repus.org/REPU',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.repus.org/REPU',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(6,new IWSize(105,105),new IWSize(105,32),new IWSize(105,152),27,27,0,new IWSize(10,10)),new IWPhotoFrame([IWCreateImage('Photos_files/NewTravel_C_TL.png'),IWCreateImage('Photos_files/NewTravel_S_T.png'),IWCreateImage('Photos_files/NewTravel_C_TR.png'),IWCreateImage('Photos_files/NewTravel_S_R.png'),IWCreateImage('Photos_files/NewTravel_C_BR.png'),IWCreateImage('Photos_files/NewTravel_S_B.png'),IWCreateImage('Photos_files/NewTravel_C_BL.png'),IWCreateImage('Photos_files/NewTravel_S_L.png')],null,1,0.400000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000),imageStream,range,new IWShadow({blurRadius:25,offset:new IWPoint(-20.9939,24.1507),color:'#000000',opacity:0.500000}),null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
