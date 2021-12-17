import clsx from "clsx";

import styles from "styles/Grid.module.scss";

interface Childrent {
  children: any;
}

function ParentBody({ children }: Childrent): JSX.Element {
  return (
    <div className={clsx(styles.grid, styles.wide, "content")}>
      <div className={clsx(styles.row, styles.no_gutters)}>
        <div className={clsx(styles.c12, styles.m12, styles.l12)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ParentBody;
