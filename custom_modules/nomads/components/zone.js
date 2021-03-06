import { component } from '/nomads/components/component.js';
import { get_data} from '/core/data/antlion.js'

import * as THREE from '/build/three.module.js'
import { dither4x4, gray_scale } from '/core/rendering/misc/dither.js'
import { texture_to_mesh } from '/core/geometry/texture_to_mesh.js'

export class zone extends component {
    type = "zone"
    required = [];
    constructor(key, s, lod, physical, three){
        super()

        var map = get_data(key)
        this.shader = get_data(s)

        map.color.wrapS = THREE.RepeatWrapping
        map.color.wrapT = THREE.RepeatWrapping

        this.tile = this.generate_tile({
            height: map.height, 
            color: map.color, 
            detail: map.detail, 
            }, lod, physical, three.scene)

        this.collider = null
        this.land = null
    }
    init(){
    }
    generate_tile(maps, lod, physical){
        var land_uniform = {
           indexMatrix16x16: { type: "fv1", value: dither4x4 },
           palette: { type: "v3v", value: gray_scale },
           paletteSize: { type: "i", value: 8 },
           texture: { type: "t", value: maps.height},
           extra: { type: "t", value: null },
           time: { type: "f", value: 1.0 },
           lightpos: { type: 'v3', value: new THREE.Vector3(0, 30, 20) },
           noTexture: { type: "i", value: 0 },
           customColorSwitch: { type: "i", value: 1 },
           customColor: { type: "i", value: new THREE.Vector4(.48, .89, .90, 1) }
        }
        var material = new THREE.ShaderMaterial({
            uniforms: THREE.UniformsUtils.merge([
                THREE.UniformsLib['lights'],
                THREE.UniformsLib['fog'],
                land_uniform]),
            vertexShader: this.shader.vert,
            fragmentShader: this.shader.frag,
            lights: true,
            wireframe: this.shader.extra.wf,
            transparent: this.shader.extra.trans,
            fog: true
        });
    
        material.side = THREE.DoubleSide
        material.uniforms.texture.value = maps.height
        //, wireframe:this.shader.extra.wf
        var materialTemp = new THREE.MeshBasicMaterial({ 
            map: maps.color
        });
        var tile_geo = texture_to_mesh(maps.height, maps.detail, lod, physical)
        tile_geo.computeBoundingBox()
    
        return new THREE.Mesh( tile_geo, materialTemp )
    }
    add_to_scene(scene){
        scene.add(this.tile)
    }
    update(){
        //console.warn("default component update.")
    }
    set_parent(p){
        this.parent = p;
    }
    set_requirement(r){
        //console.warn("default component requirment set.")
    }
}