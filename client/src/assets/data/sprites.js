/**
 * Created by Henrik Peinar on 01/04/16
 */

var data = {
  tiles: [
    "grass",
    "farmland",
    "weeds",
    "trellis",
    "tulips",
    "fence",
    "wood-fence",
    "stone-fence",
    "iron-fence",
    "hardwood-fence",
    "torch-fence",
    "torch-wood-fence",
    "torch-stone-fence",
    "torch-iron-fence",
    "torch-hardwood-fence",
    "road",
    "wood-path",
    "steppingstone-path",
    "crystal-path",
    "gravel-path",
    "wood-floor",
    "straw-floor",
    "weathered-floor",
    "stone-floor",
    "crystal-floor",
    "tree",
    "stone",
    "twig",
    "tapper",
    "hoedirt", // also known as farmland
    "blue-jazz",
    "cauliflower",
    "garlic",
    "green-bean",
    "kale",
    "parsnip",
    "potato",
    "rhubarb",
    "strawberry",
    "tulip",
    "blueberry",
    "hops",
    "hot-pepper",
    "melon",
    "poppy",
    "radish",
    "red-cabbage",
    "starfruit",
    "summer-spangle",
    "tomato",
    "wheat",
    "amaranth",
    "ancient-fruit",
    "artichoke",
    "beet",
    "bok-choy",
    "corn",
    "cranberry",
    "eggplant",
    "fairy-rose",
    "grape",
    "pumpkin",
    "sunflower",
    "yam"
  ],
  buildings: {
    well: {
      sprite: "assets/img/tiles/well.png",
      width: 3 * 16,
      height: 3 * 16
    },
    silo: {
      sprite: "assets/img/tiles/silo.png",
      width: 3 * 16,
      height: 3 * 16
    },
    barn: {
      sprite: "assets/img/tiles/barn.png",
      width: 7 * 16,
      height: 4 * 16
    },
    "big-barn": {
      sprite: "assets/img/tiles/big-barn.png",
      width: 7 * 16,
      height: 4 * 16
    },
    placeholder: {
      sprite: "assets/img/tiles/placeholder.png",
      width: 16,
      height: 16
    },
    coop: {
      sprite: "assets/img/tiles/coop.png",
      width: 6 * 16,
      height: 3 * 16
    },
    stable: {
      sprite: "assets/img/tiles/stable.png",
      width: 4 * 16,
      height: 2 * 16
    },
    sprinkler: {
      sprite: "assets/img/tiles/sprinkler.png",
      width: 16,
      height: 16,
      highlight: {
        path: [
          "M0,16",
          "L16, 16",
          "L16,0",
          "L32,0",
          "L32,16",
          "L48,16",
          "L48,32",
          "L32,32",
          "L32,48",
          "L16,48",
          "L16,32",
          "L0,32",
          "L0,16",
          "z"
        ],
        width: 48,
        height: 48
      }
    },
    "q-sprinkler": {
      sprite: "assets/img/tiles/q-sprinkler.png",
      width: 16,
      height: 16,
      highlight: {
        path: ["M0,0", "L0,48", "L48,48", "L48,0", "z"],
        width: 48,
        height: 48
      }
    },
    "irid-sprinkler": {
      sprite: "assets/img/tiles/irid-sprinkler.png",
      width: 16,
      height: 16,
      highlight: {
        path: ["M0,0", "L0,80", "L80,80", "L80,0", "z"],
        width: 80,
        height: 80
      }
    },
    scarecrow: {
      sprite: "assets/img/tiles/scarecrow.png",
      width: 16,
      height: 16,
      highlight: {
        path: [
          "M0,64",
          "L16,64",
          "L16,48",
          "L32,48",
          "L32,32",
          "L48,32",
          "L48,16",
          "L64,16",
          "L64,0",
          "L208,0",
          "L208,16",
          "L224,16",
          "L224,32",
          "L240,32",
          "L240,48",
          "L256,48",
          "L256,64",
          "L272,64",
          "L272,208",
          "L256,208",
          "L256,224",
          "L240,224",
          "L240,240",
          "L224,240",
          "L224,256",
          "L208,256",
          "L208,272",
          "L64,272",
          "L64,256",
          "L48,256",
          "L48,240",
          "L32,240",
          "L32,224",
          "L16,224",
          "L16,208",
          "L0,208",
          "z"
        ],
        width: 272,
        height: 272,
        color: "#000066"
      }
    },
    chest: {
      sprite: "assets/img/tiles/chest.png",
      width: 16,
      height: 16
    },
    "wood-sign": {
      sprite: "assets/img/tiles/wood-sign.png",
      width: 16,
      height: 16
    },
    furnace: {
      sprite: "assets/img/tiles/furnace.png",
      width: 16,
      height: 16
    },
    mayo: {
      sprite: "assets/img/tiles/mayo.png",
      width: 16,
      height: 16
    },
    "mayonnaise-machine": {
      sprite: "assets/img/tiles/mayo.png",
      width: 16,
      height: 16
    },
    "cheese-press": {
      sprite: "assets/img/tiles/cheese-press.png",
      width: 16,
      height: 16
    },
    keg: {
      sprite: "assets/img/tiles/keg.png",
      width: 16,
      height: 16
    },
    loom: {
      sprite: "assets/img/tiles/loom.png",
      width: 16,
      height: 16
    },
    preserves: {
      sprite: "assets/img/tiles/preserves.png",
      width: 16,
      height: 16
    },
    "preserves-jar": {
      sprite: "assets/img/tiles/preserves.png",
      width: 16,
      height: 16
    },
    "oil-maker": {
      sprite: "assets/img/tiles/oil-maker.png",
      width: 16,
      height: 16
    },
    charcoal: {
      sprite: "assets/img/tiles/charcoal.png",
      width: 16,
      height: 16
    },
    "charcoal-kiln": {
      sprite: "assets/img/tiles/charcoal.png",
      width: 16,
      height: 16
    },
    crystalarium: {
      sprite: "assets/img/tiles/crystal.png",
      width: 16,
      height: 16
    },
    crystal: {
      sprite: "assets/img/tiles/crystal.png",
      width: 16,
      height: 16
    },
    "egg-press": {
      sprite: "assets/img/tiles/egg-press.png",
      width: 16,
      height: 16
    },
    "slime-egg-press": {
      sprite: "assets/img/tiles/egg-press.png",
      width: 16,
      height: 16
    },
    "statue-of-endless-fortune": {
      sprite: "assets/img/tiles/statue-of-endless-fortune.png",
      width: 16,
      height: 16
    },
    "lightning-rod": {
      sprite: "assets/img/tiles/lighting-rod.png",
      width: 16,
      height: 16
    },
    "lighting-rod": {
      sprite: "assets/img/tiles/lighting-rod.png",
      width: 16,
      height: 16
    },
    "recycling-machine": {
      sprite: "assets/img/tiles/recycling-machine.png",
      width: 16,
      height: 16
    },
    "seed-maker": {
      sprite: "assets/img/tiles/seed-maker.png",
      width: 16,
      height: 16
    },
    "slime-incubator": {
      sprite: "assets/img/tiles/slime-incubator.png",
      width: 16,
      height: 16
    },
    "worm-bin": {
      sprite: "assets/img/tiles/worm-bin.png",
      width: 16,
      height: 16
    },
    "cherry-tree": {
      sprite: "assets/img/tiles/cherry-tree.png",
      width: 48,
      height: 48
    },
    "orange-tree": {
      sprite: "assets/img/tiles/orange-tree.png",
      width: 48,
      height: 48
    },
    "oak-tree": {
      sprite: "assets/img/tiles/oak-tree.png",
      width: 48,
      height: 48
    },
    "maple-tree": {
      sprite: "assets/img/tiles/maple-tree.png",
      width: 48,
      height: 48
    },
    "pine-tree": {
      sprite: "assets/img/tiles/pine-tree.png",
      width: 48,
      height: 48
    },
    apple: {
      sprite: "assets/img/tiles/apple.png",
      width: 48,
      height: 48
    },
    apricot: {
      sprite: "assets/img/tiles/apricot.png",
      width: 48,
      height: 48
    },
    peach: {
      sprite: "assets/img/tiles/peach.png",
      width: 48,
      height: 48
    },
    pomegranate: {
      sprite: "assets/img/tiles/pomegranate.png",
      width: 48,
      height: 48
    },
    "slime-hutch": {
      sprite: "assets/img/tiles/slime-hutch.png",
      width: 176,
      height: 96
    },
    gate: {
      sprite: "assets/img/tiles/gate.png",
      width: 16,
      height: 16
    },
    "bee-hive": {
      sprite: "assets/img/tiles/bee-hive.png",
      width: 16,
      height: 16,
      highlight: {
        path: [
          "M0,64",
          "L16,64",
          "L16,48",
          "L32,48",
          "L32,32",
          "L48,32",
          "L48,16",
          "L64,16",
          "L64,0",
          "L96,0",
          "L96,16",
          "L112,16",
          "L128,16",
          "L128,32",
          "L144,32",
          "L144,48",
          "L160,48",
          "L160,64",
          "L176,64",
          "L176,80",
          "L160,80",
          "L160,96",
          "L144,96",
          "L144,112",
          "L128,112",
          "L128,128",
          "L112,128",
          "L96,128",
          "L96,144",
          "L64,144",
          "L64,128",
          "L48,128",
          "L48,112",
          "L32,112",
          "L32,96",
          "L16,96",
          "L16,80",
          "L0,80",
          "z"
        ],
        width: 176,
        height: 144,
        color: "#fff444"
      }
    },
    torch: {
      sprite: "assets/img/tiles/torch.png",
      width: 16,
      height: 16
    },
    campfire: {
      sprite: "assets/img/tiles/campfire.png",
      width: 16,
      height: 16
    },
    "wooden-brazier": {
      sprite: "assets/img/tiles/wooden-brazier.png",
      width: 16,
      height: 16
    },
    "stone-brazier": {
      sprite: "assets/img/tiles/stone-brazier.png",
      width: 16,
      height: 16
    },
    "gold-brazier": {
      sprite: "assets/img/tiles/gold-brazier.png",
      width: 16,
      height: 16
    },
    "carved-brazier": {
      sprite: "assets/img/tiles/carved-brazier.png",
      width: 16,
      height: 16
    },
    "stump-brazier": {
      sprite: "assets/img/tiles/stump-brazier.png",
      width: 16,
      height: 16
    },
    "barrel-brazier": {
      sprite: "assets/img/tiles/barrel-brazier.png",
      width: 16,
      height: 16
    },
    "skull-brazier": {
      sprite: "assets/img/tiles/skull-brazier.png",
      width: 16,
      height: 16
    },
    "marble-brazier": {
      sprite: "assets/img/tiles/marble-brazier.png",
      width: 16,
      height: 16
    },
    "wood-lamp-post": {
      sprite: "assets/img/tiles/wood-lamp-post.png",
      width: 16,
      height: 16
    },
    "iron-lamp-post": {
      sprite: "assets/img/tiles/iron-lamp-post.png",
      width: 16,
      height: 16
    },
    "large-log": {
      sprite: "assets/img/tiles/large-log.png",
      width: 32,
      height: 32
    },
    "large-rock": {
      sprite: "assets/img/tiles/large-rock.png",
      width: 32,
      height: 32
    },
    "large-stump": {
      sprite: "assets/img/tiles/large-stump.png",
      width: 32,
      height: 32
    },
    house: {
      width: 144,
      height: 144,
      sprite: "assets/img/tiles/house.png"
    },
    greenhouse: {
      width: 112,
      height: 160,
      sprite: "assets/img/tiles/greenhouse-broken.png"
    },
    "greenhouse-fixed": {
      width: 112,
      height: 160,
      sprite: "assets/img/tiles/greenhouse-fixed.png"
    },
    "earth-obelisk": {
      width: 3 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/earth-obelisk.png"
    },
    "water-obelisk": {
      width: 3 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/water-obelisk.png"
    },
    "gold-clock": {
      width: 3 * 16,
      height: 2 * 16,
      sprite: "assets/img/tiles/gold-clock.png"
    },
    mill: {
      width: 4 * 16,
      height: 2 * 16,
      sprite: "assets/img/tiles/mill.png"
    },
    "junimo-hut": {
      width: 3 * 16,
      height: 2 * 16,
      sprite: "assets/img/tiles/junimo-hut.png",
      highlight: {
        path: ["M0,0", "L272,0", "L272,272", "L0,272", "z"],
        width: 272,
        height: 256,
        color: "#89CFF0"
      }
    },
    shed: {
      width: 7 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/shed.png"
    },
    "object-restriction": {
      width: 16,
      height: 16,
      sprite: "assets/img/tiles/object-restriction.png"
    },
    "building-restriction": {
      width: 16,
      height: 16,
      sprite: "assets/img/tiles/building-restriction.png"
    },
    "stone-cabin": {
      width: 5 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/stone-cabin.png"
    },
    "plank-cabin": {
      width: 5 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/plank-cabin.png"
    },
    "log-cabin": {
      width: 5 * 16,
      height: 3 * 16,
      sprite: "assets/img/tiles/log-cabin.png"
    },
    "shipping-bin": {
      width: 2 * 16,
      height: 16,
      sprite: "assets/img/tiles/shipping-bin.png"
    }
  }
};

// nodeJS would also like to use this file
if (typeof module !== "undefined") {
  module.exports = data;
}
