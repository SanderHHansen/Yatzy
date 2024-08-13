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
        setGame(response);
      })
      .catch((error) => {
        console.error("Couldn't fetch file", error);
      });
  }, []);

  // const fetchDummyPlayer1 = async () => {
  //   axios.get("http://localhost:3000/api/dummy-player").then((response) => {
  //     addPlayer(response.data);
  //   });
  // };

  // const fetchDummyPlayer2 = async () => {
  //   axios.get("http://localhost:3000/api/dummy-player2").then((response) => {
  //     addPlayer(response.data);
  //   });
  // };

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     await fetchDummyPlayer1();
  //     await fetchDummyPlayer2;
  //   };

  //   fetchAll();
  // }, []);
  // ! Slutt testing.

  return (
    <div>
      <table>
        <thead>
          <tr>
            {game &&
              game.players.map((player, index) => (
                <th key={index}> {player.name} </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Ones </td>
            {game &&
              game.players.map((player, index) => (
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
