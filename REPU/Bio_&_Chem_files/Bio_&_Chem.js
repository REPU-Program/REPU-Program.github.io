// Created by iWeb 2.0.4 local-build-20150228

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000}),stroke_1:new IWPhotoFrame([IWCreateImage('Bio_%26_Chem_files/NewTravel_C_TL.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_S_T.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_C_TR.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_S_R.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_C_BR.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_S_B.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_C_BL.png'),IWCreateImage('Bio_%26_Chem_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000),reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Bio_&_Chem_files/Bio_&_ChemMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
