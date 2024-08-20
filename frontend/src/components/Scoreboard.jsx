import "./Game.css";
import { useGameDataContext } from "./GameData.jsx";

function Scoreboard() {
  // Getting gameData from context.
  const { gameData: game } = useGameDataContext();

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
              game.playerArray.map(({ scoreboard: { ones } }, index) => (
                <td key={index} className="scoreData">
                  {ones || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Twos </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twos } }, index) => (
                <td key={index} className="scoreData">
                  {twos || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Threes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { threes } }, index) => (
                <td key={index} className="scoreData">
                  {threes || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Fours </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fours } }, index) => (
                <td key={index} className="scoreData">
                  {fours || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Fives </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fives } }, index) => (
                <td key={index} className="scoreData">
                  {fives || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Sixes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { sixes } }, index) => (
                <td key={index} className="scoreData">
                  {sixes || ""}
                </td>
              ))}
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
              game.playerArray.map(({ scoreboard: { onePair } }, index) => (
                <td key={index} className="scoreData">
                  {onePair || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Two pairs </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twoPair } }, index) => (
                <td key={index} className="scoreData">
                  {twoPair || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Three of a kind </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { threeOfAKind } }, index) => (
                  <td key={index} className="scoreData">
                    {threeOfAKind || ""}
                  </td>
                ),
              )}
          </tr>
          <tr>
            <td className="col1"> Four of a kind </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fourOfAKind } }, index) => (
                <td key={index} className="scoreData">
                  {fourOfAKind || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Small straight </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { smallStraight } }, index) => (
                  <td key={index} className="scoreData">
                    {smallStraight || ""}
                  </td>
                ),
              )}
          </tr>
          <tr>
            <td className="col1"> Large straight </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { largeStraight } }, index) => (
                  <td key={index} className="scoreData">
                    {largeStraight || ""}
                  </td>
                ),
              )}
          </tr>
          <tr>
            <td className="col1"> Full house </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fullHouse } }, index) => (
                <td key={index} className="scoreData">
                  {fullHouse || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Chance </td>
            {game &&
              game.playerArray.map(({ scoreboard: { chance } }, index) => (
                <td key={index} className="scoreData">
                  {chance || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td className="col1"> Yatzy </td>
            {game &&
              game.playerArray.map(({ scoreboard: { yatzy } }, index) => (
                <td
                  key={index}
                  className={`scoreData ${yatzy ? "rainbow" : ""}`}
                >
                  {yatzy || ""}
                </td>
              ))}
          </tr>
          <tr className="specialCell">
            <td className="col1"> Sum: </td>
            {game &&
              game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
                <td key={index} className="scoreData">
                  {totalSum || ""}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
