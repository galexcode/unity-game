#pragma strict

var PartyMembers : int[];
var GameProgression = 0;
var ChaosProgression = 0;
var TrueProgression = 0;
var DarkProgression = 0;
var LightProgression = 0;
var KillProgression = 0;
var TotalMembers = 1;
var InBattle: int = 0;
var Items = new Array(5);
var SpecialEquip: int[] = new int[9];
var i: int = 0;
	while (i < 9) {
		SpecialEquip[i] = 0;
		i++;
		}
	i = 0;
	while (i < 5) {
		Items[i] = new int[50];
		i++;
	}

// Character Variables
var ZeoStats: int[] = new int[20];
	ZeoStats[0] = 1; ZeoStats[1] = 40; ZeoStats[2] = 42;
	ZeoStats[3] = 40; ZeoStats[4] = 42; ZeoStats[5] = 9;
	ZeoStats[6] = 11; ZeoStats[7] = 10; ZeoStats[8] = 11;
	ZeoStats[9] = 12; ZeoStats[10] = 0;
var LizStats: int[] = new int[20];
	LizStats[0] = 1; LizStats[1] = 62; LizStats[2] = 15;
	LizStats[3] = 62; LizStats[4] = 15; LizStats[5] = 11;
	LizStats[6] = 6; LizStats[7] = 9; LizStats[8] = 13;
	LizStats[9] = 11; LizStats[10] = 0;
var AliceStats: int[] = new int[20];
	AliceStats[0] = 1; AliceStats[1] = 29; AliceStats[2] = 40;
	AliceStats[3] = 29; AliceStats[4] = 40; AliceStats[5] = 11;
	AliceStats[6] = 6; AliceStats[7] = 10; AliceStats[8] = 11;
	AliceStats[9] = 11; AliceStats[10] = 0;
var EliciaStats: int[] = new int[20];
	EliciaStats[0] = 1; EliciaStats[1] = 20; EliciaStats[2] = 61;
	EliciaStats[3] = 20; EliciaStats[4] = 61; EliciaStats[5] = 6;
	EliciaStats[6] = 11; EliciaStats[7] = 14; EliciaStats[8] = 8;
	EliciaStats[9] = 9; EliciaStats[10] = 0;
var MaxStats: int[] = new int[20];
	MaxStats[0] = 1; MaxStats[1] = 28; MaxStats[2] = 32;
	MaxStats[3] = 28; MaxStats[4] = 32; MaxStats[5] = 9;
	MaxStats[6] = 7; MaxStats[7] = 9; MaxStats[8] = 14;
	MaxStats[9] = 14; MaxStats[10] = 0;
var MiaStats: int[] = new int[20];
	MiaStats[0] = 1; MiaStats[1] = 21; MiaStats[2] = 39;
	MiaStats[3] = 21; MiaStats[4] = 39; MiaStats[5] = 6;
	MiaStats[6] = 14; MiaStats[7] = 7; MiaStats[8] = 12;
	MiaStats[9] = 13; MiaStats[10] = 0;
var JohnStats: int[] = new int[20];
	JohnStats[0] = 1; JohnStats[1] = 55; JohnStats[2] = 25;
	JohnStats[3] = 55; JohnStats[4] = 25; JohnStats[5] = 17;
	JohnStats[6] = 6; JohnStats[7] = 7; JohnStats[8] = 9;
	JohnStats[9] = 7; JohnStats[10] = 0;
var AlexStats: int[] = new int[20];
	AlexStats[0] = 1; AlexStats[1] = 18; AlexStats[2] = 60;
	AlexStats[3] = 18; AlexStats[4] = 60; AlexStats[5] = 6;
	AlexStats[6] = 14; AlexStats[7] = 13; AlexStats[8] = 6;
	AlexStats[9] = 7; AlexStats[10] = 0;
	// Stat Array Info
/**
	0: Lvl
	1: hp
	2: mp
	3: Maxhp
	4: Maxmp
	5: str
	6: intel
	7: wis
	8: agi
	9: luck
	10: CurrentExp
	11: titleEquiped
	12: WeaponEquiped
	13: AuxWeaponEquiped
	14: ArmorEquipped
	15: HelmetEquipped
	16: GauntletsEquipped
	17: AccessoryEquipped
**/
private var Zeo: GameObject;
private var Liz: GameObject;
private var Alice: GameObject;
private var Elicia: GameObject;
private var Max: GameObject;
private var Mia: GameObject;
private var John: GameObject;
private var Alex: GameObject;

function Awake () {
	PartyMembers = new int[8];
	PartyMembers[0] = 1;
	PartyMembers[1] = 0;
	PartyMembers[2] = 0;
	PartyMembers[3] = 0;
	PartyMembers[4] = 0;
	PartyMembers[5] = 0;
	PartyMembers[6] = 0;
	PartyMembers[7] = 0;
}

