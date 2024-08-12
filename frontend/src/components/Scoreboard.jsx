import React from "react";
import { useState } from "react";

function Scoreboard() {
  return (
    <div>
      <p>"Har importert tabellen"</p>
      <table>
        <thead>
          <th> Poeng </th>
          <th> Player 1 </th>
        </thead>
        <tbody>
          <tr>
            <td> Ones </td>
            <td> 5 </td>
          </tr>
          <tr>
            <td> Twos </td>
          </tr>
          <tr>
            <td> Threes </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
