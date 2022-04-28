import { useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { a } from "@react-spring/three";

/*--- Add constraints for view so that ball instances will not fall --*/
function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

/*--- Reusable plane component for Borders --*/
function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

/*--- Create ball instances object when on load--*/
function InstancedSpheres({ count = 200 }) {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereBufferGeometry args={[1.2, 20, 20]} />
      <meshLambertMaterial color="#ff7b00" />
    </instancedMesh>
  );
}

/*--- Add physics for balls to move when hovered with cursor--*/
function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}

export default function CrystalWorld({ ...props }) {
  return (
    <a.group {...props}>
      <Physics
        gravity={[0, -50, 0]}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <group position={[0, 0, -10]}>
          <Mouse />
          <Borders />
          <InstancedSpheres />
        </group>
      </Physics>
    </a.group>
  );
}
