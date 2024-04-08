import React from "react";
import { Grid } from "@commercetools-frontend/ui-kit";
import PropTypes from "prop-types";

export const Gridd = ({
  children,
  display,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridTemplate,
  gridColumnGap,
  gridRowGap,
  gridGap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  placeContent,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  grid,
}) => {
  return (
    <Grid
      gridGap={gridGap}
      gridAutoColumns={gridAutoColumns}
      gridTemplateColumns={gridTemplateColumns}
      display={display}
      gridTemplateRows={gridTemplateRows}
      gridTemplateAreas={gridTemplateAreas}
      gridTemplate={gridTemplate}
      gridColumnGap={gridColumnGap}
      gridRowGap={gridRowGap}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      placeContent={placeContent}
      gridAutoRows={gridAutoRows}
      gridAutoFlow={gridAutoFlow}
      grid={grid}
    >
      {children}
    </Grid>
  );
};

Gridd.propTypes = {
  grid: PropTypes.string,
  display: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  gridTemplateAreas: PropTypes.string,
  gridTemplate: PropTypes.string,
  gridColumnGap: PropTypes.string,
  gridRowGap: PropTypes.string,
  gridGap: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  placeContent: PropTypes.string,
  gridAutoColumns: PropTypes.string,
  gridAutoRows: PropTypes.string,
  gridAutoFlow: PropTypes.string,
};
