import { useEffect } from "react";

interface LoaderProps {
  type:
    | "ring"
    | "ring2"
    | "tailSpin"
    | "lineSpinner"
    | "squircle"
    | "square"
    | "reuleaux"
    | "tailChase"
    | "dotSpinner"
    | "spiral"
    | "bouncy"
    | "treadmill"
    | "bouncyArc"
    | "waveform"
    | "hatch"
    | "hourglass"
    | "zoomies"
    | "lineWobble"
    | "infinity"
    | "trefoil"
    | "cardio"
    | "helix"
    | "grid"
    | "quantum"
    | "wobble"
    | "orbit"
    | "chaoticOrbit"
    | "superballs"
    | "trio"
    | "momentum"
    | "dotWave"
    | "leapfrog"
    | "newton"
    | "dotStream"
    | "dotPulse"
    | "metronome"
    | "jelly"
    | "jellyTriangle"
    | "mirage"
    | "ping"
    | "pulsar"
    | "ripples"
    | "miyagi"
    | "pinwheel";
  size?: number; // Jeder Hatt eigenen Default
  speed?: number; // same nach unten
  stroke?: number;
  strokeLength?: number;
  bgOpacity?: number;
  color?: string; // das kann ich defaulten
}

const Loader: React.FC<LoaderProps> = ({
  type = "helix",
  size,
  speed,
  stroke,
  strokeLength,
  bgOpacity,
  color = "#CDAE23",
  ...props
}) => {
  useEffect(() => {
    void import("ldrs").then((ldr) => {
      switch (type) {
        case "ring":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.ring.register();
          break;
        case "ring2":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.ring2.register();
          break;
        case "tailSpin":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.tailspin.register();
          break;
        case "lineSpinner":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.lineSpinner.register();
          break;
        case "squircle":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.squircle.register();
          break;
        case "square":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.square.register();
          break;
        case "reuleaux":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.reuleaux.register();
          break;
        case "tailChase":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.tailChase.register();
          break;
        case "dotSpinner":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.dotSpinner.register();
          break;
        case "spiral":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.spiral.register();
          break;
        case "bouncy":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.bouncy.register();
          break;
        case "treadmill":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.treadmill.register();
          break;
        case "bouncyArc":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.bouncyArc.register();
          break;
        case "waveform":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.waveform.register();
          break;
        case "hatch":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.hatch.register();
          break;
        case "hourglass":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.hourglass.register();
          break;
        case "zoomies":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.zoomies.register();
          break;
        case "lineWobble":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.lineWobble.register();
          break;
        case "infinity":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.infinity.register();
          break;
        case "trefoil":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.trefoil.register();
          break;
        case "cardio":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.cardio.register();
          break;
        case "helix":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.helix.register();
          break;
        case "grid":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.grid.register();
          break;
        case "quantum":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.quantum.register();
          break;
        case "wobble":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.wobble.register();
          break;
        case "orbit":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.orbit.register();
          break;
        case "chaoticOrbit":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.chaoticOrbit.register();
          break;
        case "superballs":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.superballs.register();
          break;
        case "trio":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.trio.register();
          break;
        case "momentum":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.momentum.register();
          break;
        case "dotWave":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.dotWave.register();
          break;
        case "leapfrog":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.leapfrog.register();
          break;
        case "newton": // 's cradle
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.newtonsCradle.register();
          break;
        case "dotStream":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.dotStream.register();
          break;
        case "dotPulse":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.dotPulse.register();
          break;
        case "metronome":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.metronome.register();
          break;
        case "jelly":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.jelly.register();
          break;
        case "jellyTriangle":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.jellyTriangle.register();
          break;
        case "mirage":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.mirage.register();
          break;
        case "ping":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.ping.register();
          break;
        case "pulsar":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.pulsar.register();
          break;
        case "ripples":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.ripples.register();
          break;
        case "miyagi":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.miyagi.register();
          break;
        case "pinwheel":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- idk it works
          ldr.pinwheel.register();
          break;
      }
    });
  }, [type]);
  switch (type) {
    case "ring":
      return (
        <l-ring
          bg-opacity={bgOpacity}
          color={color}
          size={size || 50}
          speed={speed || 2}
          stroke={stroke || 6}
          {...props}
        />
      );
    case "ring2":
      return (
        <l-ring-2
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 50}
          speed={speed || 0.8}
          stroke={stroke || 6}
          stroke-length={strokeLength || 0.25}
          {...props}
        />
      );
    case "tailSpin":
      return (
        <l-tailspin
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          stroke={stroke || 6}
          {...props}
        />
      );
    case "lineSpinner":
      return (
        <l-line-spinner
          color={color}
          size={size || 50}
          speed={speed || 1}
          stroke={stroke || 3.5}
          {...props}
        />
      );
    case "squircle":
      return (
        <l-squircle
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          stroke={stroke || 6}
          stroke-length={strokeLength || 0.15}
          {...props}
        />
      );
    case "square":
      return (
        <l-square
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 45}
          speed={speed || 1.2}
          stroke={stroke || 6}
          stroke-length={strokeLength || 0.25}
          {...props}
        />
      );
    case "reuleaux":
      return (
        <l-reuleaux
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 50}
          speed={speed || 1.2}
          stroke={stroke || 6}
          stroke-length={strokeLength || 0.15}
          {...props}
        />
      );
    case "tailChase":
      return (
        <l-tail-chase
          color={color}
          size={size || 50}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "dotSpinner":
      return (
        <l-dot-spinner
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          {...props}
        />
      );
    case "spiral":
      return (
        <l-spiral
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          {...props}
        />
      );
    case "bouncy":
      return (
        <l-bouncy
          color={color}
          size={size || 55}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "treadmill":
      return (
        <l-treadmill
          color={color}
          size={size || 85}
          speed={speed || 1.3}
          {...props}
        />
      );
    case "bouncyArc":
      return (
        <l-bouncy-arc
          color={color}
          size={size || 85}
          speed={speed || 1.6}
          {...props}
        />
      );
    case "waveform":
      return (
        <l-waveform
          color={color}
          size={size || 45}
          speed={speed || 1}
          stroke={stroke || 4}
          {...props}
        />
      );
    case "hatch":
      return (
        <l-hatch
          color={color}
          size={size || 35}
          speed={speed || 3.5}
          stroke={stroke || 4.5}
          {...props}
        />
      );
    case "hourglass":
      return (
        <l-hourglass
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 50}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "zoomies":
      return (
        <l-zoomies
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 100}
          speed={speed || 1.4}
          stroke={stroke || 6}
          {...props}
        />
      );
    case "lineWobble":
      return (
        <l-line-wobble
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 100}
          speed={speed || 1.8}
          stroke={stroke || 6}
          {...props}
        />
      );
    case "infinity":
      return (
        <l-infinity
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 65}
          speed={speed || 1.3}
          stroke={stroke || 5}
          stroke-length={strokeLength || 0.15}
          {...props}
        />
      );
    case "trefoil":
      return (
        <l-trefoil
          bg-opacity={bgOpacity || 0.1}
          color={color}
          size={size || 50}
          speed={speed || 1.4}
          stroke={stroke || 5}
          stroke-length={strokeLength || 0.15}
          {...props}
        />
      );
    case "cardio":
      return (
        <l-cardio
          color={color}
          size={size || 60}
          speed={speed || 2}
          stroke={stroke || 5}
          {...props}
        />
      );
    case "helix":
      return (
        <l-helix
          color={color}
          size={size || 60}
          speed={speed || 2.5}
          {...props}
        />
      );
    case "grid":
      return (
        <l-grid
          color={color}
          size={size || 75}
          speed={speed || 1.5}
          {...props}
        />
      );
    case "quantum":
      return (
        <l-quantum
          color={color}
          size={size || 60}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "wobble":
      return (
        <l-wobble
          color={color}
          size={size || 60}
          speed={speed || 0.9}
          {...props}
        />
      );
    case "orbit":
      return (
        <l-orbit
          color={color}
          size={size || 45}
          speed={speed || 1.5}
          {...props}
        />
      );
    case "chaoticOrbit":
      return (
        <l-chaotic-orbit
          color={color}
          size={size || 45}
          speed={speed || 1.5}
          {...props}
        />
      );
    case "superballs":
      return (
        <l-superballs
          color={color}
          size={size || 50}
          speed={speed || 1.4}
          {...props}
        />
      );
    case "trio":
      return (
        <l-trio
          color={color}
          size={size || 50}
          speed={speed || 1.3}
          {...props}
        />
      );
    case "momentum":
      return (
        <l-momentum
          color={color}
          size={size || 50}
          speed={speed || 1.1}
          {...props}
        />
      );
    case "dotWave":
      return (
        <l-dot-wave
          color={color}
          size={size || 65}
          speed={speed || 1}
          {...props}
        />
      );
    case "leapfrog":
      return (
        <l-leapfrog
          color={color}
          size={size || 50}
          speed={speed || 2.5}
          {...props}
        />
      );
    case "newton": // 's cradle
      return (
        <l-newtons-cradle
          color={color}
          size={size || 100}
          speed={speed || 1.4}
          {...props}
        />
      );
    case "dotStream":
      return (
        <l-dot-stream
          color={color}
          size={size || 75}
          speed={speed || 2.5}
          {...props}
        />
      );
    case "dotPulse":
      return (
        <l-dot-pulse
          color={color}
          size={size || 50}
          speed={speed || 1.3}
          {...props}
        />
      );
    case "metronome":
      return (
        <l-metronome
          color={color}
          size={size || 50}
          speed={speed || 1.6}
          {...props}
        />
      );
    case "jelly":
      return (
        <l-jelly
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          {...props}
        />
      );
    case "jellyTriangle":
      return (
        <l-jelly-triangle
          color={color}
          size={size || 40}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "mirage":
      return (
        <l-mirage
          color={color}
          size={size || 75}
          speed={speed || 2.5}
          {...props}
        />
      );
    case "ping":
      return (
        <l-ping color={color} size={size || 60} speed={speed || 2} {...props} />
      );
    case "pulsar":
      return (
        <l-pulsar
          color={color}
          size={size || 50}
          speed={speed || 1.8}
          {...props}
        />
      );
    case "ripples":
      return (
        <l-ripples
          color={color}
          size={size || 60}
          speed={speed || 2}
          {...props}
        />
      );
    case "miyagi":
      return (
        <l-miyagi
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          stroke={stroke || 5}
          {...props}
        />
      );
    case "pinwheel":
      return (
        <l-pinwheel
          color={color}
          size={size || 50}
          speed={speed || 0.9}
          stroke={stroke || 5}
          {...props}
        />
      );
  }
};

export default Loader;
