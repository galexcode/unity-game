import System;

private var CurrentData : GameObject;
private var CurrentGame: GameObject;
	CurrentGame = GameObject.Find("GameHolder");
	CurrentData = GameObject.Find("GameDataHolder");
var MInit: int[] = new int[8];
var MName: String[] = new String[8];
var MLvl: String[] = new String[8];
var MHP: String[] = new String[8];
var MMP: String[] = new String[8];
var MMaxHP: String[] = new String[8];
var MMaxMP: String[] = new String[8];
var Members: int;
var membernames: String[] = new String[8];
	membernames[0] = "Zeo";
	membernames[1] = "Liz";
	membernames[2] = "Alice";
	membernames[3] = "Elicia";
	membernames[4] = "Max";
	membernames[5] = "Mia";
	membernames[6] = "John";
	membernames[7] = "Alex";
var HPHolder: int[] = new int[8];
var MPHolder: int[] = new int[8];
var MaxHPHolder: int[] = new int[8];
var MaxMPHolder: int[] = new int[8];
var CurrentMembers: int[];
var PreviousMembers: int[];
var MemberSaver: int = 0;
var i: int = 0;
var x: int = 0;
var updater: int = 0;
// Character Variables
private var Zeo: GameObject;
private var Liz: GameObject;
private var Alice: GameObject;
private var Elicia: GameObject;
private var Max: GameObject;
private var Mia: GameObject;
private var John: GameObject;
private var Alex: GameObject;
	Zeo = GameObject.Find("ZeoData");
	Liz = GameObject.Find("LizData");
	Alice = GameObject.Find("AliceData");
	Elicia = GameObject.Find("EliciaData");
	Max = GameObject.Find("MaxData");
	Mia = GameObject.Find("MiaData");
	John = GameObject.Find("JohnData");
	Alex = GameObject.Find("AlexData");

function Awake () {
	DontDestroyOnLoad (CurrentGame);
	DontDestroyOnLoad (CurrentData);
}
    
function Start () {

}

function Update () {
	Members = CurrentData.GetComponent(GameData).GetTotalMembers();
	CurrentMembers = CurrentData.GetComponent(GameData).GetPartyMembers();
	if (MemberSaver != 1)
		PreviousMembers = CurrentMembers;
	HPHolder[0] = Zeo.GetComponent(CharData).GetHP();
	HPHolder[1] = Liz.GetComponent(CharData).GetHP();
	HPHolder[2] = Alice.GetComponent(CharData).GetHP();
	HPHolder[3] = Elicia.GetComponent(CharData).GetHP();
	HPHolder[4] = Max.GetComponent(CharData).GetHP();
	HPHolder[5] = Mia.GetComponent(CharData).GetHP();
	HPHolder[6] = John.GetComponent(CharData).GetHP();
	HPHolder[7] = Alex.GetComponent(CharData).GetHP();
	MPHolder[0] = Zeo.GetComponent(CharData).GetMP();
	MPHolder[1] = Liz.GetComponent(CharData).GetMP();
	MPHolder[2] = Alice.GetComponent(CharData).GetMP();
	MPHolder[3] = Elicia.GetComponent(CharData).GetMP();
	MPHolder[4] = Max.GetComponent(CharData).GetMP();
	MPHolder[5] = Mia.GetComponent(CharData).GetMP();
	MPHolder[6] = John.GetComponent(CharData).GetMP();
	MPHolder[7] = Alex.GetComponent(CharData).GetMP();
	MaxHPHolder[0] = Zeo.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[1] = Liz.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[2] = Alice.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[3] = Elicia.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[4] = Max.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[5] = Mia.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[6] = John.GetComponent(CharData).GetMaxHP();
	MaxHPHolder[7] = Alex.GetComponent(CharData).GetMaxHP();
	MaxMPHolder[0] = Zeo.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[1] = Liz.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[2] = Alice.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[3] = Elicia.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[4] = Max.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[5] = Mia.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[6] = John.GetComponent(CharData).GetMaxMP();
	MaxMPHolder[7] = Alex.GetComponent(CharData).GetMaxMP();
}

// member box data
function getMInit () {
	i = 0;
	while (i < 8) {
		MInit[i] = 11;
		i++;
	}
	i = 0;
	x = 0;
	while (i < 8) {
		if (CurrentMembers[i] == 1) {
			MInit[x] = i;
			MName[x] = membernames[i];
			x++;
		}
		i++;
	}
	i = 0;
	x = 0;
	return MInit;
}

function getMName () {
	
	return MName;
}

function getMHP () {
	i = 0;
	x = 0;
	while (i < 8) {
		if (MInit[x] == i) {
			MHP[x] = HPHolder[i].ToString();
			x++;
		}
		i++;
	}
	return MHP;
}

function getMMP () {
	i = 0;
	x = 0;
	while (i < 8) {
		if (MInit[x] == i) {
			MMP[x] = MPHolder[i].ToString();
			x++;
		}
		i++;
	}
	return MMP;
}

