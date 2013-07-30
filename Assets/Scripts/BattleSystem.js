#pragma strict

/**
0 - 8 = Your team
8-20 = enemy team
**/
var BattleArea: String = "Default";
var TurnOrder: int[] = new int[21];
	TurnOrder[0] = 1;
var MoveTile = new Array[11];
var FullMove = new Array[15];
var i: int = 0;
	while (i < 11) {
		MoveTile[i] = new int[11];
		i++;
	}
	i = 0;
	while (i < 15) {
		FullMove[i] = new int[12];
		i++;
	}
var test;
var TileData = new Array[15];
	i = 0;
	while (i < 15) {
		TileData[i] = new int[12];
		i++;
	}
var AttackTile = new Array[15];
	i = 0;
	while (i < 15) {
		AttackTile[i] = new int[12];
		i++;
	}
var UnitData = new Array(2);
	UnitData[1] = new int[12];
	UnitData[2] = new int[12];
var UnitPosition = new int[20];
var AttackerAtkStat: int;
var AttackerDefStat: int;
var DefenderDefStat: int;
var DefenderAtkStat: int;
var turn: int = 1;
var WhoseTurn: int = 0;
var TurnEnd: int = 0;
var TurnTimer: int = 0;
/**
1 = your turn
2 = enemy turn
3 = misc turn
**/
var TeamTurn: int = 0;
var y: int = 0;
var x: int = 0;
i = 0;

// Character Object Variables
private var Characters: GameObject[] = new GameObject[9];
	Characters[0] = GameObject.Find("ZeoData");
	Characters[1] = GameObject.Find("LizData");
	Characters[2] = GameObject.Find("AliceData");
	Characters[3] = GameObject.Find("EliciaData");
	Characters[4] = GameObject.Find("MaxData");
	Characters[5] = GameObject.Find("MiaData");
	Characters[6] = GameObject.Find("JohnData");
	Characters[7] = GameObject.Find("AlexData");
private var Mobs: GameObject[] = new GameObject[12];
private var Battle: GameObject;
	Battle = GameObject.Find("BattleUIHolder"); 

function Start () {
	// Tile Object Variables
	x = 0;
	y = 0;
	TurnTimer = 0;
	DefineTurn();
}

function Update () {
	if (TurnOrder[TurnTimer] == 0)
		TurnTimer = 0;
	WhoseTurn = TurnOrder[TurnTimer];
	if (WhoseTurn < 9) {
		TeamTurn = 1;
	}
	else if (WhoseTurn > 8) {
		TeamTurn = 2;
	}
}


// Battle Functions
function EndTurn () {
	TurnTimer++;
}

function Victory () {

}

function Defeat () {

}

function CalculateAttackRange () {

}

// Test Numbers
// 0 = Empty slot (Untested)
// 1 = Original slot
// 2 = Moveable Slot
// 3 = Friendly Slot (Moveable)
// 4 = Friendly Slot (Unmmoveable)
// 5 = Enemy Slot
// 6 = Moved Slot

