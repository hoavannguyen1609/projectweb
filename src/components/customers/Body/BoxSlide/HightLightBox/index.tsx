import clsx from "clsx";
import { Link } from "react-router-dom";

import { baseURL } from "API";

import classes from "./Highlightbox.module.scss";
import styles from "styles/Grid.module.scss";

function HighLightBox({ props }: any): JSX.Element {
  return (
    <div className={clsx(classes.highlightbox, styles.l3)}>
      {props.map((prop: any) => (
        <div key={prop.id} className={clsx(classes.highlightbox__item)}>
          <Link to={prop.name} className={clsx(classes.highlightbox__link)}>
            <img
              src={`${baseURL}/image/imagefrontend/${prop.image}`}
              alt={prop.name}
              className={clsx(classes.highlightbox__img)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HighLightBox;
