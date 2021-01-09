Content.makeFrontInterface(686, 551);

    // Default Fonts

Engine.loadFontAs("{PROJECT_FOLDER}calibrib.ttf", "calibrib");
Engine.setGlobalFont("calibrib");    

// SHOW CURRENT PRESET NAME IN A LABEL
const var PresetName = Content.getComponent("PresetName");

inline function onKnob1Control(component, value)
{
    if (Engine.getCurrentUserPresetName() == "")
        Content.getComponent("PresetName").set("text", "Init");
    else
        Content.getComponent("PresetName").set("text", Engine.getCurrentUserPresetName());
};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);

// sample maps 1

const var Sampler1= Synth.getChildSynth("Sampler1");
const var sampleMaps = Sampler.getSampleMapList();

const var LAYER1 = Content.getComponent("INSTRUMENT");
LAYER1.set("items", sampleMaps.join("\n"));

inline function onLAYER1Control(component, value)
{
	Sampler1.asSampler().loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("INSTRUMENT").setControlCallback(onLAYER1Control);

// FILTER setup

const var FILTER = Synth.getEffect("FILTER");

const var modes = {"1 POLE LP": 9,"1 POLE HP": 10, "BIQUAD LP": 0, "BIQUAD HP": 1, "SVF LP": 6,"SVF HP": 7,"MOOG LP": 8, "BIQUAD LP REZ": 5, "LADDER 4 POLE": 14, "LO SHELF EQ": 2, "HI SHELF EQ": 3, "PEAK EQ": 4, "ALLPASS": 13, "RINGMOD": 17,};

const var FilterSelect = Content.getComponent("FILTER SELECT");

FilterSelect.set("items", ""); //Clear list

for (k in modes)
{
    FilterSelect.addItem(k); //Add mode name to list
}

inline function onFilterSelectControl(component, value)
{
    FILTER.setAttribute(FILTER.Mode, modes[component.getItemText()]);
};

Content.getComponent("FILTER SELECT").setControlCallback(onFilterSelectControl);



  // LFO

// LFO2 SHOW EDITOR

const var LFO2Edit= Content.getComponent("LFO2Edit");
const var LFO2Editor = Content.getComponent("LFO2CUSTOM");

inline function onLFO2EditControl(component, value)
{
	if (value)
    {
        LFO2Editor.showControl(true);
    }
    else
    {
        LFO2Editor.showControl(false);
    }
};

Content.getComponent("LFO2Edit").setControlCallback(onLFO2EditControl);

// LFO3 SHOW EDITOR

const var LFO3Edit= Content.getComponent("LFO3Edit");
const var LFO3Editor = Content.getComponent("LFO3SLIDERS");

inline function onLFO3EditControl(component, value)
{
	if (value)
    {
        LFO3Editor.showControl(true);
    }
    else
    {
        LFO3Editor.showControl(false);
    }
};

Content.getComponent("LFO3Edit").setControlCallback(onLFO3EditControl);


// LFO WAVE SELECTORS

        // LFO1

const var LFO1 = Synth.getModulator("LFO1");

const var WaveFormType1 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "RND": 5,};
const var LFO1WaveForm = Content.getComponent("LFO1WaveForm");

LFO1WaveForm.set("items", ""); //Clear list
for (k in WaveFormType1)
{
    LFO1WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO1WaveFormControl(component, value)
{
    LFO1.setAttribute(LFO1.WaveFormType, WaveFormType1[component.getItemText()]);
};

Content.getComponent("LFO1WaveForm").setControlCallback(onLFO1WaveFormControl);

	// LFO2
	
const var LFO2 = Synth.getModulator("LFO2");

const var WaveFormType2 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "CST": 6,};
const var LFO2WaveForm = Content.getComponent("LFO2WaveForm");

LFO2WaveForm.set("items", ""); //Clear list
for (k in WaveFormType2)
{
    LFO2WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO2WaveFormControl(component, value)
{
    LFO2.setAttribute(LFO2.WaveFormType, WaveFormType2[component.getItemText()]);
};

Content.getComponent("LFO2WaveForm").setControlCallback(onLFO2WaveFormControl);

	// LFO3
	
const var LFO3 = Synth.getModulator("LFO3");

const var WaveFormType3 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "PAT": 7,};
const var LFO3WaveForm = Content.getComponent("LFO3WaveForm");

LFO3WaveForm.set("items", ""); //Clear list
for (k in WaveFormType3)
{
    LFO3WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO3WaveFormControl(component, value)
{
    LFO3.setAttribute(LFO3.WaveFormType, WaveFormType3[component.getItemText()]);
};

Content.getComponent("LFO3WaveForm").setControlCallback(onLFO3WaveFormControl);


// PWHEEL ratio

const var PWHEELMOD = Synth.getModulator("PWHEELMOD");

inline function onPITCHWHEELControl(component, value)
{
	PWHEELMOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEEL").setControlCallback(onPITCHWHEELControl);

// FX Panel

const var FXPanel = Content.getComponent("FXPANEL");
const var FXButton = Content.getComponent("FXButton");
FXButton.setControlCallback(FXButtonCB);

inline function FXButtonCB(control, value)
{
    FXPanel.showControl(value);
}

// ARP Panel

const var ARPPanel = Content.getComponent("ARPPanel");
const var ARPButton = Content.getComponent("ARPButton");
ARPButton.setControlCallback(ARPButtonCB);

inline function ARPButtonCB(control, value)
{
    ARPPanel.showControl(value);
}


// Library;

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
 