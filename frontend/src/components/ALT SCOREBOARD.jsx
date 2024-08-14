import { useState, useEffect } from "react";
import axios from "axios";
import "./Game.css";

function Scoreboard() {
  // State for game
  const [game, setGame] = useState(null);

  // ! For testing. Importerer dummy.
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dummy-game")
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.error("Couldn't fetch file", error);
      });
  }, []);
  // ! Slutt testing.

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="col1"></th> {/* Leave empty */}
            {game &&
              game.playerArray.map((player, index) => (
                <th key={index} className="scoreData names">
                  {" "}
                  {player.name}{" "}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* Adding upper values */}
          {["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes"].map(
            (scoreType) => (
              <tr key={scoreType}>
                <td className="col1">{scoreType}</td>
                {game &&
                  game.playerArray.map((player, index) => (
                    <td key={index} className="scoreData">
                      {player.scoreboard[scoreType] || ""}
                    </td>
                  ))}
              </tr>
            ),
          )}
          {/* Adding upper sum and bonus */}
          {["Sum (Upper)", "Bonus"].map((scoreType) => (
            <tr key={scoreType} className="specialCell">
              <td className="col1">{scoreType}</td>
              {game &&
                game.playerArray.map((player, index) => (
                  <td key={index} className="scoreData">
                    {player.scoreboard[scoreType] || ""}
                  </td>
                ))}
            </tr>
          ))}
          {[
            "One pair",
            "Two pairs",
            "Three of a kind",
            "Four of a kind",
            "Small straight",
            "Large straigth",
            "Full house",
            "Chance",
            "Yatzy",
          ].map((scoreType) => (
            <tr key={scoreType}>
              <td className="col1">{scoreType}</td>
              {game &&
                game.playerArray.map((player, index) => (
                  <td key={index} className="scoreData">
                    {player.scoreboard[scoreType] || ""}
                  </td>
                ))}
            </tr>
          ))}
          <tr className="specialCell">
            <td> Score: </td>
            {game &&
              game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
                <td key={index} className="scoreData">
                  {totalSum || ""}
                </td>
              ))}
          </tr>

          {/* <tr>
            <td> Ones </td>
            {game &&
              game.playerArray.map(({ scoreboard: { ones } }, index) => (
                <td key={index} className="scoreData">
                  {ones || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Twos </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twos } }, index) => (
                <td key={index} className="scoreData">
                  {twos || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Threes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { threes } }, index) => (
                <td key={index} className="scoreData">
                  {threes || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Fours </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fours } }, index) => (
                <td key={index} className="scoreData">
                  {fours || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Fives </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fives } }, index) => (
                <td key={index} className="scoreData">
                  {fives || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Sixes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { sixes } }, index) => (
                <td key={index} className="scoreData">
                  {sixes || ""}
                </td>
              ))}
          </tr> */}
          {/* <tr className="specialCell">
            <td> Sum (Upper): </td>
            {game &&
              game.playerArray.map(({ scoreboard: { upperSum } }, index) => (
                <td key={index} className="scoreData">
                  {upperSum || ""}
                </td>
              ))}
          </tr>
          <tr className="specialCell">
            <td> Bonus </td>
            {game &&
              game.playerArray.map(({ scoreboard: { bonus } }, index) => (
                <td key={index} className="scoreData">
                  {bonus || ""}
                </td>
              ))}
          </tr> */}
          {/* <tr>
            <td> One pair </td>
            {game &&
              game.playerArray.map(({ scoreboard: { onePair } }, index) => (
                <td key={index} className="scoreData">
                  {onePair || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Two pairs </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twoPair } }, index) => (
                <td key={index} className="scoreData">
                  {twoPair || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Three of a kind </td>
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
            <td> Four of a kind </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fourOfAKind } }, index) => (
                <td key={index} className="scoreData">
                  {fourOfAKind || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Small straight </td>
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
            <td> Large straight </td>
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
            <td> Full house </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fullHouse } }, index) => (
                <td key={index} className="scoreData">
                  {fullHouse || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Chance </td>
            {game &&
              game.playerArray.map(({ scoreboard: { chance } }, index) => (
                <td key={index} className="scoreData">
                  {chance || ""}
                </td>
              ))}
          </tr>
          <tr>
            <td> Yatzy </td>
            {game &&
              game.playerArray.map(({ scoreboard: { yatzy } }, index) => (
                <td key={index} className="scoreData">
                  {yatzy || ""}
                </td>
              ))}
          </tr> */}
          {/* <tr className="specialCell">
            <td> Sum: </td>
            {game &&
              game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
                <td key={index} className="scoreData">
                  {totalSum || ""}
                </td>
              ))}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
