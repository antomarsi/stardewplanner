import React from 'react';

// import { Container } from './styles';

const PlannerPage = () => <div>
        <div className="off-canvas-wrap move-right" data-offcanvas>
        <div className="inner-wrap">

            {
                //<!-- top bar -->
            }
            <div className="fixed">
                <nav className="top-bar" data-topbar role="navigation">
                    <ul className="title-area">
                        <li className="name">
                            <h1><a href="#">Stardew planner <small>v2</small></a></h1>
                        </li>

                        {
                            // <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
                        }
                        <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
                    </ul>

                    <section className="top-bar-section">
                        <ul className="left">
                            <li className="divider"></li>
                            <li className="has-dropdown">
                                <a href="#" className="show-for-xlarge-up" title="Buildings">Buildings</a>
                                <a href="#" className="hide-for-xlarge-up" title="Buildings">B</a>
                                <ul className="dropdown">
                                    <li className="tools building" data-id="silo"><div className="link"><i className="sprite-icon silo"></i>Silo</div></li>
                                    <li className="tools building" data-id="well"><div className="link"><i className="sprite-icon well"></i>Well</div></li>
                                    <li className="tools building" data-id="coop" title="All coops (regular, big, deluxe) are the same size"><div className="link"><i className="sprite-icon coop"></i>Coop</div></li>
                                    <li className="tools building" data-id="barn" title="All barns (regular, big, deluxe) are the same size"><div className="link"><i className="sprite-icon barn"></i>Barn</div></li>
                                    <li className="tools building" data-id="stable"><div className="link"><i className="sprite-icon stable"></i>Stable</div></li>
                                    <li className="tools building" data-id="slime-hutch"><div className="link"><i className="sprite-icon slime-hutch"></i>Slime-hutch</div></li>
                                    <li className="tools building" data-id="water-obelisk"><div className="link"><i className="sprite-icon water-obelisk"></i>Water obelisk</div></li>
                                    <li className="tools building" data-id="earth-obelisk"><div className="link"><i className="sprite-icon earth-obelisk"></i>Earth obelisk</div></li>
                                    <li className="tools building" data-id="gold-clock"><div className="link"><i className="sprite-icon gold-clock"></i>Gold clock</div></li>
                                    <li className="tools building" data-id="mill"><div className="link"><i className="sprite-icon mill"></i>Mill</div></li>
                                    <li className="tools building" data-id="junimo-hut"><div className="link"><i className="sprite-icon junimo-hut"></i>Junimo hut</div></li>
                                    <li className="tools building" data-id="shed"><div className="link"><i className="sprite-icon shed"></i>Shed</div></li>
                                    <li className="tools building" data-id="stone-cabin"><div className="link"><i className="sprite-icon stone-cabin"></i>Stone cabin</div></li>
                                    <li className="tools building" data-id="plank-cabin"><div className="link"><i className="sprite-icon plank-cabin"></i>Plank cabin</div></li>
                                    <li className="tools building" data-id="log-cabin"><div className="link"><i className="sprite-icon log-cabin"></i>Log cabin</div></li>
                                    <li className="tools building" data-id="shipping-bin"><div className="link"><i className="sprite-icon shipping-bin"></i>Shipping bin</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>

                            <li className="has-dropdown">
                                <a href="#" className="show-for-xlarge-up" title="Equipment">Equipment</a>
                                <a href="#" className="hide-for-xlarge-up" title="Equipment">E</a>
                                <ul className="dropdown">
                                    <li className="tools building" data-id="sprinkler"><div className="link"><i className="sprite-icon sprinkler"></i>Sprinkler</div></li>
                                    <li className="tools building" data-id="q-sprinkler"><div className="link"><i className="sprite-icon q-sprinkler"></i>Q. sprinker</div></li>
                                    <li className="tools building" data-id="irid-sprinkler"><div className="link"><i className="sprite-icon irid-sprinkler"></i>Irid. sprinker</div></li>
                                    <li className="tools building" data-id="scarecrow"><div className="link"><i className="sprite-icon scarecrow"></i>Scarecrow</div></li>
                                    <li className="tools building" data-id="chest"><div className="link"><i className="sprite-icon chest"></i>Chest</div></li>
                                    <li className="tools building" data-id="wood-sign"><div className="link"><i className="sprite-icon wood-sign"></i>Wood Sign</div></li>
                                    <li className="tools building" data-id="furnace"><div className="link"><i className="sprite-icon furnace"></i>Furnace</div></li>
                                    <li className="tools building" data-id="charcoal"><div className="link"><i className="sprite-icon charcoal-klin"></i>Charcoal Kiln</div></li>
                                    <li className="tools building" data-id="seed-maker"><div className="link"><i className="sprite-icon seed-maker"></i>Seed Maker</div></li>
                                    <li className="tools building" data-id="crystal"><div className="link"><i className="sprite-icon crystal"></i>Crystalarium</div></li>
                                    <li className="tools building" data-id="egg-press"><div className="link"><i className="sprite-icon slime-egg"></i>Slime Egg-Press</div></li>
                                    <li className="tools building" data-id="lighting-rod"><div className="link"><i className="sprite-icon lighting-rod"></i>Lightning Rod</div></li>
                                    <li className="tools building" data-id="recycling-machine"><div className="link"><i className="sprite-icon recycling-machine"></i>Recycling Machine</div></li>
                                    <li className="tools building" data-id="slime-incubator"><div className="link"><i className="sprite-icon slime-incubator"></i>Slime Incubator</div></li>
                                    <li className="tools building" data-id="worm-bin"><div className="link"><i className="sprite-icon worm-bin"></i>Worm bin</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>

                            <li className="has-dropdown">
                                <a href="#" className="show-for-xlarge-up" title="Artisan">Artisan</a>
                                <a href="#" className="hide-for-xlarge-up" title="Artisan">A</a>
                                <ul className="dropdown">
                                    <li className="tools building" data-id="apricot"><div className="link"><i className="sprite-icon apricot-tree"></i>Apricot tree</div></li>
                                    <li className="tools building" data-id="cherry-tree"><div className="link"><i className="sprite-icon cherry-tree"></i>Cherry tree</div></li>
                                    <li className="tools building" data-id="orange-tree"><div className="link"><i className="sprite-icon orange-tree"></i>Orange tree</div></li>
                                    <li className="tools building" data-id="peach"><div className="link"><i className="sprite-icon peach-tree"></i>Peach tree</div></li>
                                    <li className="tools building" data-id="apple"><div className="link"><i className="sprite-icon apple-tree"></i>Apple tree</div></li>
                                    <li className="tools building" data-id="oak-tree"><div className="link"><i className="sprite-icon oak-tree"></i>Oak tree</div></li>
                                    <li className="tools building" data-id="pine-tree"><div className="link"><i className="sprite-icon pine-tree"></i>Pine tree</div></li>
                                    <li className="tools building" data-id="maple-tree"><div className="link"><i className="sprite-icon maple-tree"></i>Maple tree</div></li>
                                    <li className="tools building" data-id="pomegranate"><div className="link"><i className="sprite-icon pomegranate"></i>Pomegranate</div></li>
                                    <li className="tools building" data-id="bee-hive"><div className="link"><i className="sprite-icon bee-hive"></i>Bee-hive</div></li>
                                    <li className="tools building" data-id="mayo"><div className="link"><i className="sprite-icon mayo-machine"></i>Mayo machine</div></li>
                                    <li className="tools building" data-id="cheese-press"><div className="link"><i className="sprite-icon cheese-press"></i>Cheese press</div></li>
                                    <li className="tools building" data-id="keg"><div className="link"><i className="sprite-icon keg"></i>Keg</div></li>
                                    <li className="tools building" data-id="loom"><div className="link"><i className="sprite-icon loom"></i>Loom</div></li>
                                    <li className="tools building" data-id="oil-maker"><div className="link"><i className="sprite-icon oil-maker"></i>Oil maker</div></li>
                                    <li className="tools building" data-id="preserves"><div className="link"><i className="sprite-icon preserves-jar"></i>Preserves jar</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>

                            <li className="has-dropdown">
                                <a href="#" className="show-for-xlarge-up" title="Terrain">Terrain</a>
                                <a href="#" className="hide-for-xlarge-up" title="Terrain">T</a>
                                <ul className="dropdown">
                                    <li className="tools brush" data-type="grass"><div className="link"><i className="sprite-icon grass"></i>Grass</div></li>
                                    <li className="tools brush" data-type="farmland"><div className="link"><i className="sprite-icon crops"></i>Crops</div></li>
									<li className="tools brush parent" data-type="spring"><div className="link"><i className="sprite-icon"></i>Spring crops</div></li>
									<ul className="submenu">
										<li className="tools brush" data-type="blue-jazz"><div className="link"><i className="sprite-icon blue-jazz"></i>Blue Jazz</div></li>
										<li className="tools brush" data-type="cauliflower"><div className="link"><i className="sprite-icon cauliflower"></i>Cauliflower</div></li>
										<li className="tools brush" data-type="garlic"><div className="link"><i className="sprite-icon garlic"></i>Garlic</div></li>
										<li className="tools brush" data-type="green-bean"><div className="link"><i className="sprite-icon green-bean"></i>Green Bean</div></li>
										<li className="tools brush" data-type="kale"><div className="link"><i className="sprite-icon kale"></i>Kale</div></li>
										<li className="tools brush" data-type="parsnip"><div className="link"><i className="sprite-icon parsnip"></i>Parsnip</div></li>
										<li className="tools brush" data-type="potato"><div className="link"><i className="sprite-icon potato"></i>Potato</div></li>
										<li className="tools brush" data-type="rhubarb"><div className="link"><i className="sprite-icon rhubarb"></i>Rhubarb</div></li>
										<li className="tools brush" data-type="strawberry"><div className="link"><i className="sprite-icon strawberry"></i>Strawberry</div></li>
										<li className="tools brush" data-type="tulip"><div className="link"><i className="sprite-icon tulip"></i>Tulip</div></li>
									</ul>
									<li className="tools brush parent" data-type="summer"><div className="link"><i className="sprite-icon"></i>Summer crops</div></li>
									<ul className="submenu">
										<li className="tools brush" data-type="blueberry"><div className="link"><i className="sprite-icon blueberry"></i>Blueberry</div></li>
										<li className="tools brush" data-type="corn"><div className="link"><i className="sprite-icon corn"></i>Corn</div></li>
										<li className="tools brush" data-type="hops"><div className="link"><i className="sprite-icon hops"></i>Hops</div></li>
										<li className="tools brush" data-type="hot-pepper"><div className="link"><i className="sprite-icon hot-pepper"></i>Hot Pepper</div></li>
										<li className="tools brush" data-type="melon"><div className="link"><i className="sprite-icon melon"></i>Melon</div></li>
										<li className="tools brush" data-type="poppy"><div className="link"><i className="sprite-icon poppy"></i>Poppy</div></li>
										<li className="tools brush" data-type="radish"><div className="link"><i className="sprite-icon radish"></i>Radish</div></li>
										<li className="tools brush" data-type="red-cabbage"><div className="link"><i className="sprite-icon red-cabbage"></i>Red Cabbage</div></li>
										<li className="tools brush" data-type="starfruit"><div className="link"><i className="sprite-icon starfruit"></i>Starfruit</div></li>
										<li className="tools brush" data-type="summer-spangle"><div className="link"><i className="sprite-icon summer-spangle"></i>Summer Spangle</div></li>
										<li className="tools brush" data-type="tomato"><div className="link"><i className="sprite-icon tomato"></i>Tomato</div></li>
										<li className="tools brush" data-type="wheat"><div className="link"><i className="sprite-icon wheat"></i>Wheat</div></li>
									</ul>
									<li className="tools brush parent" data-type="fall"><div className="link"><i className="sprite-icon"></i>Fall crops</div></li>
									<ul className="submenu">
										<li className="tools brush" data-type="amaranth"><div className="link"><i className="sprite-icon amaranth"></i>Amaranth</div></li>
										<li className="tools brush" data-type="ancient-fruit"><div className="link"><i className="sprite-icon ancient-fruit"></i>Ancient Fruit</div></li>
										<li className="tools brush" data-type="artichoke"><div className="link"><i className="sprite-icon artichoke"></i>Artichoke</div></li>
										<li className="tools brush" data-type="beet"><div className="link"><i className="sprite-icon beet"></i>Beet</div></li>
										<li className="tools brush" data-type="bok-choy"><div className="link"><i className="sprite-icon bok-choy"></i>Bok Choy</div></li>
										<li className="tools brush" data-type="corn"><div className="link"><i className="sprite-icon corn"></i>Corn</div></li>
										<li className="tools brush" data-type="cranberry"><div className="link"><i className="sprite-icon cranberry"></i>Cranberry</div></li>
										<li className="tools brush" data-type="eggplant"><div className="link"><i className="sprite-icon eggplant"></i>Eggplant</div></li>
										<li className="tools brush" data-type="fairy-rose"><div className="link"><i className="sprite-icon fairy-rose"></i>Fairy Rose</div></li>
										<li className="tools brush" data-type="grape"><div className="link"><i className="sprite-icon grape"></i>Grape</div></li>
										<li className="tools brush" data-type="pumpkin"><div className="link"><i className="sprite-icon pumpkin"></i>Pumpkin</div></li>
										<li className="tools brush" data-type="sunflower"><div className="link"><i className="sprite-icon sunflower"></i>Sunflower</div></li>
										<li className="tools brush" data-type="yam"><div className="link"><i className="sprite-icon yam"></i>Yam</div></li>
									</ul>
                                    <li className="tools brush" data-type="trellis"><div className="link"><i className="sprite-icon trellis"></i>Trellis</div></li>
                                    <li className="tools brush" data-type="tulips"><div className="link"><i className="sprite-icon flowers"></i>Flowers</div></li>
                                    <li className="tools brush" data-type="fence"><div className="link"><i className="sprite-icon fence"></i>Fence</div></li>
                                    <li className="tools brush" data-type="tree"><div className="link"><i className="sprite-icon tree"></i>Tree</div></li>
                                    <li className="tools brush" data-type="stone-fence"><div className="link"><i className="sprite-icon stone-fence"></i>Stone fence</div></li>
                                    <li className="tools brush" data-type="iron-fence"><div className="link"><i className="sprite-icon iron-fence"></i>Iron fence</div></li>
                                    <li className="tools brush" data-type="hardwood-fence"><div className="link"><i className="sprite-icon hardwood-fence"></i>Hardwood fence</div></li>
                                    <li className="tools building" data-id="gate"><div className="link"><i className="sprite-icon gate"></i>Gate</div></li>
                                    <li className="tools building" data-id="torch"><div className="link"><i className="sprite-icon torch"></i>Torch</div></li>
                                    <li className="tools building" data-id="wood-lamp-post"><div className="link"><i className="sprite-icon wood-lamp-post"></i>Wood lamp-post</div></li>
                                    <li className="tools building" data-id="iron-lamp-post"><div className="link"><i className="sprite-icon iron-lamp-post"></i>Iron lamp-post</div></li>
                                    <li className="tools building" data-id="campfire"><div className="link"><i className="sprite-icon campfire"></i>Campfire</div></li>

                                    {
                                        //<!-- Debris -->
                                    }
                                    <li className="tools building" data-id="large-rock"><div className="link"><i className="sprite-icon large-rock"></i>Large rock</div></li>
                                    <li className="tools building" data-id="large-log"><div className="link"><i className="sprite-icon large-log"></i>Large log</div></li>
                                    <li className="tools building" data-id="large-stump"><div className="link"><i className="sprite-icon large-stump"></i>Large stump</div></li>
                                    <li className="tools brush" data-type="stone"><div className="link"><i className="sprite-icon stone"></i>Stone</div></li>
                                    <li className="tools brush" data-type="twig"><div className="link"><i className="sprite-icon twig"></i>Twig</div></li>

                                    {
                                        //<!-- Restriction painting -->
                                        }
                                    <li className="tools brush" data-type="object-restriction"><div className="link"><i className="sprite-icon object-restriction"></i>Object restriction</div></li>
                                    <li className="tools brush" data-type="building-restriction"><div className="link"><i className="sprite-icon building-restriction"></i>Building restriction</div></li>

                                </ul>
                            </li>
                            <li className="divider"></li>

                            <li className="has-dropdown">
                                <a href="#" className="show-for-xlarge-up" title="Roads & floors">Roads & floors</a>
                                <a href="#" className="hide-for-xlarge-up" title="Roads & floors">R&F</a>
                                <ul className="dropdown">
                                    <li className="tools brush" data-type="road"><div className="link"><i className="sprite-icon cobblestone"></i>Cobblestone</div></li>
                                    <li className="tools brush" data-type="gravel-path"><div className="link"><i className="sprite-icon gravel-path"></i>Gravel path</div></li>
                                    <li className="tools brush" data-type="wood-path"><div className="link"><i className="sprite-icon wood-path"></i>Wooden path</div></li>
                                    <li className="tools brush" data-type="steppingstone-path"><div className="link"><i className="sprite-icon stone-path"></i>Steppingstone path</div></li>
                                    <li className="tools brush" data-type="crystal-path"><div className="link"><i className="sprite-icon crystal-path"></i>Crystal path</div></li>
                                    <li className="tools brush" data-type="wood-floor"><div className="link"><i className="sprite-icon wood-floor"></i>Wooden floor</div></li>
                                    <li className="tools brush" data-type="straw-floor"><div className="link"><i className="sprite-icon straw-floor"></i>Straw floor</div></li>
                                    <li className="tools brush" data-type="weathered-floor"><div className="link"><i className="sprite-icon weather-floor"></i>Weathered floor</div></li>
                                    <li className="tools brush" data-type="stone-floor"><div className="link"><i className="sprite-icon stone-floor"></i>Stone floor</div></li>
                                    <li className="tools brush" data-type="crystal-floor"><div className="link"><i className="sprite-icon crystal-floor"></i>Crystal floor</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li className="tools brush eraser" data-type="eraser"><div className="link" title="Eraser tool"><i className="fa fa-eraser"></i></div></li>
                            <li className="divider"></li>
                            <li className="tools brush select" data-type="select"><div className="link" title="Select tool"><i className="fa fa-mouse-pointer"></i></div></li>
                            <li className="divider"></li>
                            <li className="has-dropdown">
                                <a href="#" className="donate">Donate!</a>
                                <ul className="dropdown">
                                    <li style="width: 200px; padding: 13px;margin: 0 auto;">
                                        <a href="https://www.paypal.me/hpeinar/" target="_blank"><img src="https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png" /></a>
                                    </li>
                                    <li style="width: 200px; padding: 13px;margin: 0 auto;">
                                        <a href="https://www.patreon.com/bePatron?c=1239286" target="_blank"><img src="https://c5.patreon.com/external/logo/downloads_wordmark_white_on_coral.png" /></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {
                             //<!-- Right Nav Section -->
                        }
                        <ul className="right">
                            {
                                //<!--<li className="divider"></li>-->
                                //<!--<li className="discord-icon"><a href="https://discord.gg/QBqBAzp" target="_blank" ><img className="discord-icon-inner" src="/planner/img/discord-icon.png" /></a></li>-->
                            }
                            <li className="divider"></li>
                            <li className="facebook-icon"><a href="https://www.facebook.com/groups/stardewplanner/" target="_blank" ><i className="fa fa-facebook-official fa-2x"></i></a></li>
                            <li className="divider"></li>
                            <li className="has-dropdown">
                                <a href="#">Layouts</a>
                                <ul className="dropdown">
                                    <li className="tools"><div className="link"><b><u>Official layouts:</u></b></div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="regular">Regular layout</div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="combat">Combat layout</div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="fishing">Fishing layout</div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="foraging">Foraging layout</div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="mining">Mining layout</div></li>
                                    <li className="tools"><div className="link"><b><u>Interiors:</u></b></div></li>
                                    <li className="tools"><div className="link switch-layout" data-layout="greenhouse">Greenhouse</div></li>
                                    <li className="tools parent"><div className="link"><b><u>Un-official layouts:</u></b></div></li>
                                    <ul className="submenu">
                                        <li className="tools"><div className="link switch-layout" data-layout="immersive-farm-2-remastered" title="by FlashShifter"><b>Immersive Farm 2 remastered</b></div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="bigger-better-hilltop" title="by XCube591">A Bigger Better Hilltop</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="neat-farm" title="by Opalie">Opalie's Neat Farm</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="farm-extended" title="by Forkmaster"><b>Farm Extended</b></div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="community-farm" title="by SgtPickles"><b>Community Farm</b></div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="wonderful-farm-life" title="by taintedwheat & JinxieWinxie">WonderfulFarmLife</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="hill-top-forest" title="by Minnue">Hill-top forest</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="fancy-farm" title="by Williambeepbeep">Fancy farm</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="sv-expansion" title="by tegobash">Stardew Valley Expansion</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="white-farm" title="by Meevers">White Water Farm Map</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="immersive-farm-2" title="by Zander">Immersive Farm 2</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="memory-farm-standard" title="by Attitude Rains">Memory Farm - Standard</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="memory-farm-fishing" title="by Attitude Rains">Memory Farm - Fishing</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="memory-farm-foraging" title="by Attitude Rains">Memory Farm - Foraging</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="memory-farm-mining" title="by Attitude Rains">Memory Farm - Mining</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="capitalist-dream" title="by DaisyNiko">Capitalist Dream</div></li>
                                        <li className="tools"><div className="link"><b><u>Ali's maps:</u></b></div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="alis-farm-map-edit" title="by Mushfae"><img src="/planner/img/alis_avatar.jpg" width="20px" height="20px"/> Ali's Farm map edit</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="alis-flower-farm" title="by Mushfae"><img src="/planner/img/alis_avatar.jpg" width="20px" height="20px" /> Ali's Flower Farm</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="alis-foraging-map" title="by Mushfae"><img src="/planner/img/alis_avatar.jpg" width="20px" height="20px" /> Ali's Foraging Map</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="alis-mountain-map" title="by Mushfae"><img src="/planner/img/alis_avatar.jpg" width="20px" height="20px"/> Ali's Mountain Farm</div></li>
                                        <li className="tools"><div className="link switch-layout" data-layout="secret-forest" title="by Mushfae"><img src="/planner/img/alis_avatar.jpg" width="20px" height="20px"/> Ali's Secret Forest Farm</div></li>
                                        <li className="tools"><a href="#custom-layout"><div className="link"><u>Missing a layout?</u></div></a></li>
                                    </ul>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li className="has-dropdown">
                                <a href="#">Options</a>
                                <ul className="dropdown">
                                    <li className="tools"><div className="toggle-highlight toggleable highlight-sprinkler link" data-highlight="sprinkler"><i className="fa fa-remove"></i> Toggle Sprinklers highlights</div></li>
                                    <li className="tools"><div className="toggle-highlight toggleable highlight-scarecrow link" data-highlight="scarecrow"><i className="fa fa-remove"></i> Toggle Scarecrows highlights</div></li>
                                    <li className="tools"><div className="toggle-highlight toggleable highlight-bee link" data-highlight="hive"><i className="fa fa-remove"></i> Toggle Bee-hives highlights</div></li>
                                    <li className="tools"><div className="toggle-highlight toggleable highlight-junimo-hut link" data-highlight="hut"><i className="fa fa-remove"></i> Toggle Junimo-hut highlights</div></li>
                                    <li className="tools"><div className="link toggleable greenhouse-switch"><i className="fa fa-remove"></i> Toggle greenhouse</div></li>
                                    <li className="tools"><div className="link toggleable brush-overwrite"><i className="fa fa-remove"></i> Toggle brush overwriting</div></li>
                                    <li className="tools"><div className="link toggleable freemode"><i className="fa fa-remove"></i> Toggle brush freemode</div></li>
                                    <li className="tools"><div className="link toggleable coordinates"><i className="fa fa-remove"></i> Toggle coordinates</div></li>
                                    <li className="tools"><div className="link toggleable active hide-stuff"><i className="fa fa-check"></i> Toggle grid + helpers</div></li>
                                    <li className="tools"><div className="link toggleable active restriction-check"><i className="fa fa-check"></i> Toggle restriction check</div></li>
                                    <li className="tools" id="count"><div className="link toggleable count-switch"><i className="fa fa-remove"></i> Object Count</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li id="save"><a className="save-icon" href="#"><i className="fa fa-save fa-2x side-nav-icon" title="Save current plan"></i></a></li>
                            <li className="divider"></li>
                            <li id="import"><a className="import-icon" href="#"><i className="fa fa-upload fa-2x side-nav-icon" title="Import from savefile"></i></a></li>
                            <li className="divider"></li>
                            <li className="has-dropdown">
                                <a className="export-image-icon" href="#"><i className="fa fa-image fa-2x side-nav-icon" title="Export to image file"></i></a>
                                <ul className="dropdown">
                                    <li className="tools"><div className="link render-farm" data-season="spring">Render in spring</div></li>
                                    <li className="tools"><div className="link render-farm" data-season="winter">Render in winter</div></li>
                                    <li className="tools"><div className="link render-farm" data-season="summer">Render in summer</div></li>
                                    <li className="tools"><div className="link render-farm" data-season="fall">Render in fall</div></li>
                                    <li><a id="uploadFarm" href="https://upload.farm/" target="_blank" className="powered-by">powered by upload.farm</a></li>
                                    <li className="divider"></li>
                                    <li className="tools"><div id="export-image" className="link ">Save plan as picture</div></li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li id="reset"><a className="reset-icon" href="#"><i className="fa fa-trash fa-2x side-nav-icon" title="Reset all"></i></a></li>
                        </ul>
                    </section>
                </nav>
            </div>

            <form id="fileuploadform" style="display: none;">
                <input type="file" id="fileinput"/>
            </form>

            {
                //<!--main editor-->
            }
            <div className="editor">
                <div className="discord-link">
                    <a href="https://discord.gg/QBqBAzp" target="_blank"><img src="/planner/img/discord-logo.png" title="Come chat with us!" /></a>
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
                <div className="panel info" id="google" style="text-align: center;">
                    <h3>Stardew Valley merchandise shop!:</h3>
                    <a href="https://www.stardewvalley.net/shop/" target="_blank"><img style="margin: auto" src="https://www.stardewvalley.net/wp-content/uploads/2018/12/Item_Shop_logo.png" width="387" height="72" alt="Stardew Valley merchandise shop"/>></a>
                </div>
                <div className="panel info changelog" id="changelog">
                    <h3>Changelog:</h3>
                    <b>9th May 2019</b>
                    <ul>
                        <li>Added wood sign under equipment</li>
                    </ul>
                    <b>6th May 2019</b>
                    <ul>
                        <li>Added 3 new maps. Including Remastered Immersive Farm 2. Big thanks to <a href="https://www.nexusmods.com/users/38947035?tab=user+files" target="_blank">Zola from #modding @</a> Stardew Discord for getting me the correct background image</li>
                    </ul>
                    <b>20th March 2019</b>
                    <ul>
                        <li>Added Farm Extended map layout by Forkmaster. Big thanks to <a href="https://www.nexusmods.com/users/38947035?tab=user+files" target="_blank">Zola from #modding @</a> Stardew Discord for getting me the correct background image</li>
                        <li>Added placeable shipping bin. Thanks @Odin!</li>
                        <li>In talks with a modder from the Stardew Discord to get a mod for extracting exact restriction areas for any maps (including custom ones). Once this is ready, planner will have 1:1 exact placement information</li>
                    </ul>
                    <b>6th Nov 2018</b>
                    <ul>
                        <li>Changed bee-hive highlighting to match the game (It's awkward now, I know), more info <a href="https://stardewvalleywiki.com/Bee_House" target="_blank">from the wiki</a>. Thanks <b>@Dawnmist</b></li>
                    </ul>
                    <b>29th July 2018</b>
                    <ul>
                        <li>Added community farm by SgtPickles</li>
                    </ul>
                    <b>23th May 2018</b>
                    <ul>
                        <li>Added cabins. Find from the buildings menu</li>
                        <li>Multiplanner! See <a href="https://mp.stardew.info">https://mp.stardew.info</a></li>
                    </ul>
                    <b>7th March 2018</b>
                    <ul>
                        <li>We're having a test period with SDV Discord to see if there is enough interest for the planner channel. <a href="https://discord.gg/QBqBAzp" target="_blank">Come join us.</a></li>
                    </ul>
                    <b>16th Feb 2018</b>
                    <ul>
                        <li>Added White Water Farm</li>
                        <li>Removed the need of sending me the saveGame file for custom map</li>
                    </ul>
                    <b>18th Oct 2017</b>
                    <ul>
                        <li>We now have a <a href="https://stardew.info" target="_blank">front page!</a>. Big thanks to <a href="https://dribbble.com/kedin" onclick="ga('send', 'event', 'Karel Eding link', 'Clicked on kedin Dribble link');" target="_blank">Karel Eding</a> for creating the design and <a href="https://upload.farm/" target="_blank" onclick="ga('send', 'event', 'Upload farm link', 'Clicked on upload.farm link');">Upload.Farm</a> guys for letting to use their renders.</li>
                        <li>There is now a list of <a href="#patrons">Patrons</a>. You can get to the list by pledging <a href="https://www.patreon.com/bePatron?c=1239286" target="_blank" className="patreon-orange">@Patreon</a></li>
                        <li>Made visible changelog shorter. You can still view all of it by clicking the "Show more" link at the bottom of this box.</li>
                    </ul>
                    <b>9th Oct 2017</b>
                    <ul>
                        <li>Finally did the RethinkDB to MySQL migration. If you wish to read more about the technical side of this, you can do so here on <a href="https://medium.com/@hpeinar/migrating-500k-documents-22gb-of-data-from-rethinkdb-to-mysql-for-stardew-planner-bdef4c1d4639" target="_blank">Medium</a></li>
                    </ul>
                    <b>27th Sept 2017</b>
                    <ul>
                        <li>Added links to Patreon page. Chip in!</li>
                    </ul>
                    <b>6th Sept 2017</b>
                    <ul>
                        <li>Fixed saving map to picture. Thanks Stefanie Carter for reporting this.</li>
                    </ul>
                    <b>25th Aug 2017</b>
                    <ul>
                        <li>Added 4 new map layouts from Ali</li>
                    </ul>
                    <b>22th June 2017</b>
                    <ul>
                        <li>Added Stardew Valley merchandise shop banner. <a href="http://blog.chucklefish.org/shop/#Stardew" target="_blank">Be sure to get your Junimos!</a></li>
                    </ul>
                    <b>7th Mai 2017</b>
                    <ul>
                        <li>Added Stardew Valley expansion map under custom layouts</li>
                        <li>Changed how layout changing works. If you have any problems with it, please let me know</li>
                        <li>Added Discord contact</li>
                    </ul>
                    <b>10th Apri 2017</b>
                    <ul>
                        <li>Menu items are now more compact on smaller screens</li>
                        <li>Added facebook button so people would find our FB group more easily</li>
                    </ul>

                    <div className="show-more-changelog">Show more changelog...</div>
                    <div className="more-changelog">
                        <b>25th Mar 2017</b>
                        <ul>
                            <li>Added pine, oak and maple trees</li>
                        </ul>
                        <b>13th Feb 2017</b>
                        <ul>
                            <li>Merged pull request by <a href="https://github.com/ClairelyClaire" target="_blank">ClairelyClaire</a> to add all the different crops.</li>
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
                            <li>Officially integrated stardew.info and upload.farm. <a href="https://www.reddit.com/r/StardewValley/comments/58g25j/uploadfarm_and_stardewinfo_unite/" target="_blank">Read more here.</a></li>
                            <li>Fixed sever error with save importing</li>
                        </ul>
                        <b>18th Oct</b>
                        <ul>
                            <li>Fixed mining layout importing (<a href="http://community.playstarbound.com/members/gummywyrms.713195/" target="_blank">gummywyrms</a>)</li>
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
                            <li>Added new buildings (obelisks, mill, shed, junimo hut, gold clock)</li>
                            <li>Added some debris to the menu (log, stone, stumps etc)</li>
                        </ul>
                        <b>30th Sept</b>
                        <ul>
                            <li>Added new farm layout and made it possible to support custom maps too</li>
                            <li>Fixed some issues with nginx and static file serving</li>
                        </ul>
                        <b>27th Sept</b>
                        <ul>
                            <li>Moved to <a href="https://rethinkdb.com/" target="_blank">RethinkDB</a> from fs</li>
                            <li>Moved the server to US (NYC-3). Sorry EU users, but as most of the users are from US, it made more sense to have the server there</li>
                            <li>Switched UUIDv4 out with more human readable id system</li>
                        </ul>
                        <b>21th July</b>
                        <ul>
                            <li>Added 'W' and 'S' shortcuts</li>
                            <li>Removed the cause of the <a href="https://www.reddit.com/r/StardewValley/comments/4sri6s/stardewinfoplanner_outage/" target="_blank">last outage</a></li>
                        </ul>
                        <b>11th July</b>
                        <ul>
                            <li>Image exporting by <a href="https://github.com/rgson" target="_blank">rgson</a></li>
                        </ul>
                        <b>17th June</b>
                        <ul>
                            <li>Moved save game importing to backend</li>
                            <li>Added /api/import endpoint which can be use to integrate planner with your own site! More on: <a href="https://github.com/hpeinar/stardewplanner" target="_blank">@GitHub</a></li>
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
                            <li>Import icon changed for more convenient one <a href="https://github.com/TheLostSoul" target="_blank">TheLostSoul</a></li>
                            <li>Import now imports large rocks, stumps and logs. Also weeds are fixed now. <a href="https://github.com/TheLostSoul" target="_blank">TheLostSoul</a></li>
                            <li>Added object counter window <a href="https://github.com/echoenzo" target="_blank">echoenzo</a></li>
                        </ul>
                        <b>1th April</b>
                        <ul>
                            <li>Published source on <a href="https://github.com/hpeinar/stardewplanner" target="_blank">@GitHub</a></li>
                        </ul>
                        <b>30th March</b>
                        <ul>
                            <li>Highlight states and options now save!</li>
                            <li>Fixed minor restriction areas (thanks Mai & R3ality)</li>
                            <li>Added twitter share button</li>
                            <li>Moved eraser out from the "tools" menu</li>
                            <li>Added freemode possibility for the brush. Enable it in the options (this option does not save over reloads)</li>
                            <li>Added tree & gravel path to the menu</li>
                            <li>Added torch & campfire back to the menu</li>
                        </ul>
                        <b>29th March</b>
                        <ul>
                            <li>Added fancy notification about new version</li>
                            <li>Highlights should be better now, also they are off by default now</li>
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
                            <li>Using <a href="http://snapsvg.io/">SnapSVG</a> instead of <a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a></li>
                            <li>Better brush. It is now possible to brush big areas easier</li>
                            <li>Better restriction handling.</li>
                            <li>Showing coordinates for those who like to edit their saves</li>
                            <li>Save game import!</li>
                            <li>A lot more optimized way of drawing the SVG (using patterns and use elements)</li>
                        </ul>
                    </div>
                </div>
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
                    <b>Steam thread:</b> <a href="http://steamcommunity.com/app/413150/discussions/0/365163537814721588/" target="_blank">Discussion thread</a><br/>
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
                <div className="panel callout radius" id="patrons">
                    <h2>Golden patrons:</h2>
                    <h1 data-content="Brittany Crites" style="font-size: 24px;">Brittany Crites</h1>

                    <h3>Patrons:</h3>
                    <h1 data-content="Julie Xue">Julie Xue</h1>
                    <h1 data-content="Marie Jeffries">Marie Jeffries</h1>
                    <h1 data-content="Glen Martlin">Glen Martlin</h1>
                    <h1 data-content="Brad Greer">Brad Greer</h1>
                    <h1 data-content="Chakwaina">Chakwaina</h1>
                    <h1 data-content="Steven Carpenter">Steven Carpenter</h1>
                    <h1 data-content="Peter Collins">Peter Collins</h1>
                    <h1 data-content="Torin Sockey">Torin Sockey</h1>
                    <h1 data-content="Joce">Joce</h1>
                    <h1 data-content="Kaiwren">Kaiwren</h1>
                    <br/>
                    A very big thanks to everybody who helps to keep this tool running!
                </div>
                <div className="panel callout radius" id="credits">
                    <h3>Credits:</h3>
                    <a href="https://www.reddit.com/user/hpeinar" target="_blank"><div className="label success credits">Farm planner by <b>Henrik Peinar (/u/hpeinar)</b></div></a><br/>
                    <a href="https://www.reddit.com/user/zaxcz" target="_blank"><div className="label info">Background image exported from game by <b>/u/zaxcz</b></div></a><br/>
                    <a href="https://www.reddit.com/user/Jurk0wski" target="_blank"><div className="label info">Building sizes and door locations by <b>/u/Jurk0wski</b></div></a><br/>
                    <a href="https://www.reddit.com/user/ThisIsMyName777" target="_blank"><div className="label info">Base save importing code by <b>/u/ThisIsMyName777</b></div></a><br/>
                    <a href="https://github.com/ClairelyClaire" target="_blank"><div className="label info">All crops from all seasons by <b>ClairelyClaire</b></div></a><br/>
                    <div className="label info">Tons of suggestions, fixes, testing and ideas by <b>R3ality</b></div><br/>
                    <div className="label success credits"><a href="https://upload.farm/" target="_blank" className="credits">upload.farm by</a> <b><a href="https://www.reddit.com/user/sketchy502" className="credits" target="_blank">sketchy502</a> & <a href="https://www.reddit.com/user/Lokili" className="credits" target="_blank">Lokili</a></b></div><br/>
                    <div className="label info">Providing test save file with most of the items and ID's <b>Mai</b> from <a href="irc://irc.freenode.net/stardewvalley" target="_blank">#stardewvalley</a></div><br/>
                    <div className="label info">Being a cool guy and pointing me in the right direction with some coding stuff <b>TeMPOraL</b> from <a href="irc://irc.freenode.net/stardewvalley" target="_blank">#stardewvalley</a></div><br/>
                    <div className="label info">Helping to test and improve v2 version of the tool <b>speeder</b> from <a href="irc://irc.freenode.net/stardew-modding" target="_blank">#stardewvalley</a></div><br/>
                    <div className="label info">Sharing their epic farm saves <a href="https://www.reddit.com/user/ky13" target="_blank">/u/ky13</a> & <a href="https://www.reddit.com/user/Halfbloood" target="_blank">/u/Halfbloood</a></div><br/>
                    <div className="label info">hweetipie, paraskeet Kylindra from <a href=" https://discordapp.com/invite/stardewvalley" target="_blank">Stardew Valley discord</a> for much help!</div><br/>
                    <div className="label info">My name's [Raven] and I like to party, pointing out typos makes me feel smarty!</div><br/>
                    <div className="label info"><a href="http://community.playstarbound.com/members/uselessdragonfly.636240/" target="_blank">uselessdragonfly</a> for providing test save files for 1.1</div><br />
                    <div className="label success credits"><a href="http://stardewvalley.net/" target="_blank" className="credits">Stardew Valley by </a><b><a href="https://www.reddit.com/user/ConcernedApe" className="credits" target="_blank">ConcernedApe</a></b></div>
                    <br/>
                    <a href="https://www.jetbrains.com" target="_blank"><div className="label primary credits">This project is built using tools offered by <b>JetBrains</b></div></a><br/>
                </div>
            </div>i
        </div>
    </div>

    <div className="google-notification notification">
        <div className="header">Ads:<div className="hide-google-notification hide-notification">HIDE</div></div>
        <div className="content" style="width: 350px;">
            {
                //<!-- google ads -->
            }
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            {
                //<!-- after-controls -->
            }
            <ins className="adsbygoogle"
                 style="display:inline-block;width:336px;height:280px"
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