#pragma strict

private var CurrentData : GameObject;
private var BattleSystems : GameObject;
private var AtTiles: GameObject;
	AtTiles = GameObject.Find("AttackTiles");
private var MvTiles: GameObject;
	MvTiles = GameObject.Find("MoveTiles");
var Members: int;
var i: int = 0;
var x: int = 0;
var member: String[];
var CurrentMembers: int[];
var MemberPlaceholder: int[];
var BoxInitializer : int[];
var BoxNameData : String[];
var BoxHPData : String[];
var BoxMPData : String[];
var BoxMaxHPData : String[];
var BoxMaxMPData : String[];
var CharTurnOrder : int[];
var End: int = 0;
var SHeight: double = Screen.height;
var SWidth: double = Screen.width;
/**
1 = your turn
2 = enemy turn
3 = misc. turn
**/
var WhosTurn: int = 0;
// gui styles
var BattleMenu1 : GUIStyle;
var BattleMenuButtons : GUIStyle;
var NumberFormat : GUIStyle;
var NumberFormat2 : GUIStyle;
var MenuFormat : GUIStyle;
var ButtonFormat : GUIStyle;
var Attack: int = 0;
var Move: int = 0;
var BoxSizeW: double = SWidth / 9;
var BoxSizeH: double = SHeight / 8;

function Start () {
	BattleSystems = GameObject.Find("BattleSystemHolder");
	CurrentData = GameObject.Find("GameHolder");
	Members = CurrentData.GetComponent(QuickAccess).GetMembers();
	CurrentMembers = CurrentData.GetComponent(QuickAccess).GetCurrentMembers();
}

function Update () {
	if (SHeight != Screen.height) {
		SHeight = Screen.height;
		BoxSizeH = SHeight / 8;
	}
	if (SWidth != Screen.width) {
		SWidth = Screen.width;
		BoxSizeW = SWidth / 9;
	}
	WhosTurn = BattleSystems.GetComponent(BattleSystem).GetTeamTurn();
	Members = CurrentData.GetComponent(QuickAccess).GetMembers();
	CurrentMembers = CurrentData.GetComponent(QuickAccess).GetCurrentMembers();
	MemberPlaceholder = CurrentMembers;
	BoxInitializer = CurrentData.GetComponent(QuickAccess).getMInit();
	BoxNameData = CurrentData.GetComponent(QuickAccess).getMName();
	BoxHPData = CurrentData.GetComponent(QuickAccess).getMHP();
	BoxMPData = CurrentData.GetComponent(QuickAccess).getMMP();
	BoxMaxHPData = CurrentData.GetComponent(QuickAccess).getMMaxHP();
	BoxMaxMPData = CurrentData.GetComponent(QuickAccess).getMMaxMP();
	AtTiles.SendMessage("SetBaGUI", Attack);
	MvTiles.SendMessage("SetBaGUI", Move);
}

function EndTurn () {
	if (End == 1) {
		End = 0;
		return 1;
	}
	else if (End == 0) {
			return 0;
		}
		else
			return 0;
}

