import "./Game.css";
import { useGameDataContext } from "./GameData.jsx";
import socket from "./SocketFrontend.jsx";

const upperSections = [
  { name: "Ones", key: "ones" },
  { name: "Twos", key: "twos" },
  { name: "Threes", key: "threes" },
  { name: "Fours", key: "fours" },
  { name: "Fives", key: "fives" },
  { name: "Sixes", key: "sixes" },
];

const lowerSections = [
  { name: "One pair", key: "onePair" },
  { name: "Two pairs", key: "twoPairs" },
  { name: "Three of a kind", key: "threeOfAKind" },
  { name: "Four of a kind", key: "fourOfAKind" },
  { name: "Small straight", key: "smallStraight" },
  { name: "Large straight", key: "largeStraight" },
  { name: "Full house", key: "fullHouse" },
  { name: "Chance", key: "chance" },
  { name: "Yatzy", key: "yatzy" },
];

function ScoreRow({ section, game, setScoreToSection, currentPlayerId }) {
  return (
    <tr>
      <td className="col1">{section.name}</td>
      {game.playerArray.map((player, index) => {
        const score = player.scoreboard[section.key];
        return score !== null ? (
          <td key={index} className="scoreData">
            {score}
          </td>
        ) : currentPlayerId === player.playerId && game.rollCount !== 0 ? (
          <td
            key={index}
            className="scoreData canSetScore"
            onClick={() => setScoreToSection(section.key)}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {game.scoresPossible[section.key]}&nbsp;&nbsp; &lArr;
          </td>
        ) : (
          <td key={index} className="scoreData"></td>
        );
      })}
    </tr>
  );
}

function Scoreboard() {
  const { playerId, gameData: game } = useGameDataContext();

  function setScoreToSection(sectionKey) {
    if (playerId !== game.currentPlayer.playerId) return;
    socket.emit("selectingScore", sectionKey);
    console.log("Selecting: " + sectionKey + " to backend");
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="col1"></th>
            {game &&
              game.playerArray.map((player, index) => (
                <th key={index} className="scoreData names">
                  {player.name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {upperSections.map((section) => (
            <ScoreRow
              key={section.key}
              section={section}
              game={game}
              setScoreToSection={setScoreToSection}
              currentPlayerId={game.currentPlayer.playerId}
            />
          ))}
          <tr className="specialCell">
            <td className="col1">Sum (Upper): </td>
            {game.playerArray.map(({ scoreboard: { upperSum } }, index) => (
              <td key={index} className="scoreData">
                {upperSum || ""}
              </td>
            ))}
          </tr>
          <tr className="specialCell">
            <td className="col1">Bonus</td>
            {game.playerArray.map(({ scoreboard: { bonus } }, index) => (
              <td key={index} className="scoreData">
                {bonus || ""}
              </td>
            ))}
          </tr>
          {lowerSections.map((section) => (
            <ScoreRow
              key={section.key}
              section={section}
              game={game}
              setScoreToSection={setScoreToSection}
              currentPlayerId={game.currentPlayer.playerId}
            />
          ))}
          <tr className="specialCell">
            <td className="col1">Total sum:</td>
            {game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
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
