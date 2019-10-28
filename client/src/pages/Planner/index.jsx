import React from 'react';
import PatronsPanel from '../../components/PatronsPanel';
import CreditsPanel from '../../components/CreditsPanel';
import ChangeLogPanel from '../../components/ChangeLog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faDiscord} from "@fortawesome/free-brands-svg-icons";

// import { Container } from './styles';

const PlannerPage = () => <div>
{
                //<!-- top bar -->
            }
 <nav class="navbar sticky-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Stardew planner <small>v2</small></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/groups/stardewplanner/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://discord.gg/QBqBAzp" target="_blank"><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
    </div>
</nav>

            <form id="fileuploadform" className="d-none">
                <input type="file" id="fileinput"/>
            </form>

            {
                //<!--main editor-->
            }
            <div className="editor">
                <div className="discord-link">
                    <a href="" target="_blank"><img src="/planner/img/discord-logo.png" title="Come chat with us!" /></a>
                </div>
                {
                    //<!-- editor loader -->
                }
                <div className="editor-loader">
                    <div className="loader">
                        <img className="loader-icon" src="/planner/img/hourglass.gif"/><br/>
                        Loading farm, please wait...
                    </div>
                </div>

                {
                    //<!-- save / render loader -->
                }
                <div className="save-loader">
                    <div className="loader">
                        <img className="loader-icon" src="/planner/img/hourglass.gif"/><br/>
                        Please wait... This may take a few moments
                    </div>
                </div>

                {
                    //<!-- Upload loader -->
                }
                <div className="upload-loader">
                    <div className="loader">
                        <img className="loader-icon" src="/planner/img/hourglass.gif"/><br/>
                        Uploading your saveGame file, please wait...<br />
                        <span className="upload-progress">0</span>%
                    </div>
                </div>
                <svg width="1280" height="1040" id="editor"></svg>
                <div className="nexus-notification notification">
                    <div className="header"><a href="https://mp.stardew.info/planner" target="_blank">Multiplanner is here</a><div className="hide-nexus-notification hide-notification">HIDE</div></div>
                    <div className="content">
                        <a href="https://mp.stardew.info/planner" target="_blank">Multiplanner</a> allows you to simultaneously plan your farm with up to 4 players here, on the planner<br/>
                        Go check it out!<br/>
                        <br/>
                        <b>Planner is now also listed at <a href="https://www.nexusmods.com/stardewvalley/mods/3787/" target="_blank">NexusMods</a>, leave a comment and endorse!</b><br/>
                        Also don't forget our <a href="https://www.facebook.com/groups/stardewplanner/" target="_blank">Facebook group!</a><br/>
                        <br/>
                        If you have any problems / issues / feature requests, don't hesitate to <a href="#contact">contact me</a><br /><br/>
                    </div>
                </div>
                <div className="custom-layout-notification notification">
                    <div className="header">You are using modded farm layout!</div>
                    <div className="content">
                        <a href="" target="_blank" className="layout-url"><span className="layout-name">WonderfulLifeFarm</span></a> by <span className="layout-author">taintedwheat & JinxieWinxie</span>
                    </div>
                </div>
                <div className="render-notification notification">
                    <div className="header">You render is ready!<div className="render-notification hide-render-notification hide-notification">HIDE</div></div>
                    <div className="content">
                            To access your render click here: <a href="" target="_blank" className="render-url"><span className="render-display-url"></span></a><br/>
                            <span className="powered-by">powered by upload.farm</span>
                    </div>
                </div>
                <div className="count-report-notification notification">
                    <div className="header">Object Count</div>
                    <div className="content"></div>
                </div>
            </div>
            {
                //<!-- FAQ and credits -->
            }
            <div className="faq">
                <div className="panel info" id="controls">
                    <h3>Controls:</h3>
                    <ul>
                        <li><span className="key">E</span> to easily select eraser brush, press again to restore last brush</li>
                        <li><span className="key">S</span> to easily select selector brush, press again to restore last brush</li>
                        <li><span className="key">W</span> to toggle highlights temporarily (If you hold W and hover mouse to dropdowns it might break. Just toggle highlights in the highlight menu to fix for now)</li>
                        <li><span className="key">Esc</span> discards picked up building</li>
                        <li>To delete buildings, either drop it to non-buildable area, click on it with eraser or press either <span className="key">Del</span> or <span className="key">fn</span>+<span className="key">Backspace</span> or <span className="key">Esc</span> </li>
                        <li>Hold <span className="key">⌘</span> or <span className="key">Ctrl</span> or <span className="key">Shift</span> when placing buildings to "duplicate" it.</li>
                        <li>If you need to scroll the editor and can't see the horizontal scrollbar, use middle mouse button</li>
                        <li>You can enable brush overwriting mode in options</li>
                        <li>You can open object counter window from the options menu</li>
                        <li>You can find your save game file from <code>%AppData%/StardewValley/Saves</code></li>
                    </ul>
                </div>
                <div className="panel info text-center" id="google">
                    <h3>Stardew Valley merchandise shop!:</h3>
                    <a href="https://www.stardewvalley.net/shop/" target="_blank"><img className="img-fluid" src="https://www.stardewvalley.net/wp-content/uploads/2018/12/Item_Shop_logo.png" width="387" height="72" alt="Stardew Valley merchandise shop"/></a>
                </div>
                <ChangeLogPanel/>
                <div className="panel radius" id="donate">
                    <h3>Donate:</h3>
                    You can do so on <a href="https://www.paypal.com/paypalme/hpeinar/" target="_blank" className="paypal-blue">@PayPal</a> or <a href="https://www.patreon.com/bePatron?c=1239286" target="_blank" className="patreon-orange">@Patreon</a>
                </div>
                <div className="panel radius" id="contact">
                    <h3>Contact:</h3>
                    <b><a href="https://www.facebook.com/groups/stardewplanner/">Facebook group</a></b><br />
                    <b>Discord: <a href="https://discord.gg/RRPKc4Z">Stardew Valley discord @hpeinar</a></b><br />
                    <b>GitHub: <a href="https://github.com/hpeinar/stardewplanner" target="_blank">@GitHub</a></b><br />
                    <b>Reddit:</b> <a href="https://www.reddit.com/r/StardewValley/comments/4ckzzo/stardew_farm_planner_v2_is_out_save_importing/" target="_blank">v2 planner thread</a><br/>
                    <b>Stardew official forums:</b> <a href="http://community.playstarbound.com/threads/farm-planner-v2-out-now-save-importing-and-much-more.112098/" target="_blank">Official forums thread</a><br/>
                    <b>Steam thread:</b> <a href="http://steamcommunity.com/app/413150/discussions/0/365163537814721588/" target="_blimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
