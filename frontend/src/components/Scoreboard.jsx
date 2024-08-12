import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Scoreboard() {
  // State for players
  const [players, setPlayers] = useState([]);

  const addPlayer = (playerToBeAdded) => {
    setPlayers([...players, playerToBeAdded]);
  };

  // ! For testing. Importerer dummy.
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dummy-player")
      .then((response) => {
        addPlayer(response.data);
      })
      .catch((error) => console.error("Error fetching dummy player: ", error));
  }, []);

  // ! Slutt testing.

  return (
    <div>
      <p>"Har importert tabellen"</p>
      <table>
        <thead>
          <tr>
            <th> Scores </th> {/*// TODO Has to be deleted later. */}
            {players.map((player, index) => (
              <th key={index}> {player.name} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Ones </td>
            {players.map((player, index) => (
              <td key={index}> {player.scoreboard.ones} </td>
            ))}
          </tr>
          <tr>
            <td> Twos </td>
          </tr>
          <tr>
            <td> Threes </td>
          </tr>
          <tr>
            <td> Fours </td>
          </tr>
          <tr>
            <td> Fives </td>
          </tr>
          <tr>
            <td> Sixes </td>
          </tr>
          <tr>
            <td> Bonus </td>
          </tr>
          <tr>
            <td> Sum (Upper): </td>
          </tr>
          <tr>
            <td> One pair </td>
          </tr>
          <tr>
            <td> Two pairs </td>
          </tr>
          <tr>
            <td> Three of a kind </td>
          </tr>
          <tr>
            <td> Four of a kind </td>
          </tr>
          <tr>
            <td> Small straight </td>
          </tr>
          <tr>
            <td> Large straight </td>
          </tr>
          <tr>
            <td> Full house </td>
          </tr>
          <tr>
            <td> Chance </td>
          </tr>
          <tr>
            <td> Yatzy </td>
          </tr>
          <tr>
            <td> Sum: </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
