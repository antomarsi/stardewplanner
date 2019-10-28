import React from "react";

const changeLoglist = [];

const ChangeLogPanel = () => (
  <div className="panel info changelog" id="changelog">
    <h3>Changelog:</h3>
    <b>9th May 2019</b>
    <ul>
      <li>Added wood sign under equipment</li>
    </ul>
    <b>6th May 2019</b>
    <ul>
      <li>
        Added 3 new maps. Including Remastered Immersive Farm 2. Big thanks to{" "}
        <a
          href="https://www.nexusmods.com/users/38947035?tab=user+files"
          target="_blank"
        >
          Zola from #modding @
        </a>{" "}
        Stardew Discord for getting me the correct background image
      </li>
    </ul>
    <b>20th March 2019</b>
    <ul>
      <li>
        Added Farm Extended map layout by Forkmaster. Big thanks to{" "}
        <a
          href="https://www.nexusmods.com/users/38947035?tab=user+files"
          target="_blank"
        >
          Zola from #modding @
        </a>{" "}
        Stardew Discord for getting me the correct background image
      </li>
      <li>Added placeable shipping bin. Thanks @Odin!</li>
      <li>
        In talks with a modder from the Stardew Discord to get a mod for
        extracting exact restriction areas for any maps (including custom ones).
        Once this is ready, planner will have 1:1 exact placement information
      </li>
    </ul>
    <b>6th Nov 2018</b>
    <ul>
      <li>
        Changed bee-hive highlighting to match the game (It's awkward now, I
        know), more info{" "}
        <a href="https://stardewvalleywiki.com/Bee_House" target="_blank">
          from the wiki
        </a>
        . Thanks <b>@Dawnmist</b>
      </li>
    </ul>
    <b>29th July 2018</b>
    <ul>
      <li>Added community farm by SgtPickles</li>
    </ul>
    <b>23th May 2018</b>
    <ul>
      <li>Added cabins. Find from the buildings menu</li>
      <li>
        Multiplanner! See{" "}
        <a href="https://mp.stardew.info">https://mp.stardew.info</a>
      </li>
    </ul>
    <b>7th March 2018</b>
    <ul>
      <li>
        We're having a test period with SDV Discord to see if there is enough
        interest for the planner channel.{" "}
        <a href="https://discord.gg/QBqBAzp" target="_blank">
          Come join us.
        </a>
      </li>
    </ul>
    <b>16th Feb 2018</b>
    <ul>
      <li>Added White Water Farm</li>
      <li>Removed the need of sending me the saveGame file for custom map</li>
    </ul>
    <b>18th Oct 2017</b>
    <ul>
      <li>
        We now have a{" "}
        <a href="https://stardew.info" target="_blank">
          front page!
        </a>
        . Big thanks to{" "}
        <a
          href="https://dribbble.com/kedin"
          onclick="ga('send', 'event', 'Karel Eding link', 'Clicked on kedin Dribble link');"
          target="_blank"
        >
          Karel Eding
        </a>{" "}
        for creating the design and{" "}
        <a
          href="https://upload.farm/"
          target="_blank"
          onclick="ga('send', 'event', 'Upload farm link', 'Clicked on upload.farm link');"
        >
          Upload.Farm
        </a>{" "}
        guys for letting to use their renders.
      </li>
      <li>
        There is now a list of <a href="#patrons">Patrons</a>. You can get to
        the list by pledging{" "}
        <a
          href="https://www.patreon.com/bePatron?c=1239286"
          target="_blank"
          className="patreon-orange"
        >
          @Patreon
        </a>
      </li>
      <li>
        Made visible changelog shorter. You can still view all of it by clicking
        the "Show more" link at the bottom of this box.
      </li>
    </ul>
    <b>9th Oct 2017</b>
    <ul>
      <li>
        Finally did the RethinkDB to MySQL migration. If you wish to read more
        about the technical side of this, you can do so here on{" "}
        <a
          href="https://medium.com/@hpeinar/migrating-500k-documents-22gb-of-data-from-rethinkdb-to-mysql-for-stardew-planner-bdef4c1d4639"
          target="_blank"
        >
          Medium
        </a>
      </li>
    </ul>
    <b>27th Sept 2017</b>
    <ul>
      <li>Added links to Patreon page. Chip in!</li>
    </ul>
    <b>6th Sept 2017</b>
    <ul>
      <li>
        Fixed saving map to picture. Thanks Stefanie Carter for reporting this.
      </li>
    </ul>
    <b>25th Aug 2017</b>
    <ul>
      <li>Added 4 new map layouts from Ali</li>
    </ul>
    <b>22th June 2017</b>
    <ul>
      <li>
        Added Stardew Valley merchandise shop banner.{" "}
        <a href="http://blog.chucklefish.org/shop/#Stardew" target="_blank">
          Be sure to get your Junimos!
        </a>
      </li>
    </ul>
    <b>7th Mai 2017</b>
    <ul>
      <li>Added Stardew Valley expansion map under custom layouts</li>
      <li>
        Changed how layout changing works. If you have any problems with it,
        please let me know
      </li>
      <li>Added Discord contact</li>
    </ul>
    <b>10th Apri 2017</b>
    <ul>
      <li>Menu items are now more compact on smaller screens</li>
      <li>
        Added facebook button so people would find our FB group more easily
      </li>
    </ul>

    <div className="show-more-changelog">Show more changelog...</div>
    <div className="more-changelog">
      <b>25th Mar 2017</b>
      <ul>
        <li>Added pine, oak and maple trees</li>
      </ul>
      <b>13th Feb 2017</b>
      <ul>
        <li>
          Merged pull request by{" "}
          <a href="https://github.com/ClairelyClaire" target="_blank">
            ClairelyClaire
          </a>{" "}
          to add all the different crops.
        </li>
      </ul>
      <b>7th Jan 2017</b>
      <ul>
        <li>Placing torch on fence block will now turn it into torch-fence.</li>
        <li>Added wooden and iron lamp posts under Terrain menu</li>
      </ul>
      <b>26th Dec</b>
      <ul>
        <li>Greenhouse interior is now plannable! (Select it from layouts)</li>
        <li>Greenhouse toggle is back!</li>
      </ul>
      <b>3th Nov</b>
      <ul>
        <li>Testing Ads as donations do not currently cover server upkeeps.</li>
      </ul>
      <b>24th Oct</b>
      <ul>
        <li>Fixed house sprite size</li>
      </ul>
      <b>23th Oct</b>
      <ul>
        <li>Added 3 new custom layouts</li>
      </ul>
      <b>20th Oct</b>
      <ul>
        <li>
          Officially integrated stardew.info and upload.farm.{" "}
          <a
            href="https://www.reddit.com/r/StardewValley/comments/58g25j/uploadfarm_and_stardewinfo_unite/"
            target="_blank"
          >
            Read more here.
          </a>
        </li>
        <li>Fixed sever error with save importing</li>
      </ul>
      <b>18th Oct</b>
      <ul>
        <li>
          Fixed mining layout importing (
          <a
            href="http://community.playstarbound.com/members/gummywyrms.713195/"
            target="_blank"
          >
            gummywyrms
          </a>
          )
        </li>
      </ul>
      <b>17th Oct</b>
      <ul>
        <li>Added progress indicator for uploading your saveGame file</li>
      </ul>
      <b>16th Oct</b>
      <ul>
        <li>Fixed mill size</li>
      </ul>
      <b>1st Oct</b>
      <ul>
        <li>Did the restriction paths for the new layouts</li>
        <li>
          Added new buildings (obelisks, mill, shed, junimo hut, gold clock)
        </li>
        <li>Added some debris to the menu (log, stone, stumps etc)</li>
      </ul>
      <b>30th Sept</b>
      <ul>
        <li>
          Added new farm layout and made it possible to support custom maps too
        </li>
        <li>Fixed some issues with nginx and static file serving</li>
      </ul>
      <b>27th Sept</b>
      <ul>
        <li>
          Moved to{" "}
          <a href="https://rethinkdb.com/" target="_blank">
            RethinkDB
          </a>{" "}
          from fs
        </li>
        <li>
          Moved the server to US (NYC-3). Sorry EU users, but as most of the
          users are from US, it made more sense to have the server there
        </li>
        <li>Switched UUIDv4 out with more human readable id system</li>
      </ul>
      <b>21th July</b>
      <ul>
        <li>Added 'W' and 'S' shortcuts</li>
        <li>
          Removed the cause of the{" "}
          <a
            href="https://www.reddit.com/r/StardewValley/comments/4sri6s/stardewinfoplanner_outage/"
            target="_blank"
          >
            last outage
          </a>
        </li>
      </ul>
      <b>11th July</b>
      <ul>
        <li>
          Image exporting by{" "}
          <a href="https://github.com/rgson" target="_blank">
            rgson
          </a>
        </li>
      </ul>
      <b>17th June</b>
      <ul>
        <li>Moved save game importing to backend</li>
        <li>
          Added /api/import endpoint which can be use to integrate planner with
          your own site! More on:{" "}
          <a href="https://github.com/hpeinar/stardewplanner" target="_blank">
            @GitHub
          </a>
        </li>
      </ul>
      <b>8th June</b>
      <ul>
        <li>Merged some PR's from GitHub</li>
      </ul>
      <b>16th May</b>
      <ul>
        <li>Fixed import when building doesn't exist (mods?)</li>
      </ul>
      <b>22th April (community update)</b>
      <ul>
        <li>
          Import icon changed for more convenient one{" "}
          <a href="https://github.com/TheLostSoul" target="_blank">
            TheLostSoul
          </a>
        </li>
        <li>
          Import now imports large rocks, stumps and logs. Also weeds are fixed
          now.{" "}
          <a href="https://github.com/TheLostSoul" target="_blank">
            TheLostSoul
          </a>
        </li>
        <li>
          Added object counter window{" "}
          <a href="https://github.com/echoenzo" target="_blank">
            echoenzo
          </a>
        </li>
      </ul>
      <b>1th April</b>
      <ul>
        <li>
          Published source on{" "}
          <a href="https://github.com/hpeinar/stardewplanner" target="_blank">
            @GitHub
          </a>
        </li>
      </ul>
      <b>30th March</b>
      <ul>
        <li>Highlight states and options now save!</li>
        <li>Fixed minor restriction areas (thanks Mai & R3ality)</li>
        <li>Added twitter share button</li>
        <li>Moved eraser out from the "tools" menu</li>
        <li>
          Added freemode possibility for the brush. Enable it in the options
          (this option does not save over reloads)
        </li>
        <li>Added tree & gravel path to the menu</li>
        <li>Added torch & campfire back to the menu</li>
      </ul>
      <b>29th March</b>
      <ul>
        <li>Added fancy notification about new version</li>
        <li>
          Highlights should be better now, also they are off by default now
        </li>
        <li>Added contact section</li>
      </ul>
      <b>28th March</b>
      <ul>
        <li>Made importing better (thanks Mai)</li>
        <li>Fixed menu word wrap problem</li>
        <li>Restriction area behind house is now 1 tile</li>
      </ul>
      <b>22th March</b>
      <ul>
        <li>Released new version to closed beta. New stuff:</li>
        <li>
          Using <a href="http://snapsvg.io/">SnapSVG</a> instead of{" "}
          <a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a>
        </li>
        <li>Better brush. It is now possible to brush big areas easier</li>
        <li>Better restriction handling.</li>
        <li>Showing coordinates for those who like to edit their saves</li>
        <li>Save game import!</li>
        <li>
          A lot more optimized way of drawing the SVG (using patterns and use
          elements)
        </li>
      </ul>
    </div>
  </div>
);

export default ChangeLogPanel;
