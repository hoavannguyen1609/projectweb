import { memo } from "react";
import clsx from "clsx";
import StarIcon from "@mui/icons-material/Star";

import classes from "./TitleProductDeTail.module.scss";

interface Props {
  title: string;
}

function TitleProductDeTail({ title }: Props) {
  return (
    <div className={clsx(classes.title_box)}>
      <div className={clsx(classes.title_group)}>
        <div className={clsx(classes.title)}>
          <h1 className={clsx(classes.title__child)}>{title}</h1>
        </div>
        <div className={clsx(classes.star)}>
          <StarIcon className={clsx(classes.star__color)} />
          <StarIcon className={clsx(classes.star__color)} />
          <StarIcon className={clsx(classes.star__color)} />
          <StarIcon className={clsx(classes.star__color)} />
          <StarIcon className={clsx(classes.star__color)} />
        </div>
      </div>
    </div>
  );
}

export default memo(TitleProductDeTail);
