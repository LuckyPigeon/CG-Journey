#ifdef GL_ES
precision highp float;
#endif

uniform vec3 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;
uniform sampler2D u_fft;
uniform vec4 u_par;
uniform vec4 u_pos;
uniform vec3 u_beatBassFFT;

vec4 center = vec4(0.0, 1.0, 0.0, 1.0);

// Basic RayTracer START
/*
 * Intersection
 */
float intersectSphere(in vec3 ro, in vec3 rd, in vec4 center) {
    // assume p is on the surface of sphere, and c is the center of sphere
    // then (p-c)^2 = r^2, let's assume P is a function that can process
    // any p at any position, we use P(t) to represent the function, 
    // and since any p = ro + t*rd, so P(t) = ro + t*rd.
    // use description above, we get
    // 1. (p-c)^2 = p^2 - 2*p*c + c^2 = r^2
    // 2. P(t) = ro + t*rd
    // now put 2. in 1.
    // ((ro + t*rd) - c)^2 - r^2 = 0
    // (rd*t + (ro - c))^2 - r^2 = 0 => t is the variable of quadratic equation,
    // (rd^2 * t^2) + 2*(ro - c)*rd*t + (ro - c)^2 - r^2 = 0
    // we get our coefficient a = rd^2, b = 2*(ro - c)*rd, c = (ro - c)^2 - r^2
    vec3 oc = ro - center.xyz;
    float a = dot(rd, rd);
    float b = 2.0*dot(oc, rd);
    float c = dot(oc, oc) - center.w * center.w;
    float discriminant = b*b - 4.0*a*c;

    if (discriminant < 0.0) {
        return -1.0; // ray is in the sphere
    }

    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    return t;
}

float intersectPlane(in vec3 ro, in vec3 rd) {
    return -ro.y/rd.y;
}

float intersect(in vec3 ro, in vec3 rd, out float resT) {
    resT = 1000.0;
    float id = -1.0;
    float t_sphere = intersectSphere(ro, rd, center); // intersect with a sphere
    float t_plane = intersectPlane(ro, rd); // intersect with a plane

    if (t_sphere > 0.0) {
        id = 1.0;
        resT = t_sphere;
    }

    /*
     * default resT=0.0, this will cause a paradox at the below condition,
     * and give the sphere upper half of blue and lower half of red,
     * set resT default to a big value can resolve this issue.
     */
    if (t_plane > 0.0 && t_plane < resT) {
        id = 2.0;
        resT = t_plane;
    }

    return id;
}

/*
 * Normals (normalized)
 */
vec3 normalSphere(in vec3 pos, in vec4 center) {
    return (pos - center.xyz) / center.w;
}

vec3 normalPlane() {
    return vec3(0.0, 1.0, 0.0);
}

void main(void) {
    // light
    vec3 light = normalize(vec3(0.57703));

    // uv coordinate, from 0 to 1
    vec2 uv = (gl_FragCoord.xy/u_resolution.xy);

    // make the sphere roll around
    center.x = 0.5 * cos(u_time);
    center.z = 0.5 * sin(u_time);

    // generate ray origin and direction
    vec3 ro = vec3(0.0, 1.0, 4.0);
    vec3 rd = normalize(vec3((-1.0+2.0*uv) * vec2(1.78, 1.0), -1.0)); // scaling

    // intersect the ray with 3d scene
    float t;
    float id = intersect(ro, rd, t);
    vec3 pos = ro + t*rd;

    // draw black by default
    vec3 col = vec3(0.0);

    // process the light, and we need normals
    if (id == 1.0) {
        // if ray hits sphere
        // col = vec3(0.0, 0.0, 1.0); // adjust color after the sphere finished
        vec3 normal = normalSphere(pos, center);
        float directionalLight = clamp(dot(normal, light), 0.0, 1.0);
        float ambientLight = 0.5 + 0.5*normal.y;
        col = vec3(0.3, 0.6, 0.7) * directionalLight + vec3(0.5, 0.6, 0.7) * ambientLight;
    } else if (id == 2.0) {
        // if ray hits plane
        // col = vec3(1.0, 0.0, 0.0); // adjust oclor after the plane finished
        vec3 normal = normalPlane();
        float directionalLight = clamp(dot(normal, light), 0.0, 1.0);
        float ambientLight = smoothstep(0.0, 2.0*center.w, length(pos.xz - center.xz));
        col = vec3(0.6, 0.3, 0.1) * directionalLight + vec3(0.5, 0.6, 0.7) * ambientLight;
    }

    col = sqrt(col); // lighting the whole scene
    gl_FragColor = vec4(col, 1.0);
}
