import { get_meta } from '/core/data/antlion.js'
import * as physics from '/core/physics/physics.js'
import * as keyboard from '/core/input/keyboard.js'
import { quaternion } from '/core/math/quaternion.js'
import { Vector3 } from '/build/three.module.js'
import { gameobject } from '/core/data/gameobject.js'
import { sprite, solid, particle } from '/nomads/components/decomposer.js'
import { animator } from '/nomads/components/animation/animator.js'
import { animation_sequence } from '/nomads/components/animation/animation_sequence.js'
import { animation } from '/nomads/components/animation/animation.js'
import { controller } from '/nomads/components/controller.js'

// GAZEBO TECH stuff
import { build_gazebo } from '/nomads/tests/gazebo.js'
import { box } from '/nomads/tests/box.js'
import { wheelchair } from '/nomads/tests/wheelchair.js'
import { pole, pole_T, pole_R, pole_M } from '/nomads/tests/pole.js'
import { bench } from '/nomads/tests/bench.js'

import * as sky from '/nomads/systems/sky.js'
import * as world from '/nomads/systems/world.js'
import { look_at } from '/nomads/components/look_at.js'
import { transform } from '/core/math/transform.js'


export class game {
    constructor(n){
        this.name = n
        this.objects = []
    }
    init(data, three){
        this.three = three
        console.log("%c"+this.name+" Initialized", "color:#FFE532")
    
        this.show_data = false
        this.time = 0

        if(data.length != 0 && this.show_data) {
            console.log("%cData Loaded", "color:#1ED760")
            for(let page of data){
                console.log("%c -"+page.name, "color:#1C8D43")
            }
        }
        //! ---------- INIT ----------
            keyboard.init()
            physics.init()
            sky.init(three.renderer)
            world.init(three)
        //! ---------- INIT ----------
        var object = new gameobject(
            "denis", 
            new Vector3(0,0.5,0), 
            new Vector3(1,1,1), 
            new quaternion(0,0,0,1, null, null, null)
        )
        object.add_component(solid(get_meta().crab))

        object.add_component(new animator([
            new animation_sequence("walk", [new animation("walk", 0, 3)], 2, true), 
            new animation_sequence("death", [ new animation("dead_start", 3, 3), 
            new animation("dead_end", 6, 1)], 2, false)]))

        var npc = new gameobject("steve", 
        new Vector3(3,0.5,0), 
        new Vector3(1,1,1), 
        new quaternion(0,0,0,1, null, null, null))

        npc.add_component(sprite(get_meta().lithy))
        //npc.add_component(new look_at(three, three.camera.position))

        npc.add_component(new animator([
                new animation_sequence("idle", [new animation("idle", 0, 4)], 8, true),
                new animation_sequence("wave", [new animation("wave", 4, 2)], 8, true)]))
        object.add_component(new controller(three))
       
        this.objects.push(object)
        this.objects.push(npc)

        this.objects[1].transform.look_at(
            new Vector3(0, 0, 0), new Vector3(0, 1, 0))
        
        var box_obj = box (
            new Vector3(-2,0,0),
            new Vector3(1,1,1),
            new quaternion(0,0,0,1)
        )
        this.objects.push(box_obj)

        //this.gazebo_build()
    }

    gazebo_build(){
        this.gaz = gazebo(this.objects)

        var wheelchair_obj = wheelchair (
            new Vector3(-5,0,0),
            new Vector3(1,1,1),
            new quaternion(0,0,0,1))

        var object2  = new gameobject("pole", 
            new Vector3(0,0,0),
            new Vector3(1,1,1),
            new quaternion(0,0,0,1))

        var pole_obj = bench (
            new transform(
                new Vector3(2,0,0),
                new Vector3(1,1,1),
                new quaternion(0,0,0,1)))

        var pole_obj = pole_T (
            new transform(
                new Vector3(-4,0,0),
                new Vector3(1,1,1),
                new quaternion(0,0,0,1)))

        var pole_obj = pole_R (
            new transform(
                new Vector3(-3,0,0),
                new Vector3(1,1,1),
                new quaternion(0,0,0,1)))
        var pole_obj = pole_M (
            new transform(
                new Vector3(-3,0,-1),
                new Vector3(1,1,1),
                new quaternion(0,0,0,1)))
    }

    update(delta){
        this.time += delta

        for (let o of this.objects){    
            o.update(delta)
        }
        sky.update(delta)
    }

    get_time(){
        return this.time
    }
}