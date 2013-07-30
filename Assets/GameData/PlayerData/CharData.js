import System;

private var CurrentData : GameObject;
	CurrentData = GameObject.Find("GameDataHolder");
var CharNumber: int = 0;
var initlvl: int = 1;
var CharName: String = "name";
var AttackRange: int = 1;
var lvl: int = 1;
var lvlmod: int;
var exp: int = 0;
var expexp: int = 1;
var hp: int = 1;
var mp: int = 1;
var hpmod: double = 1;
var mpmod: double = 1;
var strgr: double = 10;
var intelgr: double = 10;
var wisgr: double = 10;
var agigr: double = 10;
var luckgr: double = 10;
var defmod: double = 1;
var dmgmod: double = 1;
var statdef: double;
var statdmg: double;
var statmdmg: double;
var statspdef: double;
var statcrit: double;
var statcritblock: double;
var newlvl: int;
var str: int = 10;
var intel: int = 10;
var wis: int = 10;
var maxhp: int = 1;
var maxmp: int = 1;
var agi: int = 10;
var luck: int = 10;
var lvlup: int = 0;
var nextlvl: int;
var needexp: int;
var i: int = 0;
var charupdate: int = 0;
var SpecialEquips: int = 0;


function Awake() {
	
}

function Start () {
	i = 0;
}

