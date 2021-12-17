import { memo } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import clsx from "clsx";

import classes from "./GoToTop.module.scss";

function GoToTop(): JSX.Element {
  const handleGototop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className={clsx(classes.backToTop)} onClick={handleGototop}>
      <ExpandLessIcon className={clsx(classes.icon)} />
    </div>
  );
}

export default memo(GoToTop);
