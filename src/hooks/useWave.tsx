import { useRef, useState, useEffect } from "react";

export default function useWave(props: UseWaveProps) {
  const requestRef = useRef<number | null>(null);

  const [mousePos, setMousePos] = useState<CoordsInterface>({
    x: null,
    y: null,
  });
  const [relativePos, setRelativePos] = useState<RelativePosModel[]>([
    {
      center: { x: null, y: null },
      distance: null,
      angle: null,
    },
  ]);

  const [affectedItem, setAffectedItem] = useState<AffectedItemModel[]>([
    {
      index: null,
      center: { x: null, y: null },
      distance: null,
      angle: null,
      top: null,
      left: null,
    },
  ]);

  const getItemStyle = (i?: number) => {
    const item = affectedItem[i ?? 0];
    if (props.isInList) {
      return {
        transform:
          item && i === item.index && (item?.distance ?? 0) < props.minDistance
            ? `translate(${item.left}px, ${item.top}px)`
            : "translate(0, 0)",
      };
    } else {
      return {
        transform:
          item && (item?.distance ?? 0) < 95
            ? `translate(${item.left}px, ${item.top}px)`
            : "translate(0, 0)",
      };
    }
  };

  // ------------------------------------------------------
  // same mouse position
  // ------------------------------------------------------
  const getMousePos = (e: MouseEvent) => {
    if (!props.condition) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // ------------------------------------------------------
  // listen to mouse movement
  // ------------------------------------------------------
  useEffect(() => {
    window.addEventListener("mousemove", getMousePos);
    return () => window.removeEventListener("mousemove", getMousePos);
  }, [props.condition]);

  // ------------------------------------------------------
  // save the relative position of each item
  // ------------------------------------------------------
  useEffect(() => {
    if (!props.condition) return;
    if (props.entryId.length === 0) return;

    const listItem: {
      x?: number;
      y?: number;
      distance?: string;
      angle?: number;
    }[] = props.entryId.map((e) => {
      const iconId = document.getElementById(e);

      if (!iconId) return {};

      const icon = iconId.getBoundingClientRect();

      const x: number = icon.x + icon.width / 2;
      const y: number = icon.y + icon.height / 2;

      const angle: number = getAngle({ x, y }, mousePos);
      const distance: string = Math.sqrt(
        Math.pow(x - (mousePos.x ?? 0), 2) + Math.pow(y - (mousePos.y ?? 0), 2),
      ).toFixed(2);

      return {
        x: x,
        y: y,
        distance: distance,
        angle: angle,
      };
    });

    setRelativePos(() =>
      listItem.map((e) => {
        const item: RelativePosModel = {
          center: { x: e.x ?? 0, y: e.y ?? 0 },
          distance: parseFloat(e.distance ?? "0"),
          angle: e.angle ?? 0,
        };
        return item;
      }),
    );
  }, [JSON.stringify(props.entryId), props.condition, mousePos]);

  // ------------------------------------------------------
  // calculate the new position of each item
  // from the mouse position
  // ------------------------------------------------------
  useEffect(() => {
    if (!props.condition) return;

    const updatePositions = (
      item: RelativePosModel,
      i: number,
    ): AffectedItemModel => {
      const { left, top } = calculatePosition(
        mousePos,
        item.center,
        item.distance,
        props.minDistance,
        props.repulseReducer,
      );

      requestRef.current = null; // Reset the request
      return {
        index: i,
        center: item.center,
        distance: item.distance,
        angle: item.angle,
        top: top,
        left: left,
      };
    };
    requestRef.current = requestAnimationFrame(() =>
      setAffectedItem((prev) => {
        return relativePos.map((e, i) => {
          const updatedItem = updatePositions(e, i);

          const prevItem = prev.find((item) => item.index === i);
          if (
            prevItem &&
            prevItem.top === updatedItem.top &&
            prevItem.left === updatedItem.left
          ) {
            return prevItem; // Return previous state if unchanged
          }
          return updatedItem;
        });
      }),
    );

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [relativePos]);

  return { getItemStyle, affectedItem, mousePos };
}

// ------------------------------------------------------
// calculate the angle between the center of the item and the mouse position
/**
 *
 * @param center - item center
 * @param mousePos - mouse position
 * @return {number} - angle
 */
// ------------------------------------------------------
function getAngle(center: CoordsInterface, mousePos: CoordsInterface): number {
  const dx = (mousePos.x ?? 0) - (center.x ?? 0);
  const dy = (center.y ?? 0) - (mousePos.y ?? 0);

  let angle: number = Math.atan2(dy, dx);

  angle = (angle * (180 / Math.PI) + 360) % 360;

  return angle;
}

// ------------------------------------------------------
// calculate the new position of the item
/**
 *
 * @param mousePos - mouse position
 * @param center - item center
 * @param distance - distance
 * @param minDistance - min distance to receive the effect
 * @param repulseReducer - force to which the item is repulsed
 * @returns
 */
// ------------------------------------------------------
function calculatePosition(
  mousePos: CoordsInterface,
  center: CoordsInterface,
  distance: number | null,
  minDistance: number,
  repulseReducer: number,
): { left: number; top: number } {
  const offset: number = (minDistance - (distance ?? 0)) / repulseReducer; // Offset based on distance

  const dx: number = (mousePos.x ?? 0) - (center.x ?? 0);
  const dy: number = (mousePos.y ?? 0) - (center.y ?? 0);
  const angle: number = Math.atan2(dy, dx); // Angle in radians

  const left: number = -Math.cos(angle) * offset; // Invert X direction
  const top: number = -Math.sin(angle) * offset; // Invert Y direction

  return { left, top };
}

interface UseWaveProps {
  isInList: boolean;
  minDistance: number;
  repulseReducer: number;
  condition: boolean;
  entryId: string[];
}

interface CoordsInterface {
  x: number | null;
  y: number | null;
}

interface RelativePosModel {
  center: CoordsInterface;
  distance: number | null;
  angle: number | null;
}

interface AffectedItemModel {
  index: number | null;
  center: CoordsInterface;
  distance: number | null;
  angle: number | null;
  top: number | null;
  left: number | null;
}
