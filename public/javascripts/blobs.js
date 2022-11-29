// thank you https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/ for the guidance on creating these blobs

import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";

const paths = document.querySelectorAll("path");
const root = document.documentElement;

for (let i = 0; i < paths.length; i++) {

    let path = paths[i];

    const points = createPoints();

    // map a number from 1 range to another
    function map(n, start1, end1, start2, end2) {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    const simplex = new SimplexNoise();

    // how fast we progress through "time"
    let noiseStep = 0.005;

    function noise(x, y) {
        // return a value at {x point in time} {y point in time}
        return simplex.noise2D(x, y);
    }

    (function animate() {
        // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
        path.setAttribute("d", spline(points, 1, true));

        requestAnimationFrame(animate);

        for (let i = 0; i < points.length; i++) {
            const point = points[i];

            //return a "random" value between -1/1
            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

            // map this to a new value
            const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
            const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

            point.x = x;
            point.y = y;

            point.noiseOffsetX += noiseStep;
            point.noiseOffsetY += noiseStep;
        }

    })();

    function createPoints() {
        const points = [];
        // how many points do we need
        const numPoints = 6;
        // used to equally space each point around the circle
        const angleStep = (Math.PI * 2) / numPoints;
        // the radius of the circle
        const rad = 75;

        for (let i = 1; i <= numPoints; i++) {
            // x & y coordinates of the current point
            const theta = i * angleStep;

            const x = 100 + Math.cos(theta) * rad;
            const y = 100 + Math.sin(theta) * rad;

            // store the point
            points.push({
                x: x,
                y: y,
                /* we need to keep a reference to the point's original {x, y} coordinates 
                for when we modulate the values later */
                originX: x,
                originY: y,
                // more on this in a moment!
                noiseOffsetX: Math.random() * 1000,
                noiseOffsetY: Math.random() * 1000,
            });
        }

        return points;
    }

    path.addEventListener("mouseover", () => {
        noiseStep = 0.02;
    });

    path.addEventListener("mouseleave", () => {
        noiseStep = 0.005;
    });
}