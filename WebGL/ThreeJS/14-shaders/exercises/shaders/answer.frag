#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main()
{
    // exercise 1
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    // exercise 2
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // exercise 3
    // gl_FragColor = vec4(vec3(vUv.x), 1.0);

    // exercise 4
    // gl_FragColor = vec4(vec3(vUv.y), 1.0);

    // exercise 5
    // gl_FragColor = vec4(vec3(1.0 - vUv.y), 1.0); 

    // exercise 6
    // gl_FragColor = vec4(vec3(vUv.y * 10.0), 1.0); 

    // exercise 7
    // gl_FragColor = vec4(vec3(mod(vUv.y*10.0, 1.0)), 1.0); 

    // exercise 8
    // gl_FragColor = vec4(vec3(step(0.5, mod(vUv.y*10.0, 1.0))), 1.0); 

    // exercise 9
    // gl_FragColor = vec4(vec3(step(0.8, mod(vUv.y*10.0, 1.0))), 1.0); 

    // exercise 10
    // gl_FragColor = vec4(vec3(step(0.8, mod(vUv.x*10.0, 1.0))), 1.0); 

    // exercise 11
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.8, mod(vUv.x*10.0, 1.0)) +
    //         step(0.8, mod(vUv.y*10.0, 1.0))
    //         ), 
    //     1.0); 

    // exercise 12
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.8, mod(vUv.x*10.0, 1.0)) *
    //         step(0.8, mod(vUv.y*10.0, 1.0))
    //         ), 
    //     1.0); 

    // exercise 13
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.4, mod(vUv.x*10.0, 1.0)) * 
    //         step(0.8, mod(vUv.y*10.0, 1.0))
    //         ), 
    //     1.0); 

    // exercise 14
    // float horizontal = step(0.4, mod(vUv.x*10.0, 1.0)) * step(0.8, mod(vUv.y*10.0, 1.0));
    // float vertical = step(0.8, mod(vUv.x*10.0, 1.0)) * step(0.4, mod(vUv.y*10.0, 1.0));

    // gl_FragColor = vec4(vec3(horizontal + vertical), 1.0); 

    // exercise 15
    // float horizontal = step(0.4, mod(vUv.x*10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y*10.0, 1.0));
    // float vertical = step(0.8, mod(vUv.x*10.0, 1.0)) * step(0.4, mod(vUv.y*10.0 - 0.2, 1.0));

    // gl_FragColor = vec4(vec3(horizontal+vertical), 1.0); 

    // exercise 16
    // gl_FragColor = vec4(vec3(abs(vUv.x-0.5)-0.025), 1.0);

    // exercise 17
    // gl_FragColor = vec4(
    //     vec3(
    //         min(
    //             (abs(vUv.x-0.5)-0.025),
    //             (abs(vUv.y-0.5)-0.025)
    //             )
    //         ), 
    //     1.0);

    // exercise 18
    // gl_FragColor = vec4(
    //     vec3(
    //         max(
    //             (abs(vUv.x-0.5)-0.025),
    //             (abs(vUv.y-0.5)-0.025)
    //             )
    //         ), 
    //     1.0);
    
    // exercise 19
    // gl_FragColor = vec4(
    //     vec3(
    //         step(
    //             0.2, 
    //             max(
    //                 abs(vUv.x - 0.5), 
    //                 abs(vUv.y - 0.5)
    //             )
    //         )
    //     ), 
    // 1.0);

    // exercise 20
    // gl_FragColor = vec4(
    //     vec3(
    //         step(
    //             0.45, 
    //             max(
    //                 abs(vUv.x - 0.5), 
    //                 abs(vUv.y - 0.5)
    //             )
    //         )
    //     ), 
    // 1.0);

    // exercise 21
    // gl_FragColor = vec4(vec3(floor(vUv.x*10.0)/10.0),1.0);

    // exercise 22
    // gl_FragColor = vec4(
    //     vec3(
    //         floor(vUv.x*10.0)/10.0 *
    //         floor(vUv.y*10.0)/10.0
    //     ),
    // 1.0);

    // exercise 23
    // random noise
    // gl_FragColor = vec4(
    //     vec3(
    //         random(vUv)
    //     ),
    // 1.0);

    // exercise 24
    // gl_FragColor = vec4(
    //     vec3(
    //         random(
    //             vec2(
    //                 floor(vUv.x*10.0)/10.0, 
    //                 floor(vUv.y*10.0)/10.0
    //             )
    //         )
    //     ),
    // 1.0);

    // exercise 25
    // gl_FragColor = vec4(
    //     vec3(
    //         random(
    //             vec2(
    //                 floor(vUv.x*10.0)/10.0, 
    //                 floor((vUv.y+vUv.x*0.5)*10.0)/10.0
    //             )
    //         )
    //     ),
    // 1.0);

    // exercise 26
    // gl_FragColor = vec4(vec3(length(vUv)), 1.0);

    // exercise 27
    // gl_FragColor = vec4(vec3(length(vUv-vec2(0.5))), 1.0);

    // exercise 28
    // gl_FragColor = vec4(vec3(1.0-length(vUv-vec2(0.5))), 1.0);

    // exercise 29
    // gl_FragColor = vec4(vec3(0.015/length(vUv-vec2(0.5))), 1.0);

    // exercise 30
    // gl_FragColor = vec4(vec3(0.2/length(vec2(vUv.x, (vUv.y-0.5)*10.0+0.5)-vec2(0.5))), 1.0);

    // exercise 31
    // gl_FragColor = vec4(
    //     vec3(
    //         0.15/length(vec2(vUv.x, (vUv.y-0.5)*10.0+0.5)-vec2(0.5)) *
    //         0.15/length(vec2((vUv.x-0.5)*10.0+0.5, vUv.y)-vec2(0.5))
    //     ), 
    // 1.0);

    // exercise 32
    // vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    // gl_FragColor = vec4(
    //     vec3(
    //         0.15/length(vec2(rotatedUv.x, (rotatedUv.y-0.5)*10.0+0.5)-vec2(0.5)) *
    //         0.15/length(vec2((rotatedUv.x-0.5)*10.0+0.5, rotatedUv.y)-vec2(0.5))
    //     ), 
    // 1.0);

    // exercise 33
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.2, length(vUv-vec2(0.5)))
    //     ),
    // 1.0);

    // exercise 34
    // gl_FragColor = vec4(
    //     vec3(
    //         abs(length(vUv-vec2(0.5)) - 0.25)
    //     ),
    // 1.0);

    // exercise 35
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.01, abs(length(vUv-vec2(0.5)) - 0.25))
    //     ),
    // 1.0);

    // exercise 36
    // gl_FragColor = vec4(
    //     vec3(
    //         1.0 - step(0.01, abs(length(vUv-vec2(0.5)) - 0.25))
    //     ),
    // 1.0);

    // exercise 37
    // gl_FragColor = vec4(
    //     vec3(
    //        (
    //         1.0 - step(
    //             0.01, abs(
    //                 length(
    //                     vec2(
    //                         vUv.x,
    //                         vUv.y+sin(vUv.x*30.0)*0.1
    //                     ) -
    //                     vec2(0.5)
    //                 ) - 0.25
    //             )
    //         ))
    // ),
    // 1.0);

    // exercise 38
    // gl_FragColor = vec4(
    //     vec3(
    //        (
    //         1.0 - step(
    //             0.01, abs(
    //                 length(
    //                     vec2(
    //                         vUv.x+sin(vUv.y*30.0)*0.1,
    //                         vUv.y+sin(vUv.x*30.0)*0.1
    //                     ) -
    //                     vec2(0.5)
    //                 ) - 0.25
    //             )
    //         ))
    // ),
    // 1.0);

    // exercise 39
    // gl_FragColor = vec4(
    //     vec3(
    //        (
    //         1.0 - step(
    //             0.01, abs(
    //                 length(
    //                     vec2(
    //                         vUv.x+sin(vUv.y*100.0)*0.1,
    //                         vUv.y+sin(vUv.x*100.0)*0.1
    //                     ) -
    //                     vec2(0.5)
    //                 ) - 0.25
    //             )
    //         ))
    // ),
    // 1.0);

    // exercise 40
    // gl_FragColor = vec4(
    //     vec3(
    //        atan(vUv.x, vUv.y)
    //     ),
    // 1.0);

    // exercise 41
    // gl_FragColor = vec4(
    //     vec3(
    //        atan(vUv.x-0.5, vUv.y-0.5)
    //     ),
    // 1.0);

    // exercise 42
    // gl_FragColor = vec4(
    //     vec3(
    //        atan(vUv.x-0.5, vUv.y-0.5) / (PI*2.0) + 0.5
    //     ),
    // 1.0);

    // exercise 43
    // gl_FragColor = vec4(
    //     vec3(
    //        mod((atan(vUv.x-0.5, vUv.y-0.5) / (PI*2.0) + 0.5)*20.0, 1.0)
    //     ),
    // 1.0);

    // exercise 44
    // gl_FragColor = vec4(
    //     vec3(
    //        sin((atan(vUv.x-0.5, vUv.y-0.5) / (PI*2.0) + 0.5)*100.0)
    //     ),
    // 1.0);

    // exercise 45
    // float angle = sin((atan(vUv.x-0.5, vUv.y-0.5) / (PI*2.0) + 0.5)*100.0);
    // gl_FragColor = vec4(
    //     vec3(
    //        1.0-step(
    //         0.005,abs(
    //             length(
    //                 vUv-vec2(0.5)
    //             )-(0.25 + angle * 0.02)
    //         ))
    //     ),
    // 1.0);

    // exercise 46
    // perlin noise
    // https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
    // gl_FragColor = vec4(
    //     vec3(
    //         cnoise(vUv*10.0)
    //     ), 
    // 1.0);
    
    // exercise 47
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.0, cnoise(vUv*10.0))
    //     ), 
    // 1.0);
    
    // exercise 48
    // gl_FragColor = vec4(
    //     vec3(
    //         1.0-abs(cnoise(vUv*10.0))
    //     ), 
    // 1.0);
    
    // exercise 49
    // gl_FragColor = vec4(
    //     vec3(
    //         sin(cnoise(vUv*10.0)*20.0)
    //     ), 
    // 1.0);
    
    // exercise 50
    // gl_FragColor = vec4(
    //     vec3(
    //         step(0.9, sin(cnoise(vUv*10.0)*20.0))
    //     ), 
    // 1.0);

    // mix color
    vec3 originColor = vec3(0.0);
    float weight = step(0.9, sin(cnoise(vUv*10.0)*20.0));
    weight = clamp(weight, 0.0, 1.0);
    gl_FragColor = vec4(
        vec3(
            (1.0-weight) * originColor +
            weight * vec3(vUv, 1.0)
        ),
    1.0);

    // default
    // gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);
}