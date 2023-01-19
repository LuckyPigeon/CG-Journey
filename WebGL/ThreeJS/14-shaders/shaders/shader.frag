uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
// varying float vRandom;
varying float vElevation;

void main()
{
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + 0.65;
    gl_FragColor = textureColor;
    // gl_FragColor = vec4(vUv, 1.0, 1.0);
    // gl_FragColor = vec4(0.6, vRandom, 1.0, 1.0);
}