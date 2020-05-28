import React, { ReactElement, useRef, useEffect, ReactNode } from "react";
import h337, { Heatmap } from "heatmap.js";
import styled from "styled-components";

const HeatmapCanvas = styled.div`
  height: 100%;
  opacity: 0.5;
  z-index: 10;
  overflow-x: hidden;

  canvas {
    height: 100%;
    width: 100%;
    z-index: 11;
    pointer-events: none;
  }
`;

const HeatmapContainer = styled.div`
  width: 100%;
  pointer-events: none;
  position: relative;
`;

interface Props {
  showOverlay?: boolean;
  children: ReactNode;
}

export default function OverlayHeatmap({
  showOverlay,
  children,
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  let heatmapInstance: Heatmap<"x", "y", "value"> | undefined = undefined;

  useEffect(() => {
    if (ref?.current) {
      heatmapInstance = h337.create({
        container: ref.current,
        radius: 60,
      });
    }

    window.addEventListener("mousemove", addData);
  }, []);

  const addData = (e: any) => {
    heatmapInstance?.addData({
      x: e.layerX,
      y: e.layerY,
      value: 1,
    });
  };

  return (
    <HeatmapContainer>
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <HeatmapCanvas
          ref={ref}
          style={{ visibility: !showOverlay ? "hidden" : "visible" }}
        />
      </div>
      <div style={{ pointerEvents: "auto" }}>{children}</div>
    </HeatmapContainer>
  );
}
