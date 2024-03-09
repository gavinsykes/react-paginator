import { CSSProperties } from "react";

export const commonPreviousNextStyles: (flexReverse: boolean) => CSSProperties = (flexReverse = false) => ({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: flexReverse ? 'row-reverse' : 'row',
  flexWrap: 'wrap',
  overflow: 'hidden',
  rowGap: '9999px'
});

export const commonPreviousNextAnchorStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}