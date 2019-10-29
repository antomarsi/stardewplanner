import React from "react";
import EditorCanvas from "../../components/EditorCanvas";

// import { Container } from './styles';

const Planner = () => (
  <div className="planner">
    <EditorCanvas />
    <div className="d-none">
      <svg width="1280" height="1040" id="editor"></svg>
      <div className="nexus-notification notification">
        <div className="header">
          <a
            href="https://mp.stardew.info/planner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multiplanner is here
          </a>
          <div className="hide-nexus-notification hide-notification">HIDE</div>
        </div>
        <div className="content">
          <a
            href="https://mp.stardew.info/planner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multiplanner
          </a>{" "}
          allows you to simultaneously plan your farm with up to 4 players here,
          on the planner
          <br />
          Go check it out!
          <br />
          <br />
          <b>
            Planner is now also listed at{" "}
            <a
              href="https://www.nexusmods.com/stardewvalley/mods/3787/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NexusMods
            </a>
            , leave a comment and endorse!
          </b>
          <br />
          Also don't forget our{" "}
          <a
            href="https://www.facebook.com/groups/stardewplanner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook group!
          </a>
          <br />
          <br />
          If you have any problems / issues / feature requests, don't hesitate
          to <a href="#contact">contact me</a>
          <br />
          <br />
        </div>
      </div>
      <div className="custom-layout-notification notification">
        <div className="header">You are using modded farm layout!</div>
        <div className="content">
          <a
            href="/"
            target="_blank"
            className="layout-url"
            rel="noopener noreferrer"
          >
            <span className="layout-name">WonderfulLifeFarm</span>
          </a>{" "}
          by <span className="layout-author">taintedwheat & JinxieWinxie</span>
        </div>
      </div>
      <div className="render-notification notification">
        <div className="header">
          You render is ready!
          <div className="render-notification hide-render-notification hide-notification">
            HIDE
          </div>
        </div>
        <div className="content">
          To access your render click here:{" "}
          <a
            href="/"
            target="_blank"
            className="render-url"
            rel="noopener noreferrer"
          >
            <span className="render-display-url"></span>
          </a>
          <br />
          <span className="powered-by">powered by upload.farm</span>
        </div>
      </div>
      <div className="count-report-notification notification">
        <div className="header">Object Count</div>
        <div className="content"></div>
      </div>
    </div>
    <div className="google-notification notification d-none">
      <div className="header">
        Ads:
        <div className="hide-google-notification hide-notification">HIDE</div>
      </div>
      <div className="content" style={{ width: "350px" }}>
        {
          //<!-- after-controls -->
        }
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "336px", height: "280px" }}
          data-ad-client="ca-pub-7596140300521041"
          data-ad-slot="3946693612"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        {
          //<!-- google ads -->
        }
      </div>
    </div>
  </div>
);

export default Planner;
