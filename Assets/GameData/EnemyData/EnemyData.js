import System;

var MobName = "name";
var lvl = 1;
var hp;
var mp;
var strmod = 1;
var intelmod = 1;
var wismod = 1;
var agimod = 1;
var luckmod = 1;
var statdef;
var statdmg;
var statmdmg;
var statspdef;
var newlvl;
var str;
var intel;
var wis;
var maxhp;
var maxmp;
var agi;
var luck;
var giveexp;

function Start () {
	str = Math.Floor(lvl * Math.Pow(3, strmod));
	intel = Math.Floor(lvl * Math.Pow(3, intelmod));
	wis = Math.Floor(lvl * Math.Pow(3, wismod));
	agi = Math.Floor(lvl * Math.Pow(3, agimod));
	maxhp = Math.Floor(((str * 1.75) + (agi * 0.8)) * 1.5);
	maxmp = Math.Floor(((intel * 0.55) + (wis * 2)) * 1.5);
	hp = maxhp;
	mp = maxmp;
	statdef = Math.Floor(((str * 1.5) + (agi * 0.5)) / 2);
	statspdef = Math.Floor(((wis * 2) + (agi * 0.5)) / 2);
	statdmg = Math.Floor((str / 2) + (str * Math.Log(lvl + 0.1)));
	statmdmg = Math.Floor((intel / 2) + (intel * Math.Log(lvl + 0.1)));
	giveexp = Math.Floor(((strmod + intelmod + wismod + agimod) / 3) * lvl * 10);
}

function Update () {

}

function GetGiveExp () {
	return giveexp;
}

function GetMobName () {
	return MobName;
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

function GetMaxHP () {
	return maxhp; 
}

function GetMaxMP () {
	return maxmp;
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