function Start () {
	Zeo = GameObject.Find("ZeoData");
	Liz = GameObject.Find("LizData");
	Alice = GameObject.Find("AliceData");
	Elicia = GameObject.Find("EliciaData");
	Max = GameObject.Find("MaxData");
	Mia = GameObject.Find("MiaData");
	John = GameObject.Find("JohnData");
	Alex = GameObject.Find("AlexData");
}

function Update () {

}

// special equip functions
function SetSpecialEquip (who: int) {
	SpecialEquip[who] = 1;
}

function GetSpecialEquip (who: int) {
	return SpecialEquip[who];
}

function ResetSpecialEquip () {
	i = 0;
	while (i < 9) {
		SpecialEquip[i] = 0;
		i++;
	}
}

//Stat Based Functions
function RefreshZeoStats () {
	ZeoStats[0] = Zeo.GetComponent(CharData).GetLvl();
	ZeoStats[1] = Zeo.GetComponent(CharData).GetHP();
	ZeoStats[2] = Zeo.GetComponent(CharData).GetMP();
	ZeoStats[3] = Zeo.GetComponent(CharData).GetMaxHP();
	ZeoStats[4] = Zeo.GetComponent(CharData).GetMaxMP();
	ZeoStats[5] = Zeo.GetComponent(CharData).GetStr();
	ZeoStats[6] = Zeo.GetComponent(CharData).GetIntel();
	ZeoStats[7] = Zeo.GetComponent(CharData).GetWis();
	ZeoStats[8] = Zeo.GetComponent(CharData).GetAgi();
}

function RefreshLizStats () {
	LizStats[0] = Liz.GetComponent(CharData).GetLvl();
	LizStats[1] = Liz.GetComponent(CharData).GetHP();
	LizStats[2] = Liz.GetComponent(CharData).GetMP();
	LizStats[3] = Liz.GetComponent(CharData).GetMaxHP();
	LizStats[4] = Liz.GetComponent(CharData).GetMaxMP();
	LizStats[5] = Liz.GetComponent(CharData).GetStr();
	LizStats[6] = Liz.GetComponent(CharData).GetIntel();
	LizStats[7] = Liz.GetComponent(CharData).GetWis();
	LizStats[8] = Liz.GetComponent(CharData).GetAgi();
}

function RefreshAliceStats () {
	AliceStats[0] = Alice.GetComponent(CharData).GetLvl();
	AliceStats[1] = Alice.GetComponent(CharData).GetHP();
	AliceStats[2] = Alice.GetComponent(CharData).GetMP();
	AliceStats[3] = Alice.GetComponent(CharData).GetMaxHP();
	AliceStats[4] = Alice.GetComponent(CharData).GetMaxMP();
	AliceStats[5] = Alice.GetComponent(CharData).GetStr();
	AliceStats[6] = Alice.GetComponent(CharData).GetIntel();
	AliceStats[7] = Alice.GetComponent(CharData).GetWis();
	AliceStats[8] = Alice.GetComponent(CharData).GetAgi();
}

function RefreshEliciaStats () {
	EliciaStats[0] = Elicia.GetComponent(CharData).GetLvl();
	EliciaStats[1] = Elicia.GetComponent(CharData).GetHP();
	EliciaStats[2] = Elicia.GetComponent(CharData).GetMP();
	EliciaStats[3] = Elicia.GetComponent(CharData).GetMaxHP();
	EliciaStats[4] = Elicia.GetComponent(CharData).GetMaxMP();
	EliciaStats[5] = Elicia.GetComponent(CharData).GetStr();
	EliciaStats[6] = Elicia.GetComponent(CharData).GetIntel();
	EliciaStats[7] = Elicia.GetComponent(CharData).GetWis();
	EliciaStats[8] = Elicia.GetComponent(CharData).GetAgi();
}

function RefreshMiaStats () {
	MiaStats[0] = Mia.GetComponent(CharData).GetLvl();
	MiaStats[1] = Mia.GetComponent(CharData).GetHP();
	MiaStats[2] = Mia.GetComponent(CharData).GetMP();
	MiaStats[3] = Mia.GetComponent(CharData).GetMaxHP();
	MiaStats[4] = Mia.GetComponent(CharData).GetMaxMP();
	MiaStats[5] = Mia.GetComponent(CharData).GetStr();
	MiaStats[6] = Mia.GetComponent(CharData).GetIntel();
	MiaStats[7] = Mia.GetComponent(CharData).GetWis();
	MiaStats[8] = Mia.GetComponent(CharData).GetAgi();
}

function RefreshJohnStats () {
	JohnStats[0] = John.GetComponent(CharData).GetLvl();
	JohnStats[1] = John.GetComponent(CharData).GetHP();
	JohnStats[2] = John.GetComponent(CharData).GetMP();
	JohnStats[3] = John.GetComponent(CharData).GetMaxHP();
	JohnStats[4] = John.GetComponent(CharData).GetMaxMP();
	JohnStats[5] = John.GetComponent(CharData).GetStr();
	JohnStats[6] = John.GetComponent(CharData).GetIntel();
	JohnStats[7] = John.GetComponent(CharData).GetWis();
	JohnStats[8] = John.GetComponent(CharData).GetAgi();
}

