import React, { useEffect } from "react";
import discordLogo from "../../assets/img/home/discord.png";
import swLogo from "../../assets/img/home/sw-logo.png";
import Gallery from "../../components/Gallery";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../../store/ducks/home/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const { data, loading, error } = useSelector(state => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);
  return (
    <div className="d-flex home-bg">
      <div className="discord-link fixed-top">
        <a
          href="https://discord.gg/QBqBAzp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={discordLogo}
            className="img-fluid"
            title="Come chat with us!"
            alt="Come chat with us on Discord!"
          />
        </a>
      </div>
      <div className="container">
        <div className="row no-gutter">
          <div className="col-12 text-center">
            <h1>Stardew Planner</h1>
            <h5>
              This excellent tool helps you to plan out your farm easily and
              make it possible to test different{" "}
              <a
                href="http://store.steampowered.com/app/413150/Stardew_Valley/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={swLogo} alt="Stardew Valley" />
              </a>{" "}
              layouts with ease.
            </h5>

            <div className="credits">
              Renders provided by{" "}
              <a
                href="https://upload.farm/"
                target="_blank"
                rel="noopener noreferrer"
                onClick="ga('send', 'event', 'Upload farm link', 'Clicked on upload.farm link');"
              >
                upload.farm
              </a>{" "}
              | Page design by{" "}
              <a
                href="https://dribbble.com/kedin"
                onclick="ga('send', 'event', 'Karel Eding link', 'Clicked on kedin Dribble link');"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karel Eding
              </a>
            </div>
            <Link className="btn" to="/planner/">
              Start Planning
            </Link>
          </div>
        </div>
        {
          //<!-- Popular -->
        }
        <Gallery
          title={"Popular"}
          loading={loading}
          planList={data.popular}
          description={
            <React.Fragment>
              These are selected renders that are popular by either views or in
              our{" "}
              <a
                href="https://www.facebook.com/groups/stardewplanner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook community
              </a>
            </React.Fragment>
          }
        />
        {
          //<!-- useful renders -->
        }
        <Gallery
          title={"Useful"}
          loading={loading}
          planList={data.useful}
          description={
            "Plans that show effective placement or some other tricks"
          }
        />
        {
          //<!-- latest renders -->
        }
        <Gallery
          title={"Latest"}
          loading={loading}
          planList={data.latest}
          description={"Latest renders by render creation time"}
        />
      </div>
    </div>
  );
};

export default HomePage;