ank">Discussion thread</a><br/>
                    <b>E-mail: </b>henrik<span className="hide-email">yobots</span>peinar@<span className="hide-email">hotmail.com</span>gmai<span className="hide-email">lllll</span>l.com<br/>
                    <b>Twitter: <a href="https://twitter.com/hpeinar">@hpeinar</a> & #stardewplanner</b><br/>
                    <a href="https://twitter.com/intent/tweet?button_hashtag=stardewplanner&text=Plan%20you%20%23stardewvalley%20farm%20in" className="twitter-hashtag-button" data-related="hpeinar" data-url="https://stardew.info/planner">Tweet #stardewplanner</a>
                    {
                        //TODO ADD Twitter here 
                        //</div></div>/<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                    }
                </div>
                <div className="panel callout radius" id="faq">
                    <h3>FAQ:</h3>
                    <dl>
                        <dt>1. What is this?</dt>
                        <dd>This is <a href="http://stardewvalley.net/" target="_blank">Stardew Valley</a> interactive farm planner</dd>

                        <dt>2. Saving doesn't appear to do anything?</dt>
                        <dd>When you press save, your farm layout is saved and page will be reloaded to confirm the save. You can then use the url to link to your farm (or bookmark it)</dd>

                        <dt>3. Does this work on touch devices (tablets, phones)?</dt>
                        <dd>Current version does not officially support touch devices yet but it is planned for future.</dd>

                        <dt>4. How can I delete buildings?</dt>
                        <dd>Please see <a href="#controls">controls section</a></dd>

                        <dt>5. Not working? Having any issues?</dt>
                        <dd>Feel free to contact me in <a href="https://www.reddit.com/user/hpeinar" target="_blank">reddit</a> or <a href="http://community.playstarbound.com/members/hpeinar.609256/" target="_blank">Stardew official forums</a></dd>
                    </dl>
                </div>
                <div className="panel callout radius" id="custom-layout">
                    <h3>How to get your custom layout to the planner:</h3>
                    <ul>
                        <li>Email me the following: <br/>
                            - link to the mod <br/>
                            - name of your layout as it should appear on the planner <br/>
                            - author(s) name(s)<br/>
                        </li>
                        <li>Your mod has to be somewhat popular as it takes time for me to add the layout.</li>
                    </ul>
                </div>
                <PatronsPanel/>
                <CreditsPanel/>
            </div>i
        </div>
    </div>

    <div className="google-notification notification">
        <div className="header">Ads:<div className="hide-google-notification hide-notification">HIDE</div></div>
        <div className="content" style={{width: "350px"}}>
            {
                //<!-- after-controls -->
            }
            <ins className="adsbygoogle"
                 style={{display:"inline-block",width:"336px",height:"280px"}}
                 data-ad-client="ca-pub-7596140300521041"
                 data-ad-slot="3946693612"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            {
                //<!-- google ads -->
            }
        </div>
    </div>
</div>;

export default PlannerPage;
