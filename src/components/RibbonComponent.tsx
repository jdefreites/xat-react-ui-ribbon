import React, { FC } from "react";

const RibbonPosition = {
  TopLet: "top-left",
  BottomLeft: "bottom-left",
  TopRight: "top-right",
  BottomRight: "bottom-right",
} as const;

type RibbonPositionType = typeof RibbonPosition[keyof typeof RibbonPosition];

interface RibbonProps {
  position?: RibbonPositionType;
  title?: String;
  bg?:
    | "primary"
    | "success"
    | "danger"
    | "info"
    | "default"
    | "warning"
    | string;
}

const defaultProps: RibbonProps = {
  bg: "default",
  position: "top-right",
  title: "Default",
};

const RibbonComponent: FC<RibbonProps> = (props): JSX.Element => {
  return (
    <div
      className={`ribbon ribbon-${props.position} ribbon-${
        props.bg ? props.bg : "default"
      }`}
    >
      <span>{props.title}</span>
    </div>
  );
};

RibbonComponent.defaultProps = defaultProps;

export default RibbonComponent;
