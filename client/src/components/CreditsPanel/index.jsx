import React, { Fragment } from "react";

const creditList = [
  {
    text: (
      <a
        href="https://www.reddit.com/user/hpeinar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Farm planner by <b>Henrik Peinar (/u/hpeinar)</b>
      </a>
    ),
    class: "label success credits"
  },
  {
    text: (
      <a
        href="https://www.reddit.com/user/zaxcz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Background image exported from game by <b>/u/zaxcz</b>
      </a>
    ),
    class: "label info"
  },
  {
    text: (
      <a
        href="https://www.reddit.com/user/Jurk0wski"
        target="_blank"
        rel="noopener noreferrer"
      >
        Building sizes and door locations by <b>/u/Jurk0wski</b>
      </a>
    ),
    class: "label info"
  },
  {
    text: (
      <a
        href="https://www.reddit.com/user/ThisIsMyName777"
        target="_blank"
        rel="noopener noreferrer"
      >
        Base save importing code by <b>/u/ThisIsMyName777</b>
      </a>
    ),
    class: "label info"
  },
  {
    text: (
      <a
        href="https://github.com/ClairelyClaire"
        target="_blank"
        rel="noopener noreferrer"
      >
        All crops from all seasons by <b>ClairelyClaire</b>
      </a>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        Tons of suggestions, fixes, testing and ideas by <b>R3ality</b>
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        <a
          href="https://upload.farm/"
          target="_blank"
          rel="noopener noreferrer"
          className="credits"
        >
          upload.farm by
        </a>{" "}
        <b>
          <a
            href="https://www.reddit.com/user/sketchy502"
            className="credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            sketchy502
          </a>{" "}
          &{" "}
          <a
            href="https://www.reddit.com/user/Lokili"
            className="credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lokili
          </a>
        </b>
      </Fragment>
    ),
    class: "label success credits"
  },
  {
    text: (
      <Fragment>
        Providing test save file with most of the items and ID's <b>Mai</b> from{" "}
        <a
          href="irc://irc.freenode.net/stardewvalley"
          target="_blank"
          rel="noopener noreferrer"
        >
          #stardewvalley
        </a>
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        Being a cool guy and pointing me in the right direction with some coding
        stuff <b>TeMPOraL</b> from{" "}
        <a
          href="irc://irc.freenode.net/stardewvalley"
          target="_blank"
          rel="noopener noreferrer"
        >
          #stardewvalley
        </a>
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        Helping to test and improve v2 version of the tool <b>speeder</b> from{" "}
        <a
          href="irc://irc.freenode.net/stardew-modding"
          target="_blank"
          rel="noopener noreferrer"
        >
          #stardewvalley
        </a>
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        Sharing their epic farm saves{" "}
        <a
          href="https://www.reddit.com/user/ky13"
          target="_blank"
          rel="noopener noreferrer"
        >
          /u/ky13
        </a>{" "}
        &{" "}
        <a
          href="https://www.reddit.com/user/Halfbloood"
          target="_blank"
          rel="noopener noreferrer"
        >
          /u/Halfbloood
        </a>
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        hweetipie, paraskeet Kylindra from{" "}
        <a
          href=" https://discordapp.com/invite/stardewvalley"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stardew Valley discord
        </a>{" "}
        for much help!
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        My name's [Raven] and I like to party, pointing out typos makes me feel
        smarty!
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        <a
          href="http://community.playstarbound.com/members/uselessdragonfly.636240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          uselessdragonfly
        </a>{" "}
        for providing test save files for 1.1
      </Fragment>
    ),
    class: "label info"
  },
  {
    text: (
      <Fragment>
        <a
          href="http://stardewvalley.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="credits"
        >
          Stardew Valley by{" "}
        </a>
        <b>
          <a
            href="https://www.reddit.com/user/ConcernedApe"
            className="credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            ConcernedApe
          </a>
        </b>
      </Fragment>
    ),
    class: "label success credits"
  },
  {
    text: (
      <a
        href="https://www.jetbrains.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        This project is built using tools offered by <b>JetBrains</b>
      </a>
    ),
    class: "label primary credits"
  }
];

const CreditsPanel = () => (
  <div className="panel callout radius" id="credits">
    <h3>Credits:</h3>
    {creditList.map(credit => (
      <div className={credit.class}>{credit.text}</div>
    ))}
  </div>
);

export default CreditsPanel;
