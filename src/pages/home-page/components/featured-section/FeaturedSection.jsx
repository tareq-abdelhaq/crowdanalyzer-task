import { Link } from "react-router-dom";

import { APP_PATHS } from "../../../../constants/routes";

import Button from "../../../../components/ui/Button/Button";

import classes from "./FeaturedSection.module.css";

function FeaturedSection(props) {
  const { id, title, description, category, images } = props;

  return (
    <section className={classes.featured}>
      <div className={classes["featured_image"]}>
        <img src={images[0]} alt={title} />
      </div>

      <div className={classes["featured_info"]}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div>
          <span className={classes["featured_category"]}>{category}</span>
          <Link to={APP_PATHS.GAME_DETAILS.replace(":gameId", id)}>
            <Button type="primary">more info</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