function getMMaxHP() {
	i = 0;
	x = 0;
	while (i < 8) {
		if (MInit[x] == i) {
			MMaxHP[x] = MaxHPHolder[i].ToString();
			x++;
		}
		i++;
	}
	return MMaxHP;
}

function getMMaxMP() {
	i = 0;
	x = 0;
	while (i < 8) {
		if (MInit[x] == i) {
			MMaxMP[x] = MaxMPHolder[i].ToString();
			x++;
		}
		i++;
	}
	return MMaxMP;
}


// enter battle
function EBattle () {
	CurrentData.GetComponent(GameData).EnterBattle();
}

function ExBattle () {
	CurrentData.GetComponent(GameData).ExitBattle();
}


// set MemberSaver
function MemberHold () {
	MemberSaver = 1;
}

function ReplaceMembers () {
	var i = 0;
	while (i < 8) {
		CurrentData.GetComponent(GameData).setPartyMembers(PreviousMembers[i], i);
		i++;
	}
	MemberSaver = 0;
}

function SafeMember () {
	MemberSaver = 0;
}

// TextLoader
function MakeText (Name: String, Text: String) {
	CurrentGame.GetComponent(TextLoader).MakeText(Name, Text);

}

// ChanceGenerator   1 = true, 0 = false
function ChanceGenerator (Percentage: int) {
	if (((Math.random() * 100) + 1) >= Percentage) 
		return 1;
	else
		return 0;
}


//General Returns
function GetCurrentMembers () {
	return CurrentMembers;
}

function GetMembers () {
	return Members;
}

function setProgression (pro: int, truth: int, chaos: int, dark: int, ligh: int, kill: int) {
	if (pro == 1)
		CurrentData.GetComponent(GameData).setGameProgression();
	if (truth == 1)
		CurrentData.GetComponent(GameData).setTrueProgression();
	if (chaos == 1)
		CurrentData.GetComponent(GameData).setChaosProgression();
	if (dark == 1)
		CurrentData.GetComponent(GameData).setDarkProgression();
	if (ligh == 1)
		CurrentData.GetComponent(GameData).setLightProgression();
	if (kill == 1)
		CurrentData.GetComponent(GameData).setKillProgression();
}

function getProgression (counter: int) {
	if (counter == 0)
		return CurrentData.GetComponent(GameData).GetGameProgression();
		else if (counter == 1)
			return CurrentData.GetComponent(GameData).GetTrueProgression();
			else if (counter == 2)
				return CurrentData.GetComponent(GameData).GetChaosProgression();
				else if (counter == 3)
					return CurrentData.GetComponent(GameData).GetDarkProgression();
					else if (counter == 4)
						return CurrentData.GetComponent(GameData).GetLightProgression();
						else if (counter == 5)
							return CurrentData.GetComponent(GameData).GetKillProgression();
							else
								return 0;
}



// Zeo Functions
function AddZeo () {
	if (CurrentMembers[0] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).ZeoInParty(1);
	}
}

function RemoveZeo () {
	if (CurrentMembers[0] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).ZeoInParty(0);
	}
}

// Liz Functions
function AddLiz () {
	if (CurrentMembers[1] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).LizInParty(1);
	}
}

function RemoveLiz () {
	if (CurrentMembers[1] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).LizInParty(0);
	}
}

// Alice Functions
function AddAlice () {
	if (CurrentMembers[2] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).AliceInParty(1);
	}
}

function RemoveAlice () {
	if (CurrentMembers[2] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).AliceInParty(0);
	}
}

// Elicia Functions
function AddElicia () {
	if (CurrentMembers[3] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).EliciaInParty(1);
	}
}

function RemoveElicia () {
	if (CurrentMembers[3] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).EliciaInParty(0);
	}
}

// Max Functions
function AddMax () {
	if (CurrentMembers[4] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).MaxInParty(1);
	}
}

function RemoveMax () {
	if (CurrentMembers[4] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).MaxInParty(0);
	}
}

// Mia Functions
function AddMia () {
	if (CurrentMembers[5] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).MiaInParty(1);
	}
}

function RemoveMia () {
	if (CurrentMembers[5] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).MiaInParty(0);
	}
}

// John Functions
function AddJohn () {
	if (CurrentMembers[6] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).JohnInParty(1);
	}
}

function RemoveJohn () {
	if (CurrentMembers[6] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).JohnInParty(0);
	}
}

// Alex Functions
function AddAlex () {
	if (CurrentMembers[7] == 0) {
		CurrentData.GetComponent(GameData).AddMember();
		CurrentData.GetComponent(GameData).AlexInParty(1);
	}
}

function RemoveAlex () {
	if (CurrentMembers[7] == 1) {
		CurrentData.GetComponent(GameData).RemoveMember();
		CurrentData.GetComponent(GameData).AlexInParty(0);
	}
}