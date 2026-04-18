import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MacbookModel16 from "../models/MacbookModel16";
import MacbookModel14 from "../models/MacbookModel14";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  // traverse = forEach
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;

      gsap.killTweensOf(child.material);

      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
  });
};

function ModelSwitcher({ scale, isMobile }) {
  const smallMacRef = useRef();
  const bigMacRef = useRef();

  const showBigMac = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showBigMac) {
      moveGroup(smallMacRef.current, -OFFSET_DISTANCE);
      moveGroup(bigMacRef.current, 0);

      fadeMeshes(smallMacRef.current, 0);
      fadeMeshes(bigMacRef.current, 1);
    } else {
      moveGroup(smallMacRef.current, 0);
      moveGroup(bigMacRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacRef.current, 1);
      fadeMeshes(bigMacRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true, // auto go back original posision
    speed: 1,
    zoom: 1,
    // polar: [-Math.PI, Math.PI], // limit up/down rotation
    azimuth: [-Infinity, Infinity], // limit left/right rotation
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={bigMacRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
}

export default ModelSwitcher;
