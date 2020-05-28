import React, { ReactElement, useRef, useEffect } from "react";
import h337, { Heatmap } from "heatmap.js";
import styled from "styled-components";

const HeatmapCanvas = styled.div`
  height: 100%;
  opacity: 0.5;
  z-index: 10;
  position: relative;

  canvas {
    height: 100%;
    z-index: 11;
  }
`;

const HeatmapContainer = styled.div`
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
`;

interface Props {
  showOverlay?: boolean;
}

export default function OverlayHeatmap({ showOverlay }: Props): ReactElement {
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
      <HeatmapCanvas
        ref={ref}
        style={{ visibility: !showOverlay ? "hidden" : "visible" }}
      />
    </HeatmapContainer>
  );
}
