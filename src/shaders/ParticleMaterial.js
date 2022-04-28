import { ShaderMaterial } from "three";
import * as THREE from "three";

export default class ParticleMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: `attribute vec3 aRandom;
      varying vec3 vPosition;
      uniform float uTime;
      uniform float uScale;
      
      void main() {
          vPosition = position;
      
          float time = uTime * 4.;
      
          vec3 pos = position;
          pos.x += sin(time * aRandom.x) * 0.01;
          pos.y += sin(time * aRandom.y) * 0.01;
          pos.z += sin(time * aRandom.z) * 0.01;
      
          pos.x *= uScale + (sin(pos.y * 4. + time) * (1. - uScale));
          pos.y *= uScale + (cos(pos.z * 4. + time) * (1. - uScale));
          pos.z *= uScale + (sin(pos.x * 4. + time) * (1. - uScale));
      
          pos *= uScale;
      
          vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 8.0 / -mvPosition.z;
      }`,
      fragmentShader: `varying vec3 vPosition;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      
      void main() {
          vec3 color = vec3(1., 0., 0.);
          color = vPosition;
      
          vec3 color1 = vec3(1.0, 0.0, 0.0);
          vec3 color2 = vec3(1.0, 1.0, 0.0);
      
          float depth = vPosition.z * 0.5 + 0.5;
          color = mix(uColor1, uColor2, depth);
          gl_FragColor = vec4(color, depth * 0.3 + 0.2);
      }`,
      uniforms: {
        uColor1: { value: new THREE.Color('#FFFFF') },
        uColor2: { value: new THREE.Color('#FFFFF') },
        uTime: { value: 0 },
        uScale: { value: 0 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }
}
