// Created by iWeb 2.0.4 local-build-20150228

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),reflection_0:new IWReflection({opacity:0.50,offset:1.00}),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000}),stroke_1:new IWPhotoFrame([IWCreateImage('Home_files/NewTravel_C_TL.png'),IWCreateImage('Home_files/NewTravel_S_T.png'),IWCreateImage('Home_files/NewTravel_C_TR.png'),IWCreateImage('Home_files/NewTravel_S_R.png'),IWCreateImage('Home_files/NewTravel_C_BR.png'),IWCreateImage('Home_files/NewTravel_S_B.png'),IWCreateImage('Home_files/NewTravel_C_BL.png'),IWCreateImage('Home_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
