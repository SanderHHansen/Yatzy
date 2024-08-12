import React from "react";
import { useState } from "react";

function Scoreboard() {
  return (
    <div>
      <p>"Har importert tabellen"</p>
      <table>
        <thead>
          <tr>
            <th> Poeng </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Ones </td>
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
