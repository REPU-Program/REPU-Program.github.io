// Created by iWeb 2.0.4 local-build-20150228

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),reflection_0:new IWReflection({opacity:0.50,offset:1.00}),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,134),url:'Opportunities_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Opportunities_files/stroke_1.png'},{rect:new IWRect(1,-1,262,2),url:'Opportunities_files/stroke_2.png'},{rect:new IWRect(263,-1,2,2),url:'Opportunities_files/stroke_3.png'},{rect:new IWRect(263,1,2,134),url:'Opportunities_files/stroke_4.png'},{rect:new IWRect(263,135,2,2),url:'Opportunities_files/stroke_5.png'},{rect:new IWRect(1,135,262,2),url:'Opportunities_files/stroke_6.png'},{rect:new IWRect(-1,135,2,2),url:'Opportunities_files/stroke_7.png'}],new IWSize(264,136))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Opportunities_files/OpportunitiesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