function RefreshAlexStats () {
	AlexStats[0] = Alex.GetComponent(CharData).GetLvl();
	AlexStats[1] = Alex.GetComponent(CharData).GetHP();
	AlexStats[2] = Alex.GetComponent(CharData).GetMP();
	AlexStats[3] = Alex.GetComponent(CharData).GetMaxHP();
	AlexStats[4] = Alex.GetComponent(CharData).GetMaxMP();
	AlexStats[5] = Alex.GetComponent(CharData).GetStr();
	AlexStats[6] = Alex.GetComponent(CharData).GetIntel();
	AlexStats[7] = Alex.GetComponent(CharData).GetWis();
	AlexStats[8] = Alex.GetComponent(CharData).GetAgi();
}

function RefreshMaxStats () {
	MaxStats[0] = Max.GetComponent(CharData).GetLvl();
	MaxStats[1] = Max.GetComponent(CharData).GetHP();
	MaxStats[2] = Max.GetComponent(CharData).GetMP();
	MaxStats[3] = Max.GetComponent(CharData).GetMaxHP();
	MaxStats[4] = Max.GetComponent(CharData).GetMaxMP();
	MaxStats[5] = Max.GetComponent(CharData).GetStr();
	MaxStats[6] = Max.GetComponent(CharData).GetIntel();
	MaxStats[7] = Max.GetComponent(CharData).GetWis();
	MaxStats[8] = Max.GetComponent(CharData).GetAgi();
}

function RefreshExp () {
	ZeoStats[10] = Zeo.GetComponent(CharData).GetExp();
	LizStats[10] = Liz.GetComponent(CharData).GetExp();
	AliceStats[10] = Alice.GetComponent(CharData).GetExp();
	EliciaStats[10] = Elicia.GetComponent(CharData).GetExp();
	MaxStats[10] = Max.GetComponent(CharData).GetExp();
	MiaStats[10] = Mia.GetComponent(CharData).GetExp();
	JohnStats[10] = John.GetComponent(CharData).GetExp();
	AlexStats[10] = Alex.GetComponent(CharData).GetExp();
}


//Returning Stats
function GetZeoStats (l: int) {
	return ZeoStats[l];
}

function GetLizStats (l: int) {
	return LizStats[l];
}

function GetAliceStats (l: int) {
	return AliceStats[l];
}

function GetEliciaStats (l: int) {
	return EliciaStats[l];
}

function GetMaxStats (l: int) {
	return MaxStats[l];
}

function GetMiaStats (l: int) {
	return MiaStats[l];
}

function GetJohnStats (l: int) {
	return JohnStats[l];
}

function GetAlexStats (l: int) {
	return AlexStats[l];
}

//InBattle functions
function EnterBattle () {
	InBattle = 1;
}

function ExitBattle () {
	InBattle = 0;
}

function IfInBattle () {
	return InBattle;
}

// Set Party Members
function ZeoInParty (l: int) {
	PartyMembers[0] = l;
}

function LizInParty (l: int) {
	PartyMembers[1] = l;
}

function AliceInParty (l: int) {
	PartyMembers[2] = l;
}

function EliciaInParty (l: int) {
	PartyMembers[3] = l;
}

function MaxInParty (l: int) {
	PartyMembers[4] = l;
}

function MiaInParty (l: int) {
	PartyMembers[5] = l;
}

function JohnInParty (l: int) {
	PartyMembers[6] = l;
}

function AlexInParty (l: int) {
	PartyMembers[7] = l;
}

function GetPartyMembers () {
	return PartyMembers;
}

function setPartyMembers (NewMembers: int, Counter: int) {
	PartyMembers[Counter] = NewMembers;
}

function AddMember () {
	TotalMembers++;
}

function RemoveMember () {
	TotalMembers--;
}

function GetTotalMembers () {
	return TotalMembers;
}
// End Party Member Functions

// set Game Progressions
function setGameProgression () {
	GameProgression++;
}

function GetGameProgression () {
	return GameProgression;
}


function setChaosProgression () {
	ChaosProgression++;
}

function GetChaosProgression () {
	return ChaosProgression;
}


function setTrueProgression () {
	TrueProgression++;
}

function GetTrueProgression () {
	return TrueProgression;
}


function setDarkProgression () {
	DarkProgression++;
}

function GetDarkProgression () {
	return DarkProgression;
}


function setLightProgression () {
	LightProgression++;
}

function GetLightProgression () {
	return LightProgression;
}


function setKillProgression () {
	KillProgression++;
}

function GetKillProgression () {
	return KillProgression;
}
// End Game Progression Functions