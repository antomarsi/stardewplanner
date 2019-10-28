import React from "react";

const GoldenPatronsList = ["Brittany Crites"];

const PatronsList = [
  "Julie Xue",
  "Marie Jeffries",
  "Glen Martlin",
  "Brad Greer",
  "Chakwaina",
  "Steven Carpenter",
  "Peter Collins",
  "Torin Sockey",
  "Joce",
  "Kaiwren"
];

const PatronsPanel = () => (
  <div className="panel callout radius" id="patrons">
    <h2>Golden patrons:</h2>
    {GoldenPatronsList.map(goldenPatron => (
      <h1>{goldenPatron}</h1>
    ))}
    <h3>Patrons:</h3>
    {PatronsList.map(patron => (
      <h1>{patron}</h1>
    ))}
    <br />A very big thanks to everybody who helps to keep this tool running!
  </div>
);

export default PatronsPanel;