function OnGUI () {
	// your turn gui
	if (WhosTurn == 1) {
	
	
	
	
	
	}
	// debugging gui
	if (GUI.Button (Rect (0,100,80,20), "Make Text"))
		CurrentData.GetComponent(QuickAccess).MakeText("Zeo", "Hi There!");
	if (GUI.Button (Rect (0,120,80,20), "Enter Battle"))
		CurrentData.GetComponent(QuickAccess).EBattle();
	if (CurrentMembers[1] == 0)
		if (GUI.Button (Rect (0,0,80, 20), "Add Liz")) {
			CurrentData.GetComponent(QuickAccess).AddLiz();
		}
	if (CurrentMembers[2] == 0)	
		if (GUI.Button (Rect (0,20,80, 20), "Add Alice")) {
			CurrentData.GetComponent(QuickAccess).AddAlice();
		}	
	if (CurrentMembers[3] == 0)
		if (GUI.Button (Rect (0,40,80, 20), "Add Elicia")) {
			CurrentData.GetComponent(QuickAccess).AddElicia();
		}	
	if (CurrentMembers[4] == 0)
		if (GUI.Button (Rect (0,60,80, 20), "Add Max")) {
			CurrentData.GetComponent(QuickAccess).AddMax();
		}
	if (CurrentMembers[5] == 0)	
		if (GUI.Button (Rect (0,80,80, 20), "Add Mia")) {
			CurrentData.GetComponent(QuickAccess).AddMia();
		}
		if (GUI.Button (Rect (0,140, 80,20), "End Turn")) {
			End = 1;
		}
	// char boxes gui	
	GUI.Box (Rect (0,Screen.height - 70, 125, 70), BoxNameData[0]);
	GUI.Box (Rect (0,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
	GUI.Box (Rect(20,Screen.height - 45, 30, 20), BoxHPData[0], NumberFormat2);
	GUI.Box (Rect(50,Screen.height - 45, 5, 20), "/", NumberFormat);
	GUI.Box (Rect(55,Screen.height - 45, 30, 20), BoxMaxHPData[0], NumberFormat);
	GUI.Box (Rect (0,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
	GUI.Box (Rect(20,Screen.height - 25, 30, 20), BoxMPData[0], NumberFormat2);
	GUI.Box (Rect(50,Screen.height - 25, 5, 20), "/", NumberFormat);
	GUI.Box (Rect(55,Screen.height - 25, 30, 20), BoxMaxMPData[0], NumberFormat);
	if (Members > 1) {	
		GUI.Box (Rect (125,Screen.height - 70, 125, 70), BoxNameData[1]);
		GUI.Box (Rect (125,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
		GUI.Box (Rect(145,Screen.height - 45, 30, 20), BoxHPData[1], NumberFormat2);
		GUI.Box (Rect(175,Screen.height - 45, 5, 20), "/", NumberFormat);
		GUI.Box (Rect(180,Screen.height - 45, 30, 20), BoxMaxHPData[1], NumberFormat);
		GUI.Box (Rect (125,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
		GUI.Box (Rect(145,Screen.height - 25, 30, 20), BoxMPData[1], NumberFormat2);
		GUI.Box (Rect(175,Screen.height - 25, 5, 20), "/", NumberFormat);
		GUI.Box (Rect(180,Screen.height - 25, 30, 20), BoxMaxMPData[1], NumberFormat);
		if (Members > 2) {	
			GUI.Box (Rect (250,Screen.height - 70, 125, 70), BoxNameData[2]);
			GUI.Box (Rect (250,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
			GUI.Box (Rect(270,Screen.height - 45, 30, 20), BoxHPData[2], NumberFormat2);
			GUI.Box (Rect(300,Screen.height - 45, 5, 20), "/", NumberFormat);
			GUI.Box (Rect(305,Screen.height - 45, 30, 20), BoxMaxHPData[2], NumberFormat);
			GUI.Box (Rect(250,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
			GUI.Box (Rect(270,Screen.height - 25, 30, 20), BoxMPData[2], NumberFormat2);
			GUI.Box (Rect(300,Screen.height - 25, 5, 20), "/", NumberFormat);
			GUI.Box (Rect(305,Screen.height - 25, 30, 20), BoxMaxMPData[2], NumberFormat);
			if (Members > 3) {	
				GUI.Box (Rect (375,Screen.height - 70, 125, 70), BoxNameData[3]);
				GUI.Box (Rect (375,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
				GUI.Box (Rect(395,Screen.height - 45, 30, 20), BoxHPData[3], NumberFormat2);
				GUI.Box (Rect(425,Screen.height - 45, 5, 20), "/", NumberFormat);
				GUI.Box (Rect(430,Screen.height - 45, 30, 20), BoxMaxHPData[3], NumberFormat);
				GUI.Box (Rect(375,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
				GUI.Box (Rect(395,Screen.height - 25, 30, 20), BoxMPData[3], NumberFormat2);
				GUI.Box (Rect(425,Screen.height - 25, 5, 20), "/", NumberFormat);
				GUI.Box (Rect(430,Screen.height - 25, 30, 20), BoxMaxMPData[3], NumberFormat);
				if (Members > 4) {	
					GUI.Box (Rect (500,Screen.height - 70, 125, 70), BoxNameData[4]);
					GUI.Box (Rect (500,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
					GUI.Box (Rect(520,Screen.height - 45, 30, 20), BoxHPData[4], NumberFormat2);
					GUI.Box (Rect(550,Screen.height - 45, 5, 20), "/", NumberFormat);
					GUI.Box (Rect(555,Screen.height - 45, 30, 20), BoxMaxHPData[4], NumberFormat);
					GUI.Box (Rect (500,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
					GUI.Box (Rect(520,Screen.height - 25, 30, 20), BoxMPData[4], NumberFormat2);
					GUI.Box (Rect(550,Screen.height - 25, 5, 20), "/", NumberFormat);
					GUI.Box (Rect(555,Screen.height - 25, 30, 20), BoxMaxMPData[4], NumberFormat);	
					if (Members > 5) {	
						GUI.Box (Rect (625,Screen.height - 70, 125, 70), BoxNameData[5]);
						GUI.Box (Rect (625,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
						GUI.Box (Rect(645,Screen.height - 45, 30, 20), BoxHPData[5], NumberFormat2);
						GUI.Box (Rect(675,Screen.height - 45, 5, 20), "/", NumberFormat);
						GUI.Box (Rect(680,Screen.height - 45, 30, 20), BoxMaxHPData[5], NumberFormat);
						GUI.Box (Rect (625,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
						GUI.Box (Rect(645,Screen.height - 25, 30, 20), BoxMPData[5], NumberFormat2);
						GUI.Box (Rect(675,Screen.height - 25, 5, 20), "/", NumberFormat);
						GUI.Box (Rect(680,Screen.height - 25, 30, 20), BoxMaxMPData[5], NumberFormat);
						if (Members > 6) {
							GUI.Box (Rect (750,Screen.height - 70, 125, 70), BoxNameData[6]);
							GUI.Box (Rect (750,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
							GUI.Box (Rect(770,Screen.height - 45, 30, 20), BoxHPData[6], NumberFormat2);
							GUI.Box (Rect(800,Screen.height - 45, 5, 20), "/", NumberFormat);
							GUI.Box (Rect(805,Screen.height - 45, 30, 20), BoxMaxHPData[6], NumberFormat);
							GUI.Box (Rect (750,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
							GUI.Box (Rect(770,Screen.height - 25, 30, 20), BoxMPData[6], NumberFormat2);
							GUI.Box (Rect(800,Screen.height - 25, 5, 20), "/", NumberFormat);
							GUI.Box (Rect(805,Screen.height - 25, 30, 20), BoxMaxMPData[6], NumberFormat);	
							if (Members > 7) {	
								GUI.Box (Rect (875,Screen.height - 70, 125, 70), BoxNameData[7]);
								GUI.Box (Rect (875,Screen.height - 45, 10, 20), "HP : ", NumberFormat);
								GUI.Box (Rect(895,Screen.height - 45, 30, 20), BoxHPData[7], NumberFormat2);
								GUI.Box (Rect(925,Screen.height - 45, 5, 20), "/", NumberFormat);
								GUI.Box (Rect(930,Screen.height - 45, 30, 20), BoxMaxHPData[7], NumberFormat);
								GUI.Box (Rect (875,Screen.height - 25, 10, 20), "MP : ", NumberFormat);
								GUI.Box (Rect(895,Screen.height - 25, 30, 20), BoxMPData[7], NumberFormat2);
								GUI.Box (Rect(925,Screen.height - 25, 5, 20), "/", NumberFormat);
								GUI.Box (Rect(930,Screen.height - 25, 30, 20), BoxMaxMPData[7], NumberFormat);
							}
						}
					}
				}
			}
		}
	}
}

function GetAttack () {
	return Attack;
}

function GetMove () {
	return Move;
}