Content.makeFrontInterface(1000, 600);

//Logo Website Button
inline function onLogoButtonControl(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("LogoButton").setControlCallback(onLogoButtonControl);

//sampler
const var Guitar1 = Synth.getSampler("Guitar1");
const var Guitar2 = Synth.getSampler("Guitar2");
const var Guitar3 = Synth.getSampler("Guitar3");
const var Guitar4 = Synth.getSampler("Guitar4");

//samplemaps
const var sampleMaps = Sampler.getSampleMapList();

//combobox note: cmbsamplemaps is name of combobox
const var Guitar1cmb = Content.getComponent("Guitar1cmb");
Guitar1cmb.set("items", sampleMaps.join("\n"));
const var Guitar2cmb = Content.getComponent("Guitar2cmb");
Guitar2cmb.set("items", sampleMaps.join("\n"));
const var Guitar3cmb = Content.getComponent("Guitar3cmb");
Guitar3cmb.set("items", sampleMaps.join("\n"));
const var Guitar4cmb = Content.getComponent("Guitar4cmb");
Guitar4cmb.set("items", sampleMaps.join("\n"));

//Note: Sampler is name of Sampler
inline function onGuitar1cmbControl(component, value)
{
	Guitar1.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Guitar1cmb").setControlCallback(onGuitar1cmbControl);

inline function onGuitar2cmbControl(component, value)
{
	Guitar2.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Guitar2cmb").setControlCallback(onGuitar2cmbControl);

inline function onGuitar3cmbControl(component, value)
{
	Guitar3.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Guitar3cmb").setControlCallback(onGuitar3cmbControl);

inline function onGuitar4cmbControl(component, value)
{
	Guitar4.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Guitar4cmb").setControlCallback(onGuitar4cmbControl);

//Custom Settings Popup
const var panel1 = Content.addPanel("panel1", 650, 39);

//const var hideShow = Content.addButton("hideShow");
const var hideShow = Content.getComponent("hideShow");

inline function onhideShowControl(number, value)
{
        panel1.showControl(value); 
}

hideShow.setControlCallback(onhideShowControl);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 