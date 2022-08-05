import { Difficulty, ModelScene, GEO_TYPE, GEO_SHADER, Geometry } from "https://deno.land/x/remapper@2.0.1/src/mod.ts"

const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");
const scene = new ModelScene(new Geometry()); // This creates a new envrionment using geometry


// What all of these functions do is take the material of an object in Blender and applies the stated properties to all objects with that material

// Use this one for an example...

scene.addPrimaryGroups(
  "Cube", // Material Name
  new Geometry(GEO_TYPE.CUBE, { // What geometry object type we want to use
    _shader: GEO_SHADER.STANDARD, // The shader of the material
    _color: [0, 0, 0], // The color of the material
    // Other properties can also go here
  }),
);

// We continue this process with all the geometry types

scene.addPrimaryGroups(
  "Triangle",
  new Geometry(GEO_TYPE.TRIANGLE, { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: GEO_SHADER.STANDARD,
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Capsule",
  new Geometry(GEO_TYPE.CAPSULE, {
    _shader: GEO_SHADER.STANDARD,
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Plane",
  new Geometry(GEO_TYPE.PLANE, { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING UPWARDS
    _shader: GEO_SHADER.STANDARD,
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Quad",
  new Geometry(GEO_TYPE.QUAD, { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: GEO_SHADER.STANDARD,
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Sphere",
  new Geometry(GEO_TYPE.SPHERE, {
    _shader: GEO_SHADER.STANDARD,
    _color: [0, 0, 0],
  }),
);

// When we want to make the environment, we call either this function or that "static" function
scene.animate([
    ["template", 0], // Put the name of your .rmmodel file here and time you want it to show up, more detail on Swifter's Gtihub
]);

// !!! Make sure NOT to copy and paste the base objects in the template file, instead use Shift+D to duplicate the object. 
// !!! If you don't do that Blender will make a new material for the copy and pasted version, using duplication keeps the same material

// ! Also make sure to disable the `Template Objects` collection in Blender, you don't want to see those


map.save();
