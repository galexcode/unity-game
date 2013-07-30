#pragma strict

private var CurrentData : GameObject;
var IsInBattle: int;
var X: double = 0;
var Print: String = "null";
var PName: String = "null";
var HandleText: int = 0;

function Start () {
	CurrentData = GameObject.Find("GameDataHolder");
}

function Update () {
	IsInBattle = CurrentData.GetComponent(GameData).IfInBattle();
	if (IsInBattle == 1)
		X = 100;
	else
		X = 0;
}

function OnGUI () {
	if (HandleText == 1) {
		GUI.Box (Rect (40, Screen.height - 110 - X, 60, 25), PName);
		GUI.Box (Rect (25, Screen.height - 100 - X, Screen.width - 50, 100), Print);
	}
}


function MakeText (Name: String, Text: String) {
	PName = Name;
	Print = Text;
	HandleText = 1;
}

function AddPicture (Name: String, Profile: int) {

}


