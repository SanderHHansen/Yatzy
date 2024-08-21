import "./Game.css";
import { useGameDataContext } from "./GameData.jsx";
import socket from "./SocketFrontend.jsx";

function Scoreboard() {
  // Getting gameData from context.
  const { playerId, gameData: game } = useGameDataContext();

  // Function to select score
  function setScoreToSection(sectionToBeScored) {
    // Checks if player is allowed to act
    if (playerId !== game.currentPlayer.playerId) {
      return; // Returns early if player isn't current player.
    }

    // Emits event to socket.
    socket.emit("selectingScore", sectionToBeScored);
    console.log("Selecting: " + sectionToBeScored + " to backend");
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {/* <th className="col1">{game ? `${game.gameId}` : ""}</th>{" "} */}
            <th className="col1"></th>
            {/* Leave empty */}
            {game &&
              game.playerArray.map((player, index) => (
                <th key={index} className="scoreData names">
                  {""}
                  {player.name}
                  {""}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col1"> Ones </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { ones },
                } = player;
                return ones ? (
                  <td key={index} className="scoreData">
                    {ones || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId &&
                  game.rollCount !== 0 ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("ones")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.ones}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Twos </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { twos },
                } = player;
                return twos ? (
                  <td key={index} className="scoreData">
                    {twos || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId &&
                  game.rollCount !== 0 ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("twos")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.twos}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Threes </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { twos },
                } = player;
                return twos ? (
                  <td key={index} className="scoreData">
                    {twos || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("threes")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.threes}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Fours </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { fours },
                } = player;
                return fours ? (
                  <td key={index} className="scoreData">
                    {fours || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("fours")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.fours}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Fives </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { fives },
                } = player;
                return fives ? (
                  <td key={index} className="scoreData">
                    {fives || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("fives")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.fives}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Sixes </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { sixes },
                } = player;
                return sixes ? (
                  <td key={index} className="scoreData">
                    {sixes || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("sixes")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.sixes}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr className="specialCell">
            <td className="col1"> Sum (Upper): </td>
            {game &&
              game.playerArray.map(({ scoreboard: { upperSum } }, index) => (
                <td key={index} className="scoreData">
                  {upperSum || ""}
                </td>
              ))}
          </tr>
          <tr className="specialCell">
            <td className="col1"> Bonus </td>
            {game &&
              game.playerArray.map(({ scoreboard: { bonus } }, index) => (
                <td key={index} className="scoreData">
                  {bonus || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> One pair </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { onePair },
                } = player;
                return onePair ? (
                  <td key={index} className="scoreData">
                    {onePair || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("onePair")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.onePair}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Two pairs </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { twoPairs },
                } = player;
                return twoPairs ? (
                  <td key={index} className="scoreData">
                    {twoPairs || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("twoPairs")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.twoPairs}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Three of a kind </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { threeOfAKind },
                } = player;
                return threeOfAKind ? (
                  <td key={index} className="scoreData">
                    {threeOfAKind || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("threeOfAKind")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.threeOfAKind}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Four of a kind </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { fourOfAKind },
                } = player;
                return fourOfAKind ? (
                  <td key={index} className="scoreData">
                    {fourOfAKind || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("fourOfAKind")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.fourOfAKind}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Small straight </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { smallStraight },
                } = player;
                return smallStraight ? (
                  <td key={index} className="scoreData">
                    {smallStraight || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("smallStraight")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.smallStraight}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Large straight </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { largeStraight },
                } = player;
                return largeStraight ? (
                  <td key={index} className="scoreData">
                    {largeStraight || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("largeStraight")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.largeStraight}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Full house </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { fullHouse },
                } = player;
                return fullHouse ? (
                  <td key={index} className="scoreData">
                    {fullHouse || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("fullHouse")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.fullHouse}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Chance </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { chance },
                } = player;
                return chance ? (
                  <td key={index} className="scoreData">
                    {chance || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("chance")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.chance}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr>
            <td className="col1"> Yatzy </td>
            {game &&
              game.playerArray.map((player, index) => {
                const {
                  scoreboard: { yatzy },
                } = player;
                return yatzy ? (
                  <td key={index} className="scoreData">
                    {yatzy || ""}
                  </td>
                ) : game.currentPlayer.playerId === player.playerId ? (
                  <td
                    key={index}
                    className="scoreData canSetScore"
                    onClick={() => setScoreToSection("yatzy")}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {game.scoresPossible.yatzy}
                    &nbsp;&nbsp; &lArr;
                  </td>
                ) : (
                  <td key={index} className="scoreData"></td>
                );
              })}
          </tr>
          <tr className="specialCell">
            <td className="col1"> Sum: </td>
            {game &&
              game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
                <td key={index} className="scoreData">
                  {totalSum || "0"}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
