/**
 * Layouts represent farm maps.
 * @type {{}}
 */
const layouts = {
  regular: {
    name: "regular",
    backgroundImage: "full_background.jpg",
    official: true,
    restrictionPath: [
      "M0,0L1280,0L1280,288L1152,288L1152,256L1136,256L1136,272L1120,272L1120,288L928,288L928,224L912,224L912,208L896,208L896,192L880,192L880,176L864,176L864,144L848,144L848,112L784,112L784,128L768,128L768,112L752,112L752,128L736,128L736,144L656,144L656,32L640,32L640,144L80,144L80,160L64,160L64,176L48,176L48,368L112,368L112,544L96,544L96,560L80,560L80,576L64,576L64,592L48,592L48,992L640,992L640,1040L0,1040L0,0z", // top-left
      "M384,160L544,160L544,288L416,288L416,272L384,272L384,160z", // greenhouse
      "M576,784L688,784L688,800L704,800L704,816L736,816L736,832L752,832L752,896L736,896L736,912L720,912L720,928L672,928L672,944L592,944L592,928L576,928L576,912L544,912L544,880L528,880L528,832L544,832L544,816L560,816L560,800L576,800L576,784z", // middle lake
      "M1216,304L1248,304L1248,288L1264,288L1264,304L1280,304L1280,1040L640,1040L640,992L1104,992L1104,944L1168,944L1168,896L1216,896L1216,528L1200,528L1200,544L1136,544L1136,528L1120,528L1120,448L1200,448L1200,464L1216,464L1216,304z" // right-bottom
    ].join(""),
    buildingRestrictionPath: [
      "M0,0L640,0L640,128L592,128L592,176L512,176L512,128L160,128L160,144L112,144L112,128L64,128L64,144L48,144L48,368L112,368L112,544L80,544L80,560L64,560L64,576L48,576L48,992L640,992L640,1040L0,1040L0,0z", // top-left
      "M400,160L512,160L512,256L480,256L480,288L432,288L432,256L400,256L400,160z", // greenhouse
      "M672,0L1280,0L1280,0L1280,240L1248,240L1248,192L1232,192L1232,176L1248,176L1248,160L1232,160L1232,176L1200,176L1200,160L1168,160L1168,272L1280,272L1280,288L1152,288L1152,256L1136,256L1136,224L1104,224L1104,160L864,160L864,144L848,144L848,112L784,112L784,128L768,128L768,112L736,112L736,128L672,128L672,0z", // top-right
      "M944,176L1088,176L1088,224L1104,224L1104,240L1088,240L1088,256L1104,256L1104,272L1040,272L1040,288L1024,288L1024,272L944,272L944,176z", // main-house
      "M1232,304L1280,304L1280,1040L672,1040L672,992L1104,992L1104,944L1168,944L1168,896L1232,896L1232,304z", // bottom-right
      "M1120,448L1200,448L1200,464L1216,464L1216,512L1216,528L1200,528L1200,544L1136,544L1136,528L1120,528L1120,448z", // right lake
      "M576,784L688,784L688,800L704,800L704,816L736,816L736,832L752,832L752,896L736,896L736,912L720,912L720,928L672,928L672,944L592,944L592,928L576,928L576,912L544,912L544,880L528,880L528,832L544,832L544,816L560,816L560,800L576,800L576,784z" // bottom lake
    ].join(""),
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  combat: {
    name: "combat",
    backgroundImage: "farm_combat.jpg",
    official: true,
    restrictionPath: [
      "M0,0L640,0L640,128L560,128L352,128L352,144L320,144L320,160L224,160L224,144L192,144L192,128L64,128L64,144L48,144L48,272L64,272L64,288L80,288L80,304L96,304L96,320L112,320L112,336L160,336L160,352L256,352L256,368L304,368L304,384L352,384L352,400L384,400L384,544L352,544L352,560L320,560L320,576L224,576L224,560L192,560L192,544L80,544L80,560L64,560L64,576L48,576L48,672L0,672z", // left side area
      "M672,0L672,128L736,128L736,112L768,112L768,128L784,128L784,112L848,112L848,144L880,144L880,160L1184,160L1184,176L1216,176L1216,160L1248,160L1248,176L1232,176L1232,192L1248,192L1248,240L1280,240L1280,0z", //right-top area
      "M944,176,L1088,176,L1088,272,L944,272,L944,176z", // house
      "M400,160,L512,160,L512,256,L400,256,L400,160z", // greenhouse
      "M672,992,L816,992,L816,912,L992,912,L992,896,L1024,896,L1024,880,L1120,880,L1120,672,L1152,672,L1152,656,L1184,656,L1184,320,L1216,320,L1216,304,L1280,304,L1280,1040,L672,1040z", // left down
      "M0,672,L144,672,L144,688,L256,688,L256,704,L320,704,L320,720,L368,720,L368,736,L400,736,L400,752,L416,752,L416,768,L432,768,L432,800,L448,800,L448,880,L464,880,L464,992,L640,992,L640,1040,L16,1040,L0,1040,L0,672z", // right-down
      "M704,384,L816,384,L816,400,L832,400,L832,416,L864,416,L864,432,L880,432,L880,464,L896,464,L896,480,L928,480,L928,560,L880,560,L880,576,L880,592,L864,592,L864,608,L848,608,L848,624,L800,624,L800,640,L720,640,L720,624,L704,624,L704,608,L672,608,L672,592,L656,592,L656,576,L640,576,L640,560,L624,560,L624,464,L656,464,L656,432,L672,432,L672,416,L688,416,L688,400,L704,400,L704,384z" // middle lake
    ].join(""),
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  fishing: {
    name: "fishing",
    backgroundImage: "farm_fishing.jpg",
    official: true,
    backgroundImageGreenhouse: null,
    restrictionPath: [
      "M0,0,L640,0,L640,32,L656,32,L656,96,L608,96,L608,128,L496,128,L496,64,L464,64,L464,80,L448,80,L448,96,L432,96,L432,112,L352,112,L352,128,L336,128,L336,176,L336,176,L320,176,L320,224,L336,224,L336,272,L272,272,L272,240,L240,240,L240,256,L160,256,L160,192,L192,192,L192,96,L176,96,L176,80,L176,128,L96,128,L96,80,L80,80,L80,176,L96,176,L96,192,L160,192,L160,288,L176,288,L176,304,L256,304,L256,288,L272,288,L272,272,L336,272,L336,352,L352,352,L352,368,L384,368,L384,448,L304,448,L304,464,L288,464,L288,480,L272,480,L272,544,L208,544,L192,544,L192,528,L144,528,L144,544,L112,544,L112,560,L80,560,L80,576,L0,576,L0,0z",
      "M672,0,L1264,0,L1264,240,L1248,240,L1248,192,L1232,192,L1232,176,L1248,176,L1248,160,L1216,160,L1216,176,L1184,176,L1184,160,L1168,160,L1104,160,L1104,144,L1088,144,L1088,128,L928,128,L928,112,L912,112,L912,96,L896,96,L896,80,L816,80,L816,112,L736,112,L736,96,L656,96,L656,32,L672,32,L672,0z",
      "M1232,304,L1280,304,L1280,1040,L1040,1040,L1040,1008,L1024,1008,L1024,960,L1008,960,L1008,928,L992,928,L992,912,L976,912,L976,896,L784,896,L784,832,L800,832,L800,816,L832,816,L832,784,L928,784,L928,736,L912,736,L912,656,L976,656,L976,704,L992,704,L992,720,L1008,720,L1008,736,L1040,736,L1040,768,L1072,768,L1072,784,L1152,784,L1152,768,L1168,768,L1168,752,L1184,752,L1184,672,L1168,672,L1168,656,L1152,656,L1152,640,L1104,640,L1104,592,L1072,592,L1072,576,L1024,576,L1024,496,L1072,496,L1072,448,L1232,448,L1232,304z",
      "M384,368,L464,368,L464,384,L512,384,L512,400,L544,400,L544,448,L640,448,L640,464,L752,464,L752,448,L768,448,L768,384,L784,384,L784,368,L816,368,L816,352,L864,352,L864,368,L896,368,L896,384,L912,384,L912,416,L928,416,L928,432,L944,432,L944,448,L1008,448,L1008,496,L1024,496,L1024,576,L1008,576,L1008,592,L992,592,L992,608,L992,608,L976,608,L976,656,L912,656,L912,640,L896,640,L896,608,L880,608,L880,592,L848,592,L848,576,L592,576,L592,592,L560,592,L560,608,L544,608,L544,624,L528,624,L528,624,L528,640,L512,640,L512,656,L416,656,L416,672,L400,672,L400,720,L416,720,L416,736,L448,736,L448,752,L464,752,L464,784,L480,784,L480,816,L560,816,L560,800,L576,800,L576,784,L688,784,L688,800,L704,800,L704,816,L736,816,L736,832,L784,832,L784,896,L736,896,L736,912,L720,912,L720,928,L672,928,L672,944,L656,944,L656,960,L640,960,L640,1040,L464,1040,L448,1040,L448,912,L432,912,L432,896,L384,896,L384,864,L368,864,L368,848,L256,848,L256,864,L176,864,L176,880,L48,880,L48,944,L80,944,L80,960,L96,960,L96,976,L112,976,L112,992,L432,992,L432,1008,L448,1008,L448,1040,L0,1040,L0,784,L32,784,L32,800,L80,800,L80,784,L224,784,L224,768,L288,768,L288,752,L304,752,L304,672,L288,672,L288,656,L272,656,L272,640,L240,640,L240,624,L224,624,L224,608,L208,608,L208,544,L272,544,L272,560,L288,560,L288,576,L304,576,L304,592,L464,592,L464,576,L480,576,L480,560,L496,560,L496,480,L480,480,L480,464,L464,464,L464,448,L384,448,L384,368z",
      "M0,576,L48,576,L48,608,L64,608,L64,624,L96,624,L96,640,L112,640,L112,752,L80,752,L80,768,L48,768,L48,784,L0,784,L0,576z",
      "M400,160L512,160L512,256L400,256z", // greenhouse
      "M944,176L1088,176L1088,256L1104,256L1104,272L944,272z" // house
    ].join(""),
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  foraging: {
    name: "foraging",
    backgroundImage: "farm_foraging.jpg",
    official: true,
    restrictionPath: [
      "M0,0,L640,0,L640,128,L480,128,L480,64,L384,64,L384,80,L352,80,L352,96,L320,96,L320,192,L304,192,L304,128,L256,128,L256,144,L240,144,L240,128,L64,128,L64,176,L144,176,L144,272,L224,272,L224,288,L240,288,L240,320,L208,320,L208,336,L112,336,L112,352,L80,352,L80,368,L64,368,L64,480,L80,480,L80,592,L96,592,L96,624,L208,624,L208,608,L224,608,L224,592,L240,592,L240,576,L256,576,L256,560,L352,560,L352,576,L368,576,L368,688,L352,688,L352,720,L304,720,L304,736,L272,736,L272,752,L208,752,L208,736,L48,736,L48,848,L64,848,L64,880,L80,880,L80,912,L96,912,L96,944,L256,944,L256,960,L336,960,L336,976,L416,976,L416,960,L480,960,L480,976,L544,976,L544,992,L576,992,L576,976,L624,976,L624,992,L640,992,L640,1040,L0,1040,L0,0z",
      "M672,0,L1280,0,L1280,240,L1248,240,L1248,192,L1232,192,L1232,176,L1248,176,L1248,160,L1216,160,L1216,176,L1184,176,L1184,160,L880,160,L880,128,L864,128,L864,112,L800,112,L736,112,L736,128,L672,128,L672,0z",
      "M1232,304,L1280,304,L1280,1040,L672,1040,L672,992,L688,992,L688,976,L1024,976,L1024,960,L1040,960,L1040,944,L1056,944,L1056,928,L1120,928,L1120,912,L1136,912,L1136,896,L1152,896,L1152,880,L1168,880,L1168,864,L1232,864,L1232,672,L1200,672,L1200,640,L1168,640,L1168,624,L1152,624,L1152,592,L1168,592,L1168,576,L1200,576,L1200,560,L1216,560,L1216,544,L1232,544,L1232,304z",
      "M768,832,L816,832,L816,848,L832,848,L832,896,L816,896,L816,912,L800,912,L800,928,L688,928,L688,912,L672,912,L672,880,L672,864,L688,864,L688,848,L768,848,L768,832z",
      "M672,496,L784,496,L784,512,L800,512,L800,528,L832,528,L832,544,L848,544,L848,560,L880,560,L880,656,L864,656,L864,688,L848,688,L848,704,L800,704,L800,720,L688,720,L688,704,L640,704,L640,688,L624,688,L624,672,L608,672,L608,608,L624,608,L624,544,L640,544,L640,528,L656,528,L656,512,L672,512,L672,496z",
      "M1008,672,L1120,672,L1120,688,L1136,688,L1136,704,L1152,704,L1152,768,L1136,768,L1136,784,L1120,784,L1120,800,L1088,800,L1088,816,L1072,816,L1072,832,L992,832,L992,816,L976,816,L976,800,L960,800,L960,752,L976,752,L976,704,L992,704,L992,688,L1008,688,L1008,672z",
      "M1120,448,L1200,448,L1200,464,L1216,464,L1216,528,L1200,528,L1200,544,L1136,544,L1136,528,L1120,528,L1120,464,L1120,448z",
      "M400,160L512,160L512,256L400,256z", // greenhouse
      "M944,176L1088,176L1088,256L1104,256L1104,272L944,272z" // house
    ].join(""),
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  mining: {
    name: "mining",
    backgroundImage: "farm_mining.jpg",
    official: true,
    restrictionPath: [
      "M640,0,L640,128,L416,128,L416,112,L336,112,L336,16,L320,16,L320,144,L304,144,L304,192,L320,192,L320,272,L352,272,L352,352,L432,352,L432,368,L480,368,L480,320,L496,320,L496,336,L528,336,L528,320,L560,320,L560,352,L640,352,L640,336,L768,336,L768,352,L944,352,L944,368,L992,368,L992,336,L976,336,L976,320,L1008,320,L1008,336,L1008,432,L928,432,L928,416,L752,416,L752,400,L656,400,L656,416,L576,416,L576,432,L528,432,L528,416,L496,416,L496,432,L416,432,L416,416,L336,416,L336,336,L304,336,L304,256,L288,256,L288,352,L224,352,L224,272,L192,272,L192,288,L160,288,L160,176,L176,176,L176,208,L208,208,L208,16,L208,0,L624,0z",
      "M672,0,L1280,0,L1280,256,L1248,256,L1248,160,L1216,160,L1216,144,L1184,144,L1184,128,L1088,128,L1088,144,L1040,144,L1040,160,L896,160,L896,144,L880,144,L880,128,L864,128,L864,112,L736,112,L736,192,L672,192,L672,0z",
      "M1280,304,L1232,304,L1232,352,L1072,352,L1072,320,L1040,320,L1040,432,L1088,432,L1088,416,L1232,416,L1232,560,L1184,560,L1184,576,L1040,576,L1040,624,L1232,624,L1232,768,L1152,768,L1152,752,L1120,752,L1120,736,L1056,736,L1056,688,L1040,688,L1040,800,L1104,800,L1104,816,L1136,816,L1136,832,L1232,832,L1232,896,L1168,896,L1168,944,L1120,944,L1120,928,L1104,928,L1104,912,L1088,912,L1088,896,L1056,896,L1056,880,L992,880,L992,864,L944,864,L944,848,L880,848,L880,928,L944,928,L944,944,L1008,944,L1008,960,L1040,960,L1040,976,L1056,976,L1056,1040,L1280,1040,L1280,304z",
      "M672,992,L1056,992,L1056,1040,L672,1040,L672,992z",
      "M672,992,L1056,992,L1056,1040,L672,1040,L672,992z",
      "M0,0,L192,0,L192,128,L80,128,L80,144,L48,144,L48,368,L64,368,L64,240,L112,240,L112,176,L128,176,L128,192,L160,192,L160,272,L128,272,L128,304,L80,304,L80,368,L112,368,L112,496,L128,496,L128,512,L144,512,L144,528,L160,528,L160,544,L336,544,L336,528,L304,528,L304,512,L288,512,L288,496,L256,496,L256,448,L240,448,L240,400,L224,400,L224,352,L288,352,L288,368,L304,368,L304,416,L320,416,L320,432,L336,432,L336,448,L352,448,L352,464,L384,464,L384,480,L592,480,L592,496,L656,496,L656,512,L704,512,L704,528,L720,528,L720,544,L736,544,L736,560,L752,560,L752,592,L768,592,L768,784,L784,784,L784,816,L800,816,L800,832,L816,832,L816,848,L880,848,L880,928,L816,928,L816,912,L768,912,L768,896,L752,896,L752,864,L736,864,L736,848,L720,848,L720,832,L704,832,L704,656,L688,656,L688,608,L672,608,L672,592,L656,592,L656,576,L624,576,L624,560,L576,560,L576,544,L464,544,L464,592,L512,592,L512,704,L480,704,L480,720,L464,720,L464,800,L432,800,L432,816,L288,816,L288,704,L304,704,L304,752,L416,752,L416,736,L448,736,L448,656,L464,656,L464,640,L496,640,L496,608,L464,608,L464,592,L80,592,L80,560,L64,560,L64,576,L64,576,L48,576,L48,752,L224,752,L224,704,L240,704,L240,720,L288,720,L288,800,L240,800,L240,816,L48,816,L48,992,L640,992,L640,1040,L0,1040,L0,0z",
      "M896,576,L1040,576,L1040,624,L912,624,L912,720,L976,720,L976,704,L960,704,L960,688,L992,688,L992,704,L1040,704,L1040,784,L992,784,L992,800,L928,800,L928,784,L896,784,L896,576z",
      "M80,864,L160,864,L160,880,L176,880,L176,944,L160,944,L160,960,L96,960,L96,944,L80,944,L80,880,L80,864z",
      "M400,160L512,160L512,256L400,256z", // greenhouse
      "M944,176L1088,176L1088,256L1104,256L1104,272L944,272z" // house
    ].join(""),
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "wonderful-farm-life": {
    author: "taintedwheat & JinxieWinxie",
    url:
      "http://community.playstarbound.com/threads/wonderful-farm-life-smapi-version-updated-7-2-now-with-grandpas-memorial-make-your-farm-sick.115384/",
    name: "wonderful-farm-life",
    prettyName: "WonderfulFarmLife",
    backgroundImage: "wonderful-farm-life.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "hill-top-forest": {
    author: "Minnue",
    url: "http://www.nexusmods.com/stardewvalley/mods/601",
    name: "hill-top-forest",
    prettyName: "Hill-Top Forest",
    backgroundImage: "hill-top-forest.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "alis-farm-map-edit": {
    author: "Mushfae",
    url: "http://www.nexusmods.com/stardewvalley/mods/426/",
    name: "alis-farm-map-edit",
    prettyName: "Ali's Farm map edit",
    backgroundImage: "alis_farm_map_edit.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "alis-flower-farm": {
    author: "Mushfae",
    url: "http://www.nexusmods.com/stardewvalley/mods/1266/",
    name: "alis-flower-farm",
    prettyName: "Ali's Flower Farm",
    backgroundImage: "alis_flower_farm_map.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "alis-foraging-map": {
    author: "Mushfae",
    url: "http://www.nexusmods.com/stardewvalley/mods/1122/",
    name: "alis-foraging-map",
    prettyName: "Ali's Foraging Map",
    backgroundImage: "alis_foraging_map.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "alis-mountain-map": {
    author: "Mushfae",
    url: "http://www.nexusmods.com/stardewvalley/mods/1095/",
    name: "alis-mountain-map",
    prettyName: "Ali's Mountain Farm",
    backgroundImage: "alis_mountain_map.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "secret-forest": {
    author: "Mushfae",
    url:
      "http://community.playstarbound.com/threads/alis-secret-forest-farm-map-and-buildings.117561/",
    name: "secret-forest",
    prettyName: "Secret Forest",
    backgroundImage: "alis_secret_forest.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "fancy-farm": {
    author: "Williambeepbeep",
    url: "http://www.nexusmods.com/stardewvalley/mods/270/?",
    name: "fancy-farm",
    prettyName: "Fancy farm",
    backgroundImage: "fancy-farm.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "sv-expansion": {
    author: "tegobash",
    url: "http://www.nexusmods.com/stardewvalley/mods/284/?",
    name: "sv-expansion",
    prettyName: "Stardew Valley Expansion",
    backgroundImage: "stardew_valley_expansion.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1424
  },
  "white-farm": {
    author: "Meevers",
    url: "https://www.nexusmods.com/stardewvalley/mods/1293",
    name: "white-farm",
    prettyName: "White Water Farm Map",
    backgroundImage: "white-farm.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "immersive-farm-2": {
    author: "Zander",
    url: "https://www.nexusmods.com/stardewvalley/mods/1531/",
    name: "immersive-farm-2",
    prettyName: "Immersive Farm 2",
    backgroundImage: "immersive_farm_2.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: null,
    width: 2880,
    height: 1792
  },
  "community-farm": {
    author: "SgtPickles",
    url: "https://www.nexusmods.com/stardewvalley/mods/2493",
    name: "community-farm",
    prettyName: "Community Farm",
    backgroundImage: "community_farm.jpg",
    restrictionPath: null,
    house: {
      x: 108,
      y: 20
    },
    greenhouse: {
      x: 60,
      y: 109
    },
    width: 2496,
    height: 2496
  },
  "farm-extended": {
    author: "Forkmaster",
    url: "https://www.nexusmods.com/stardewvalley/mods/3496",
    name: "farm-extended",
    prettyName: "Farm Extended",
    backgroundImage: "farm_extended.png",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1712,
    height: 1375
  },
  "memory-farm-standard": {
    author: "Attitude Rains",
    url: "https://www.nexusmods.com/stardewvalley/mods/1703",
    name: "memory-farm-standard",
    prettyName: "Memory Farm - Standard",
    backgroundImage: "memory_farm_standard.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "memory-farm-fishing": {
    author: "Attitude Rains",
    url: "https://www.nexusmods.com/stardewvalley/mods/1703",
    name: "memory-farm-standard",
    prettyName: "Memory Farm - Fishing",
    backgroundImage: "memory_farm_fishing.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "memory-farm-foraging": {
    author: "Attitude Rains",
    url: "https://www.nexusmods.com/stardewvalley/mods/1703",
    name: "memory-farm-standard",
    prettyName: "Memory Farm - Foraging",
    backgroundImage: "memory_farm_foraging.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "memory-farm-mining": {
    author: "Attitude Rains",
    url: "https://www.nexusmods.com/stardewvalley/mods/1703",
    name: "memory-farm-mining",
    prettyName: "Memory Farm - Mining",
    backgroundImage: "memory_farm_mining.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  "capitalist-dream": {
    author: "DaisyNiko",
    url: "https://www.nexusmods.com/stardewvalley/mods/3679",
    name: "capitalist-dream",
    prettyName: "Capitalist Dream",
    backgroundImage: "capitalist-dream.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1856,
    height: 1920
  },
  "immersive-farm-2-remastered": {
    author: "FlashShifter",
    url: "https://www.nexusmods.com/stardewvalley/mods/3753",
    name: "immersive-farm-2-remastered",
    prettyName: "Immersive Farm 2 remastered",
    backgroundImage: "immersive_farm_2_remastered.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 41,
      y: 41
    },
    width: 2608,
    height: 2495
  },
  "bigger-better-hilltop": {
    author: "XCube591",
    url: "https://www.nexusmods.com/stardewvalley/mods/3624",
    name: "bigger-better-hilltop",
    prettyName: "A Bigger Better Hilltop",
    backgroundImage: "better_hilltop.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1680,
    height: 1040
  },
  "neat-farm": {
    author: "Opalie",
    url: "https://www.nexusmods.com/stardewvalley/mods/3325",
    name: "neat-farm",
    prettyName: "Opalie's Neat Farm",
    backgroundImage: "opalies_neat_farm.jpg",
    restrictionPath: null,
    house: {
      x: 59,
      y: 8
    },
    greenhouse: {
      x: 25,
      y: 6
    },
    width: 1280,
    height: 1040
  },
  // inside layouts
  greenhouse: {
    name: "greenhouse",
    prettyName: "Greenhouse",
    official: true,
    backgroundImage: "greenhouse.jpg",
    restrictionPath: [
      "M0,0L1280,0L1280,1040L0,1040",
      "M64,160L256,160L256,320L64,320L64,160z"
    ],
    width: 320,
    height: 384
  }
};
export default layouts;
