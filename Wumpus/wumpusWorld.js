/* For inference I need to be able to do exat matching of nested graphs */
/* Access Graphs from an evaluator or from another context */

/*
* Compare two graphs.
* @param {graph} graph1 - one to be compared
* @param {graph} graph2 - two to be compared
* @returns true if exactly the same, other wise returns false
*/

function deepCompare (graph1, graph2) {
  let one = graph1;
  let two = graph2;
  let result = false;

  for(let item of one.concept) {
    for(let item2 of two.concept) {
      if(item.uuid == item2.uuid){
        console.log(item2);
        result = true;
        break;
      }
    }
  }

  return result;
}

/* Inference Rules about the Wumpus World */

/* The Wumpus World has only a few rules. The player always start in Square x 0 y 3 (00 is top left)
*   in each room the player may receive a percept.
*   If the player feels a breeze an adjacent room is actually a pit.
*   If the player smells a stench, the Wumpus is in an adjacent room.
*   If the player perceives a glitter, he is in the same room as a piece of gold. (He should grab it)
*   If the player falls into a pit or ends up in the same room with the Wumpus, he dies.
*/

var initialGraph = parse("Initial::[Player:You*x(1.0)](location?x?y)[Room:03*y(1.0)](pTime?a?y)[Time:0*a(1.0)](state?y?z)[Safe:Yes*z(1.0)]")
translate(initialGraph)