function Update () {
	if (charupdate == 0) {
		if (CharName == "Zeo") {
			lvl = CurrentData.GetComponent(GameData).GetZeoStats(0);
			hp = CurrentData.GetComponent(GameData).GetZeoStats(1);
			mp = CurrentData.GetComponent(GameData).GetZeoStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetZeoStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetZeoStats(4);
			str = CurrentData.GetComponent(GameData).GetZeoStats(5);
			intel = CurrentData.GetComponent(GameData).GetZeoStats(6);
			wis = CurrentData.GetComponent(GameData).GetZeoStats(7);
			agi = CurrentData.GetComponent(GameData).GetZeoStats(8);
			luck = CurrentData.GetComponent(GameData).GetZeoStats(9);
			exp = CurrentData.GetComponent(GameData).GetZeoStats(10);
			CharNumber = 0;
		}
		if (CharName == "Liz") {
			lvl = CurrentData.GetComponent(GameData).GetLizStats(0);
			hp = CurrentData.GetComponent(GameData).GetLizStats(1);
			mp = CurrentData.GetComponent(GameData).GetLizStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetLizStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetLizStats(4);
			str = CurrentData.GetComponent(GameData).GetLizStats(5);
			intel = CurrentData.GetComponent(GameData).GetLizStats(6);
			wis = CurrentData.GetComponent(GameData).GetLizStats(7);
			agi = CurrentData.GetComponent(GameData).GetLizStats(8);
			luck = CurrentData.GetComponent(GameData).GetLizStats(9);
			exp = CurrentData.GetComponent(GameData).GetLizStats(10);
			CharNumber = 1;
		}
		if (CharName == "Alice") {
			lvl = CurrentData.GetComponent(GameData).GetAliceStats(0);
			hp = CurrentData.GetComponent(GameData).GetAliceStats(1);
			mp = CurrentData.GetComponent(GameData).GetAliceStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetAliceStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetAliceStats(4);
			str = CurrentData.GetComponent(GameData).GetAliceStats(5);
			intel = CurrentData.GetComponent(GameData).GetAliceStats(6);
			wis = CurrentData.GetComponent(GameData).GetAliceStats(7);
			agi = CurrentData.GetComponent(GameData).GetAliceStats(8);
			luck = CurrentData.GetComponent(GameData).GetAliceStats(9);
			exp = CurrentData.GetComponent(GameData).GetAliceStats(10);
			CharNumber = 2;
		}
		if (CharName == "Elicia") {
			lvl = CurrentData.GetComponent(GameData).GetEliciaStats(0);
			hp = CurrentData.GetComponent(GameData).GetEliciaStats(1);
			mp = CurrentData.GetComponent(GameData).GetEliciaStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetEliciaStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetEliciaStats(4);
			str = CurrentData.GetComponent(GameData).GetEliciaStats(5);
			intel = CurrentData.GetComponent(GameData).GetEliciaStats(6);
			wis = CurrentData.GetComponent(GameData).GetEliciaStats(7);
			agi = CurrentData.GetComponent(GameData).GetEliciaStats(8);
			luck = CurrentData.GetComponent(GameData).GetEliciaStats(9);
			exp = CurrentData.GetComponent(GameData).GetEliciaStats(10);
			CharNumber = 3;
		}
		if (CharName == "John") {
			lvl = CurrentData.GetComponent(GameData).GetJohnStats(0);
			hp = CurrentData.GetComponent(GameData).GetJohnStats(1);
			mp = CurrentData.GetComponent(GameData).GetJohnStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetJohnStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetJohnStats(4);
			str = CurrentData.GetComponent(GameData).GetJohnStats(5);
			intel = CurrentData.GetComponent(GameData).GetJohnStats(6);
			wis = CurrentData.GetComponent(GameData).GetJohnStats(7);
			agi = CurrentData.GetComponent(GameData).GetJohnStats(8);
			luck = CurrentData.GetComponent(GameData).GetJohnStats(9);		
			exp = CurrentData.GetComponent(GameData).GetJohnStats(10);
			CharNumber = 6;
		}
		if (CharName == "Alex") {
			lvl = CurrentData.GetComponent(GameData).GetAlexStats(0);
			hp = CurrentData.GetComponent(GameData).GetAlexStats(1);
			mp = CurrentData.GetComponent(GameData).GetAlexStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetAlexStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetAlexStats(4);
			str = CurrentData.GetComponent(GameData).GetAlexStats(5);
			intel = CurrentData.GetComponent(GameData).GetAlexStats(6);
			wis = CurrentData.GetComponent(GameData).GetAlexStats(7);
			agi = CurrentData.GetComponent(GameData).GetAlexStats(8);
			luck = CurrentData.GetComponent(GameData).GetAlexStats(9);
			exp = CurrentData.GetComponent(GameData).GetAlexStats(10);
			CharNumber = 7;
		}
		if (CharName == "Max") {
			lvl = CurrentData.GetComponent(GameData).GetMaxStats(0);
			hp = CurrentData.GetComponent(GameData).GetMaxStats(1);
			mp = CurrentData.GetComponent(GameData).GetMaxStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetMaxStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetMaxStats(4);
			str = CurrentData.GetComponent(GameData).GetMaxStats(5);
			intel = CurrentData.GetComponent(GameData).GetMaxStats(6);
			wis = CurrentData.GetComponent(GameData).GetMaxStats(7);
			agi = CurrentData.GetComponent(GameData).GetMaxStats(8);
			luck = CurrentData.GetComponent(GameData).GetMaxStats(9);
			exp = CurrentData.GetComponent(GameData).GetMaxStats(10);
			CharNumber = 4;
		}
		if (CharName == "Mia") {
			lvl = CurrentData.GetComponent(GameData).GetMiaStats(0);
			hp = CurrentData.GetComponent(GameData).GetMiaStats(1);
			mp = CurrentData.GetComponent(GameData).GetMiaStats(2);
			maxhp = CurrentData.GetComponent(GameData).GetMiaStats(3);
			maxmp = CurrentData.GetComponent(GameData).GetMiaStats(4);
			str = CurrentData.GetComponent(GameData).GetMiaStats(5);
			intel = CurrentData.GetComponent(GameData).GetMiaStats(6);
			wis = CurrentData.GetComponent(GameData).GetMiaStats(7);
			agi = CurrentData.GetComponent(GameData).GetMiaStats(8);
			luck = CurrentData.GetComponent(GameData).GetMiaStats(9);
			exp = CurrentData.GetComponent(GameData).GetMiaStats(10);
			CharNumber = 5;
		}
		SpecialEquips = CurrentData.GetComponent(GameData).GetSpecialEquip(CharNumber);
	}
	if (SpecialEquips == 1) {
	
	}
	expexp = Math.Pow(lvl + 1, 3);
	newlvl = exp / expexp;
	if (newlvl >= 1) {
		lvl++;
		lvlmod = Math.Log(lvl + 0.1);
		str = str + Math.Floor((((UnityEngine.Random.Range(1,1.25) * lvlmod * strgr) / 7)));
		intel = intel + Math.Floor((((UnityEngine.Random.Range(1,1.25))) * lvlmod * intelgr) / 7);
		wis = wis + Math.Floor((((UnityEngine.Random.Range(1,1.25))) * lvlmod * wisgr) / 7);
		agi = agi + Math.Floor((((UnityEngine.Random.Range(1,1.25))) * lvlmod * agigr) / 7);
		lvlup = 1;
		maxhp = Math.Floor((((str * 1.75) + (agi * 0.8)) * 1.5) * hpmod);
		maxmp = Math.Floor((((intel * 0.55) + (wis * 2)) * 1.5) * mpmod);
		mp = maxmp;
		hp = maxhp;
		if (lvl < 5) {
			expexp = Math.Pow(lvl + 1, 4);
		}
		else if (lvl < 6) {
			expexp = Math.Pow(lvl + 1, 3.7);
		}
		else if (lvl < 7) {
			expexp = Math.Pow(lvl + 1, 3.4);
		}
		else if (lvl < 8) {
			expexp = Math.Pow(lvl + 1, 3.2);
		}
		else {
			expexp = Math.Pow(lvl + 1, 3);
		}
		if (CharName == "Zeo") {
			CurrentData.GetComponent(GameData).RefreshZeoStats();
		}
		if (CharName == "Liz") {
			CurrentData.GetComponent(GameData).RefreshLizStats();
		}
		if (CharName == "Alice") {
			CurrentData.GetComponent(GameData).RefreshAliceStats();
		}
		if (CharName == "Elicia") {
			CurrentData.GetComponent(GameData).RefreshEliciaStats();
		}
		if (CharName == "John") {
			CurrentData.GetComponent(GameData).RefreshJohnStats();
		}
		if (CharName == "Alex") {
			CurrentData.GetComponent(GameData).RefreshAlexStats();
		}
		if (CharName == "Max") {
			CurrentData.GetComponent(GameData).RefreshMaxStats();
		}
		if (CharName == "Mia") {
			CurrentData.GetComponent(GameData).RefreshMiaStats();
		}
	}
	needexp = expexp - exp;
	nextlvl = lvl + 1;
	if (lvlup == 1) {
		lvlup = 0;
	}
	statdef = Math.Floor(((str * 0.5) + (agi * 2)) / 2 * defmod);
	statspdef = Math.Floor(((wis * 2) + (agi * 0.75)) / 2 * defmod);
	statdmg = Math.Floor((str) + (str * Math.Log(lvl + 0.1)) + (agi * Math.Log(lvl + 0.1)) * dmgmod);
	statmdmg = Math.Floor((intel) + (intel * Math.Log(lvl + 0.1)) + (wis * Math.Log(lvl + 0.1)) * dmgmod);
	statcrit = Math.Floor((luck) + (luck * Math.Log((lvl * 1.3) + 0.1)) / 2.5);
	statcritblock = Math.Floor((((intel * 1.5) + (agi * 1.5) + (luck * Math.Log((lvl * 2) + 0.1))) / 2.5) * defmod); 
	if (charupdate == 0) {
		charupdate = 1;
	}
}

function UpdateChar () {
	charupdate = 0;
}

function GetLvl () {
	return lvl;
}

function GetHP () {
	return hp;
}

function GetMP () {
	return mp;
}

function GetMaxHP () {
	return maxhp;
}

function GetMaxMP () {
	return maxmp;
}

function GetStr () {
	return str;
}

function GetIntel () {
	return intel;
}

function GetWis () {
	return wis;
}

function GetAgi () {
	return agi;
}

function GetExp () {
	return exp;
}

function GetNeedExp () {
	return needexp;
}

function GetNextLvl () {
	return nextlvl;
}

function GetStatDef () {
	return statdef;
}

function GetStatSpDef () {
	return statspdef;
}

function GetStatDmg () {
	return statdmg;
}

function GetStatMDmg () {
	return statmdmg;
}
