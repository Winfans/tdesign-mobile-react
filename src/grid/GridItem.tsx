import React, { FC, useMemo } from "react";
import { Badge } from "tdesign-mobile-react";
import withNativeProps, {
  NativeProps,
} from "tdesign-mobile-react/_util/withNativeProps";
import { TdGridItemProps, TdGridProps } from "./type";
import useConfig from "../_util/useConfig";
import { GridAlignEnum } from "./Grid";

export interface GridItemProp extends TdGridItemProps, TdGridProps, NativeProps {}

export enum GridItemLayoutEnum {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

const getGridItemWidth = (column) => `${100 / column}%`;

const getBorderStyle = (border) => {
  if (typeof border === "boolean") {
    if (border) {
      return {
        borderColor: "#f6f6f6",
        borderWidth: "1px",
        borderStyle: "solid",
      };
    }

    return {};
  }
  const { color, width, style } = border;
  return {
    borderColor: color || "#f6f6f6",
    borderWidth: width || "1px",
    borderStyle: style || "solid",
  };
};

const getLayout = (layout) => {
  const layoutMap = {
    [GridItemLayoutEnum.VERTICAL]: "column",
    [GridItemLayoutEnum.HORIZONTAL]: "row",
  };
  return layoutMap[layout];
};

const getGridItemTextAlign = (align) =>
  align === GridAlignEnum.LEFT ? GridAlignEnum.LEFT : GridAlignEnum.CENTER;

const getGridItemAlign = (align, layout) => {
  const contentAlign = getGridItemTextAlign(align);
  if (layout === GridItemLayoutEnum.HORIZONTAL) {
    return {
      justifyContent: contentAlign,
    };
  }
  return {
    alignItems: contentAlign,
  };
};

const defaultProps = {
  border: false,
  align: GridAlignEnum.CENTER,
  column: 4,
  gutter: 20,
  description: "",
  image: "",
  layout: GridItemLayoutEnum.VERTICAL,
  text: "",
  badgeProps: null,
};

const GridItem: FC<GridItemProp> = (props) => {
  const {
    border,
    align,
    column,
    gutter,
    description,
    image,
    layout,
    text,
    badgeProps,
  } = props;

  const { classPrefix } = useConfig();

  const name = `${classPrefix}-grid-item`;

  const gridItemWidth = getGridItemWidth(column);

  const gridItemBorder = getBorderStyle(border);

  const gridItemLayout = getLayout(layout);

  const gridItemAlign = getGridItemAlign(align, layout);

  const gridItemTextAlign = getGridItemTextAlign(align);

  const gridItemImage = useMemo(
    () =>
      typeof image === "string" ? (
        <img
          src={image}
          className={`${name}_image`}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        image
      ),
    [image, name]
  );

  return withNativeProps(
    props,
    <div
      className={name}
      style={{
        width: gridItemWidth,
        height: gridItemWidth,
        paddingLeft: gutter,
        paddingRight: gutter,
        flexDirection: gridItemLayout,
        textAlign: gridItemTextAlign,
        ...gridItemAlign,
        ...gridItemBorder,
      }}
    >
      {badgeProps ? (
        <>
          <Badge {...badgeProps}>
            <div className={`${name}__image-box`}>{gridItemImage}</div>
          </Badge>
        </>
      ) : (
        <>
          <div className={`${name}__image-box`}>{gridItemImage}</div>
        </>
      )}
      <div className={`${name}__text`}>
        <div className={`${name}__title`}>{text}</div>
        <div className={`${name}__description`}>{description}</div>
      </div>
    </div>
  );
};

GridItem.defaultProps = defaultProps;
GridItem.displayName = "GridItem";

export default GridItem;
