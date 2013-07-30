#pragma downcast

var XCord: int = 0;
var YCord: int = 0;
var BSystem: GameObject;
	BSystem = GameObject.Find("BattleSystemHolder");
var BGUI: GameObject;
	BGUI = GameObject.Find("BattleUIHolder");
var startcolor : Color;
	startcolor = renderer.material.color;
var mouseover = 0;
var OverColor: Color;
	OverColor = renderer.material.color + Color(0.25,0.25,1);



function Start () {

}

function Update () {
	if (mouseover == 0) {
		renderer.material.color = startcolor;
	}
	if (BSystem.GetComponent(BattleSystem).GetMoveTiles(XCord, YCord) == 0) {
		SetInActive ();
	}
}

function SetInActive () {
	this.gameObject.SetActive(false);
}

function OnMouseOver() {
	mouseover = 1;
	renderer.material.color = OverColor;
}

function OnMouseExit() {
	mouseover = 0;
}