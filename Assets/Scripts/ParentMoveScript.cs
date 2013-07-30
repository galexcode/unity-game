using UnityEngine;
using System.Collections;

public class ParentMoveScript : MonoBehaviour
{
	public int BaGUI;
    // Use this for initialization
    void Start ()
    {
		BaGUI = 0;
    }
 
    // Update is called once per frame
    void Update ()
    {
		if (BaGUI == 1) {
     	  foreach (Transform child in this.transform) {
        	  child.gameObject.SetActive(true);
         }
       }
    }
	
	void SetBaGUI (int x) {
		BaGUI = x;
	}
}