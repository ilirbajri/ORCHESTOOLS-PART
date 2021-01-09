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

// FILTER setup

const var FILTER = Synth.getEffect("FILTER");

const var modes = {"1 Pole LP": 9,"1 Pole HP": 10, "Biquad LP": 0, "Biquad HP": 1, "SVF LP": 6,"SVF HP": 7,"Moog LP": 8, "Biquad LP Rez": 5, "Ladder 4 Pole": 14, "Lo Shelf EQ": 2, "Hi Shelf EQ": 3, "Peak EQ": 4, "Allpass": 13, "RingMod": 17,};

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

// LFO WAVE SELECTORS;;

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

// LFO 1 frequency mode script

const var LFO1FREQ = Content.getComponent("LFO1Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO1Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO1MOD = Synth.getModulator("LFO1");

const var LFO1Sync = Content.getComponent("LFO1Sync");

inline function onLFO1SyncControl(component, value)
{
	// Sync Mode LFO1
	LFO1MOD.setAttribute(LFO1MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO1FREQ.set("mode", "TempoSync");
		LFO1FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO1FREQ.set("mode", "Frequency");
		LFO1FREQ.set("min", 0.00);
		LFO1FREQ.set("max", 50);
		LFO1FREQ.set("middlePosition", 5);
	}
};

LFO1Sync.setControlCallback(onLFO1SyncControl);

// LFO 2 frequency mode script

const var LFO2FREQ = Content.getComponent("LFO2Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO2Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO2MOD = Synth.getModulator("LFO2");

const var LFO2Sync = Content.getComponent("LFO2Sync");

inline function onLFO2SyncControl(component, value)
{
	// Sync Mode LFO2
	LFO2MOD.setAttribute(LFO2MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO2FREQ.set("mode", "TempoSync");
		LFO2FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO2FREQ.set("mode", "Frequency");
		LFO2FREQ.set("min", 0.00);
		LFO2FREQ.set("max", 50);
		LFO2FREQ.set("middlePosition", 5);
	}
};

LFO2Sync.setControlCallback(onLFO2SyncControl);

// LFO 3 frequency mode script

const var LFO3FREQ = Content.getComponent("LFO3Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO3Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO3MOD = Synth.getModulator("LFO3");

const var LFO3Sync = Content.getComponent("LFO3Sync");

inline function onLFO3SyncControl(component, value)
{
	// Sync Mode LFO3
	LFO3MOD.setAttribute(LFO3MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO3FREQ.set("mode", "TempoSync");
		LFO3FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO3FREQ.set("mode", "Frequency");
		LFO3FREQ.set("min", 0.00);
		LFO3FREQ.set("max", 50);
		LFO3FREQ.set("middlePosition", 5);
	}
};

LFO3Sync.setControlCallback(onLFO3SyncControl);

// DELAY mode 

const var LeftDelayTimerSync = Content.getComponent("DELAYTIMELEFT");
const var RightDelayTimerSync = Content.getComponent("DELAYTIMERIGHT");
const var SyncFreeButton = Content.getComponent("DELAYSYNC");
const var Delay1 = Synth.getEffect("Delay1");

// [JSON Knob]

Content.setPropertiesFromJSON("LeftDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});

Content.setPropertiesFromJSON("RightDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});



inline function onSyncFreeButtonControl(component, value)
{
	 Delay1.setAttribute(Delay1.TempoSync, value);
	
	if(value)
	{
		// Switch the knob to tempo sync mode
		LeftDelayTimerSync.set("mode", "TempoSync");
		LeftDelayTimerSync.set("max", 18);
		LeftDelayTimerSync.set("min", 0);
		LeftDelayTimerSync.set("stepSize", 1);
		LeftDelayTimerSync.set("middlePosition", 9);
		
		RightDelayTimerSync.set("mode", "TempoSync");
		RightDelayTimerSync.set("max", 18);
		RightDelayTimerSync.set("min", 0);
		RightDelayTimerSync.set("stepSize", 1);
		RightDelayTimerSync.set("middlePosition", 9);
		
		
		
	}
	else
	{
		// Switch the knob to frequency mode
		LeftDelayTimerSync.set("mode", "Frequency");
		LeftDelayTimerSync.set("min", 0.5);
		LeftDelayTimerSync.set("max", 1400);
		LeftDelayTimerSync.set("middlePosition", 700);
		LeftDelayTimerSync.set("stepSize", 0.01);
		
		
		
		RightDelayTimerSync.set("mode", "Frequency");
		RightDelayTimerSync.set("min", 0.5);
		RightDelayTimerSync.set("max", 1400);
		RightDelayTimerSync.set("middlePosition", 700);
		RightDelayTimerSync.set("stepSize", 0.01);
		
		
		
		
	}
};

SyncFreeButton.setControlCallback(onSyncFreeButtonControl);

// PWHEEL ratio

const var PWHEEL1MOD = Synth.getModulator("PWHEEL1MOD");

inline function onPITCHWHEEL1Control(component, value)
{
	PWHEEL1MOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEEL1").setControlCallback(onPITCHWHEEL1Control);

// ARP Panel ;

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
 