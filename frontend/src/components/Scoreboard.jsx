import { useState, useEffect } from "react";
import axios from "axios";
import "./Scoreboard.css";

function Scoreboard() {
  // State for game
  const [game, setGame] = useState(null);

  // const [players, setPlayers] = useState([]);

  // const addPlayer = (playerToBeAdded) => {
  //   setPlayers([...players, playerToBeAdded]);
  // };

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
            <th></th> {/* Leave empty */}
            {game &&
              game.playerArray.map((player, index) => (
                <th key={index}> {player.name} </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Ones </td>
            {game &&
              game.playerArray.map(({ scoreboard: { ones } }, index) => (
                <td key={index}>{ones || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Twos </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twos } }, index) => (
                <td key={index}>{twos || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Threes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { threes } }, index) => (
                <td key={index}>{threes || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Fours </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fours } }, index) => (
                <td key={index}>{fours || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Fives </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fives } }, index) => (
                <td key={index}>{fives || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Sixes </td>
            {game &&
              game.playerArray.map(({ scoreboard: { sixes } }, index) => (
                <td key={index}>{sixes || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Bonus </td>
            {game &&
              game.playerArray.map(({ scoreboard: { bonus } }, index) => (
                <td key={index}>{bonus || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Sum (Upper): </td>
            {game &&
              game.playerArray.map(({ scoreboard: { upperSum } }, index) => (
                <td key={index}>{upperSum || ""}</td>
              ))}
          </tr>
          <tr>
            <td> One pair </td>
            {game &&
              game.playerArray.map(({ scoreboard: { onePair } }, index) => (
                <td key={index}>{onePair || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Two pairs </td>
            {game &&
              game.playerArray.map(({ scoreboard: { twoPair } }, index) => (
                <td key={index}>{twoPair || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Three of a kind </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { threeOfAKind } }, index) => (
                  <td key={index}>{threeOfAKind || ""}</td>
                ),
              )}
          </tr>
          <tr>
            <td> Four of a kind </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fourOfAKind } }, index) => (
                <td key={index}>{fourOfAKind || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Small straight </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { smallStraight } }, index) => (
                  <td key={index}>{smallStraight || ""}</td>
                ),
              )}
          </tr>
          <tr>
            <td> Large straight </td>
            {game &&
              game.playerArray.map(
                ({ scoreboard: { largeStraight } }, index) => (
                  <td key={index}>{largeStraight || ""}</td>
                ),
              )}
          </tr>
          <tr>
            <td> Full house </td>
            {game &&
              game.playerArray.map(({ scoreboard: { fullHouse } }, index) => (
                <td key={index}>{fullHouse || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Chance </td>
            {game &&
              game.playerArray.map(({ scoreboard: { chance } }, index) => (
                <td key={index}>{chance || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Yatzy </td>
            {game &&
              game.playerArray.map(({ scoreboard: { yatzy } }, index) => (
                <td key={index}>{yatzy || ""}</td>
              ))}
          </tr>
          <tr>
            <td> Sum: </td>
            {game &&
              game.playerArray.map(({ scoreboard: { totalSum } }, index) => (
                <td key={index}>{totalSum || ""}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
