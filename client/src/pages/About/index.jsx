import React from "react";
import { Container } from "reactstrap";
import PatronsPanel from "../../components/PatronsPanel";
import CreditsPanel from "../../components/CreditsPanel";
import DonatePanel from "../../components/DonatePanel";
import ChangeLogPanel from "../../components/ChangeLogPanel";

// import { Container } from './styles';

const About = () => (
  <Container>
    <div className="faq">
      <div className="panel info" id="controls">
        <h3>Controls:</h3>
        <ul>
          <li>
            <span className="key">E</span> to easily select eraser brush, press
            again to restore last brush
          </li>
          <li>
            <span className="key">S</span> to easily select selector brush,
            press again to restore last brush
          </li>
          <li>
            <span className="key">W</span> to toggle highlights temporarily (If
            you hold W and hover mouse to dropdowns it might break. Just toggle
            highlights in the highlight menu to fix for now)
          </li>
          <li>
            <span className="key">Esc</span> discards picked up building
          </li>
          <li>
            To delete buildings, either drop it to non-buildable area, click on
            it with eraser or press either <span className="key">Del</span> or{" "}
            <span className="key">fn</span>+
            <span className="key">Backspace</span> or{" "}
            <span className="key">Esc</span>{" "}
          </li>
          <li>
            Hold <span className="key">⌘</span> or{" "}
            <span className="key">Ctrl</span> or{" "}
            <span className="key">Shift</span> when placing buildings to
            "duplicate" it.
          </li>
          <li>
            If you need to scroll the editor and can't see the horizontal
            scrollbar, use middle mouse button
          </li>
          <li>You can enable brush overwriting mode in options</li>
          <li>You can open object counter window from the options menu</li>
          <li>
            You can find your save game file from{" "}
            <code>%AppData%/StardewValley/Saves</code>
          </li>
        </ul>
      </div>
      <div className="panel info text-center" id="google">
        <h3>Stardew Valley merchandise shop!:</h3>
        <a href="https://www.stardewvalley.net/shop/" target="_blank">
          <img
            className="img-fluid"
            src="https://www.stardewvalley.net/wp-content/uploads/2018/12/Item_Shop_logo.png"
            width="387"
            height="72"
            alt="Stardew Valley merchandise shop"
          />
        </a>
      </div>
      <ChangeLogPanel />
      <DonatePanel />
      <div className="panel radius" id="contact">
        <h3>Contact:</h3>
        <b>
          <a href="https://www.facebook.com/groups/stardewplanner/">
            Facebook group
          </a>
        </b>
        <br />
        <b>
          Discord:{" "}
          <a href="https://discord.gg/RRPKc4Z">
            Stardew Valley discord @hpeinar
          </a>
        </b>
        <br />
        <b>
          GitHub:{" "}
          <a href="https://github.com/hpeinar/stardewplanner" target="_blank">
            @GitHub
          </a>
        </b>
        <br />
        <b>Reddit:</b>{" "}
        <a
          href="https://www.reddit.com/r/StardewValley/comments/4ckzzo/stardew_farm_planner_v2_is_out_save_importing/"
          target="_blank"
        >
          v2 planner thread
        </a>
        <br />
        <b>Stardew official forums:</b>{" "}
        <a
          href="http://community.playstarbound.com/threads/farm-planner-v2-out-now-save-importing-and-much-more.112098/"
          target="_blank"
        >
          Official forums thread
        </a>
        <br />
        <b>Steam thread:</b>{" "}
        <a
          href="http://steamcommunity.com/app/413150/discussions/0/365163537814721588/"
          target="_blimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
ank"
        >
          Discussion thread
        </a>
        <br />
        <b>E-mail: </b>henrik<span className="hide-email">yobots</span>peinar@
        <span className="hide-email">hotmail.com</span>gmai
        <span className="hide-email">lllll</span>l.com
        <br />
        <b>
          Twitter: <a href="https://twitter.com/hpeinar">@hpeinar</a> &
          #stardewplanner
        </b>
        <br />
        <a
          href="https://twitter.com/intent/tweet?button_hashtag=stardewplanner&text=Plan%20you%20%23stardewvalley%20farm%20in"
          className="twitter-hashtag-button"
          data-related="hpeinar"
          data-url="https://stardew.info/planner"
        >
          Tweet #stardewplanner
        </a>
        {
          //TODO ADD Twitter here
          //</div></div>/<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        }
      </div>
      <div className="panel callout radius" id="faq">
        <h3>FAQ:</h3>
        <dl>
          <dt>1. What is this?</dt>
          <dd>
            This is{" "}
            <a href="http://stardewvalley.net/" target="_blank">
              Stardew Valley
            </a>{" "}
            interactive farm planner
          </dd>

          <dt>2. Saving doesn't appear to do anything?</dt>
          <dd>
            When you press save, your farm layout is saved and page will be
            reloaded to confirm the save. You can then use the url to link to
            your farm (or bookmark it)
          </dd>

          <dt>3. Does this work on touch devices (tablets, phones)?</dt>
          <dd>
            Current version does not officially support touch devices yet but it
            is planned for future.
          </dd>

          <dt>4. How can I delete buildings?</dt>
          <dd>
            Please see <a href="#controls">controls section</a>
          </dd>

          <dt>5. Not working? Having any issues?</dt>
          <dd>
            Feel free to contact me in{" "}
            <a href="https://www.reddit.com/user/hpeinar" target="_blank">
              reddit
            </a>{" "}
            or{" "}
            <a
              href="http://community.playstarbound.com/members/hpeinar.609256/"
              target="_blank"
            >
              Stardew official forums
            </a>
          </dd>
        </dl>
      </div>
      <div className="panel callout radius" id="custom-layout">
        <h3>How to get your custom layout to the planner:</h3>
        <ul>
          <li>
            Email me the following: <br />
            - link to the mod <br />
            - name of your layout as it should appear on the planner <br />
            - author(s) name(s)
            <br />
          </li>
          <li>
            Your mod has to be somewhat popular as it takes time for me to add
            the layout.
          </li>
        </ul>
      </div>
      <PatronsPanel />
      <CreditsPanel />
    </div>
  </Container>
);

export default About;
