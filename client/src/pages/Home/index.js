import React from "react";

// import { Container } from './styles';

const HomePage = () => (
  <div>
    <div className="discord-link">
      <a href="https://discord.gg/QBqBAzp" target="_blank">
        <img src="/img/discord.png" title="Come chat with us!" />
      </a>
    </div>

    <div className="hero">
      <div className="row align-center">
        <div className="large-7 columns large-centered text-center">
          <h1>Stardew Planner</h1>
          <h5>
            This excellent tool helps you to plan out your farm easily and make
            it possible to test different{" "}
            <a
              href="http://store.steampowered.com/app/413150/Stardew_Valley/"
              target="_blank"
            >
              <img src="/img/sw-logo.png" alt="Stardew Valley" />
            </a>{" "}
            layouts with ease.
          </h5>

          <div className="credits">
            Renders provided by{" "}
            <a
              href="https://upload.farm/"
              target="_blank"
              onClick="ga('send', 'event', 'Upload farm link', 'Clicked on upload.farm link');"
            >
              upload.farm
            </a>{" "}
            | Page design by{" "}
            <a
              href="https://dribbble.com/kedin"
              onclick="ga('send', 'event', 'Karel Eding link', 'Clicked on kedin Dribble link');"
              target="_blank"
            >
              Karel Eding
            </a>
          </div>
          <a className="button" href="/planner/" target="_self">
            Start Planning
          </a>
        </div>
      </div>
      <div className="gradient"></div>
    </div>

    <div className="row map-gallery">
      {
        //<!-- Popular -->
      }
      <div className="row gallery-row popular-gallery">
        <div className="large-12 columns header text-center medium-text-left">
          <h4>
            Popular{" "}
            <small>
              These are selected renders that are popular by either views or in
              our{" "}
              <a
                href="https://www.facebook.com/groups/stardewplanner/"
                target="_blank"
              >
                Facebook community
              </a>
            </small>
          </h4>
        </div>
      </div>

      {
        //<!-- useful renders -->
      }
      <div className="row gallery-row useful-gallery">
        <div className="large-12 columns header text-center medium-text-left">
          <h4>
            Useful{" "}
            <small>
              Plans that show effective placement or some other tricks
            </small>
          </h4>
        </div>
      </div>

      {
        //<!-- latest renders -->
      }
      <div className="row gallery-row latest-gallery">
        <div className="large-12 columns header text-center medium-text-left">
          <h4>
            Latest <small>Latest renders by render creation time</small>
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
