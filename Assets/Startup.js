#pragma strict

function Start () {
    Debug.Log("Start!");
    InitGrid();
}

function Update () {

}

function AddLine(from, to) {
    var line = GameObject.Find("Empty_GridLine");
    if (!line) {
        Debug.Log("No line found.");
        return;
    }
    var newLine = Instantiate(line) as GameObject;
    var lineRenderer = newLine.GetComponent(LineRenderer) as LineRenderer;
    if (!lineRenderer) {
        Debug.Log("No line renderer!");
        return;
    }
    lineRenderer.SetPosition(0, from);
    lineRenderer.SetPosition(1, to);
};

function InitGrid() {
    Debug.Log("Init Grid!");
    var gridSizeX = 15;
    var gridSizeY = 12;
        
    Gizmos.color = Color.blue;
    
    var tileWidth = 6;
    var from : Vector3;
    var to : Vector3;
    var i = 0;
    
    for (i = 0; i < gridSizeX+1; ++i) {
        var x = i * tileWidth;
	    from = Vector3(x, gridSizeY * tileWidth, 0.0);
	    to = Vector3(x, 0, 0.0);
	    AddLine(from, to);
    }
    
    for (i = 0; i < gridSizeY+1; ++i) {
        var y = i * tileWidth;
    	from = Vector3(0, y, 0.0);
	    to = Vector3(gridSizeX * tileWidth, y, 0.0);
	    AddLine(from, to);
    }
};