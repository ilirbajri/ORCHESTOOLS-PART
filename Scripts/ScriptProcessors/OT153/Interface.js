Content.makeFrontInterface(686, 551);

// sample maps 1

const var Sampler1 = Synth.getChildSynth("Sampler1");
const var sampleMaps = Sampler.getSampleMapList();

const var LAYER1 = Content.getComponent("LAYER1INSTRUMENT");
LAYER1.set("items", sampleMaps.join("\n"));

inline function onLAYER1Control(component, value)
{
	Sampler1.asSampler().loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("LAYER1INSTRUMENT").setControlCallback(onLAYER1Control);


// PWHEEL ratio

const var PWHEEL1MOD = Synth.getModulator("PWHEEL1MOD");

inline function onPITCHWHEEL1Control(component, value)
{
	PWHEEL1MOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEEL1").setControlCallback(onPITCHWHEEL1Control);

// Library

const var LibButton = Content.getComponent("LibButton");
const var LIBRARYBROWSER = Content.getComponent("LIBRARYBROWSER");

inline function onLibButtonControl(component, value)
{
	if (value)
    {
        LIBRARYBROWSER.showControl(true);
    }
    else
    {
        LIBRARYBROWSER.showControl(false);
    }
};

Content.getComponent("LibButton").setControlCallback(onLibButtonControl);

// CC MIDI Learn Panel ;

const var MIDILearnPanel = Content.getComponent("MIDILearnPanel");
const var MIDILPButton = Content.getComponent("MIDILPButton");
MIDILPButton.setControlCallback(MIDILPButtonCB);

inline function MIDILPButtonCB(control, value)
{
    MIDILearnPanel.showControl(value);
}

// SettingsPanel 

const var SettingsPanel = Content.getComponent("SettingsPanel");
const var SettingsButton = Content.getComponent("SettingsButton");
SettingsButton.setControlCallback(SettingsButtonCB);

inline function SettingsButtonCB(control, value)
{
    SettingsPanel.showControl(value);
}function onNoteOn()
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
 