function CalculateMovement () {
	MoveTile[5][5] = 1;
	TileConvertMovetoFull(WhoseTurn);
	i = 0;
	UpTest(5,6);
	DownTest(5,4);
	RightTest(6,5);
	LeftTest(4,5);
	while (i < 3) {
		// testing right
		RightTest(7,5);
		UpTest(7,5);
		DownTest(7,5);
		RightTest(8,5);
		UpTest(8,5);
		DownTest(8,5);
		RightTest(9,5);
		RightTest(10,5);
		// testing left
		LeftTest(3,5);
		UpTest(3,5);
		DownTest(3,5);
		LeftTest(2,5);
		UpTest(2,5);
		DownTest(2,5);
		LeftTest(1,5);
		LeftTest(0,5);
		// teting up
		UpTest(5, 7);
		RightTest(5,7);
		LeftTest(5,7);
		UpTest(5, 8);
		RightTest(5,8);
		LeftTest(5,8);	
		UpTest(5, 9);
		UpTest(5, 10);	
		// testing down
		DownTest(5, 3);
		RightTest(5,3);
		LeftTest(5,3);
		DownTest(5, 2);
		RightTest(5,2);
		LeftTest(5,2);	
		DownTest(5, 1);
		DownTest(5, 0);	
		// Top Right corner
		DownTest(6, 6);
		RightTest(6,6);
		UpTest(6,6);
		LeftTest(6,6);
		DownTest(6, 7);
		RightTest(6,7);
		UpTest(6,7);
		LeftTest(6,7);
		DownTest(7, 6);
		RightTest(7,6);
		UpTest(7,6);
		LeftTest(7,6);
		RightTest(7,7);
		UpTest(7,7);
		RightTest(6,8);
		UpTest(6,8);
		UpTest(7,8);
		RightTest(7,8);
		UpTest(6,9);
		RightTest(6,9);
		UpTest(9,6);
		RightTest(9,6);
		UpTest(8,7);
		RightTest(8,7);
		RightTest(8,6);
		UpTest(8,6);
		// top left corner
		DownTest(4,6);
		RightTest(4,6);
		UpTest(4,6);
		LeftTest(4,6);
		DownTest(4,7);
		RightTest(4,7);
		UpTest(4,7);
		LeftTest(4,7);
		DownTest(3,6);
		RightTest(3,6);
		UpTest(3,6);
		LeftTest(3,6);
		LeftTest(3,7);
		UpTest(3,7);
		LeftTest(4,8);
		UpTest(4,8);
		UpTest(3,8);
		LeftTest(3,8);
		UpTest(4,9);
		LeftTest(4,9);
		UpTest(1,6);
		LeftTest(1,6);
		UpTest(2,7);
		LeftTest(2,7);
		LeftTest(2,6);
		UpTest(2,6);
		// bottom right corner
		DownTest(6,4);
		RightTest(6,4);
		UpTest(6,4);
		LeftTest(6,4);
		DownTest(7,4);
		RightTest(7,4);
		UpTest(7,4);
		LeftTest(7,4);
		DownTest(6,3);
		RightTest(6,3);
		UpTest(6,3);
		LeftTest(6,3);
		RightTest(7,3);
		DownTest(7,3);
		RightTest(8,4);
		DownTest(8,4);
		DownTest(3,8);
		RightTest(3,8);
		DownTest(9,4);
		RightTest(9,4);
		DownTest(6,1);
		RightTest(6,1);
		DownTest(7,2);
		RightTest(7,2);
		RightTest(6,2);
		DownTest(6,2);
		// bottom left corner
		DownTest(4, 4);
		RightTest(4,4);
		UpTest(4,4);
		LeftTest(4,4);
		DownTest(4, 3);
		RightTest(4,3);
		UpTest(4,3);
		LeftTest(4,3);
		DownTest(3, 4);
		RightTest(3,4);
		UpTest(3,4);
		LeftTest(3,4);
		LeftTest(3,3);
		DownTest(3,3);
		LeftTest(4,2);
		DownTest(4,2);
		DownTest(3,2);
		LeftTest(3,2);
		DownTest(4,1);
		LeftTest(4,1);
		DownTest(1,4);
		LeftTest(1,4);
		DownTest(2,3);
		LeftTest(2,3);
		LeftTest(2,4);
		DownTest(2,4);
		// finish testing
		i++;
	}
}

// Define Turn Order
function DefineTurn() {

}

//Tile Conversion Function
function TileConvertSpawntoFull() {

}

function TileConvertFulltoMove(Unit: int) {

}

function TileConvertMovetoFull(Tile: int) {

}

//Tile validity functions
function UpTest(CordX: int, CordY: int) {
	if(MoveTile[CordX][CordY] == 0) {
		test = MoveTile[CordX][CordY - 1];
		if(test != 0 && test != 4 && test != 5)
			MoveTile[CordX][CordY] = 2;
	}
}

function DownTest(CordX: int, CordY: int) {
	if(MoveTile[CordX][CordY] == 0) {
		test = MoveTile[CordX][CordY + 1];
		if(test != 0 && test != 4 && test != 5)
			MoveTile[CordX][CordY] = 2;
	}
}

function RightTest(CordX: int, CordY: int) {
	if(MoveTile[CordX][CordY] == 0) {
		test = MoveTile[CordX - 1][CordY];
		if(test != 0 && test != 4 && test != 5)
			MoveTile[CordX][CordY] = 2;
	}
}

function LeftTest(CordX: int, CordY: int) {
	if(MoveTile[CordX][CordY] == 0) {
		test = MoveTile[CordX + 1][CordY];
		if(test != 0 && test != 4 && test != 5)
			MoveTile[CordX][CordY] = 2;
	}
}

function GetTeamTurn() {
	return TeamTurn;
}

function GetAttackTiles (CordX: int, CordY: int) {
	return AttackTile[CordX][CordY];
}

function GetMoveTiles (CordX: int, CordY: int) {
	return FullMove[CordX][CordY];
}