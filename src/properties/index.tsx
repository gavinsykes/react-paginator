import { CSSProperties } from "react";

export const commonDefaultMaximumPreviousNext = 5;

type commonPreviousNextStylesParams = ({
  flexReverse: boolean;
}) | void;

export const commonPreviousNextStyles: (params: commonPreviousNextStylesParams) => CSSProperties = (params) => ({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: params?.flexReverse ? 'row-reverse' : 'row',
  flexWrap: 'wrap',
  overflow: 'hidden',
  rowGap: '9999px'
});

export const commonPreviousNextAnchorStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}