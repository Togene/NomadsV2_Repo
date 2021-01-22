export const meta = {
    "SPRITE_SHEET_SIZE" : {"x":8, "y":8},
    "default" : {
        "mapping" : [{"x":1, "y":0}],
        "colors" : ["0xFF00FF"],
        "frames" : [],
        "map_key" : "debug"
    },
    "crab" : {
        "mapping" : [{"x":0, "y":0}],
        "colors" : ["0xF8665E"],
        "frames" : [],
        "map_key" : "critters"
    },
    "lithy" : {
        "mapping" : [{"x":0, "y":0}],
        "frames" :  {"x":0, "y":0},
        "colors" : ["0xffffff"],
        "map_key" : "lithies"
    },
    "tree_01" : {
        "leaves" : {
            "mapping" : [{"x":3, "y":0}],
            "frames" :  {"x":1, "y":1},
            "colors" : ["0x008B00"],
            "transform" : {
                "position" : {"x":0, "y":0, "z":0},
                "orient" : {"x":0, "y":0, "z":0, "w":1},
                "scale" : {"x":2, "y":2, "z":2}
            },
            "map_key" : "trees",
            "skip_occlusion" : true
            
        },
        "root" : {
            "mapping" : [{"x":0, "y":0}],
            "frames" :  {"x":1, "y":1},
            "colors" : ["0x78664c"],
            "transform" : {
                "position" : {"x":0, "y":0, "z":0},
                "orient" : {"x":0, "y":0, "z":0, "w":1},
                "scale" : {"x":1, "y":1, "z":1}
            },
            "map_key" : "trees",
            "skip_occlusion" : true
            
        },
        "trunk" : {
            "mapping" : [{"x":1, "y":0}],
            "frames" :  {"x":1, "y":2},
            "colors" : ["0x78664c"],
            "transform" : {
                "position" : {"x":0, "y":0, "z":0},
                "orient" : {"x":0, "y":0, "z":0, "w":1},
                "scale" : {"x":1, "y":1, "z":1}
            },
            "map_key" : "trees",
            "skip_occlusion" : true
         
        },
        "branch" : {
            "mapping" : [{"x":2, "y":0}],
            "frames" :  {"x":1, "y":3},
            "colors" : ["0x78664c"],
            "transform" : {
                "position" : {"x":0, "y":0, "z":0},
                "orient" : {"x":0, "y":0, "z":0, "w":1},
                "scale" : {"x":1, "y":1, "z":1}
            },
            "map_key" : "trees",
            "skip_occlusion" : true
           
        }
    },
    "circle" : {
        "mapping" : [{"x":0, "y":0}],
        "frames" :  {"x":0, "y":0},
        "colors" : ["0xFFFFFF"],
        "transform" : {
            "position" : {"x":0, "y":0, "z":0},
            "orient" : {"x":0, "y":0, "z":0, "w":1},
            "scale" : {"x":2, "y":2, "z":2}
        },
        "map_key" : "multi_test",
        "tile_size" : {"x":2, "y":2}
    },
    "sun" : {
        "mapping" : [{"x":0, "y":1}],
        "frames" :  {"x":1, "y":1},
        "colors" : ["0xFFD27D"],
        "map_key" : "sky",
        "tile_size" : {"x":1, "y":1},
        "skip_occlusion" : true
    },
    "moon" : {
        "mapping" : [{"x":0, "y":2}],
        "frames" :  {"x":1, "y":1},
        "colors" : ["0xFFFFFF"],
        "map_key" : "sky",
        "tile_size" : {"x":1, "y":1},
        "skip_occlusion" : true
    },
    "star" : {
        "mapping" : [{"x":0, "y":0}],
        "frames" :  {"x":1, "y":1},
        "colors" : ["0xFFFFFF", "0xFFEDB4", "0xFFB8EA", "0xB9CEFB", "0xDFAEFF"],
        "map_key" : "sky",
        "tile_size" : {"x":1, "y":1},
        "skip_occlusion" : true
    },
    "gazebo" : {
        "gazebo_side" : {
            "mapping" : [{"x":0, "y":4}],
            "frames" :  {"x":0, "y":0},
            "colors" : ["0x815B40"],
            "map_key" : "structures",
            "tile_size" : {"x":1, "y":1}
        },
        "gazebo_side_intersect" : {
            "mapping" : [{"x":1, "y":4}],
            "frames" :  {"x":0, "y":0},
            "colors" : ["0x815B40"],
            "map_key" : "structures",
            "tile_size" : {"x":1, "y":1}
        },
        "gazebo_front" : {
            "mapping" : [{"x":2, "y":4}],
            "frames" :  {"x":0, "y":0},
            "colors" : ["0x815B40"],
            "map_key" : "structures",
            "tile_size" : {"x":1, "y":1}
        },
        "gazebo_top" : {
            "mapping" : [{"x":3, "y":4}],
            "frames" :  {"x":0, "y":0},
            "colors" : ["0x815B40"],
            "map_key" : "structures",
            "tile_size" : {"x":1, "y":1}
        }
    },
}

/*
                "transform" : {
                "position" : {"x":0, "y":0, "z":0},
                "orient" : {"x":0, "y":0, "z":0, "w":1},
                "scale" : {"x":1, "y":1, "z":1}
            },
*/