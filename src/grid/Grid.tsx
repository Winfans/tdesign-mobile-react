import React, { FC } from "react";
import withNativeProps, {
  NativeProps,
} from "tdesign-mobile-react/_util/withNativeProps";
import { TdGridProps } from "./type";
import useConfig from "../_util/useConfig";

export interface GridProps extends TdGridProps, NativeProps {}

export enum GridAlignEnum {
  CENTER = "center",
  LEFT = "left",
}

const defaultProps = {
  gutter: 20,
  align: GridAlignEnum.CENTER,
  border: false,
  column: 4,
};

const Grid: FC<GridProps> = (props) => {
  const { children, align, border, column, gutter } = props;

  const { classPrefix } = useConfig();
  const name = `${classPrefix}-grid`;

  return withNativeProps(
    props,
    <div className={name} style={{ paddingRight: gutter }}>
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, {
          border,
          align,
          column,
        })
      )}
    </div>
  );
};

Grid.defaultProps = defaultProps;
Grid.displayName = "gutter";

export default Grid;
