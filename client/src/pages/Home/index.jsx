import React, { useEffect } from "react";
import swLogo from "../../assets/img/home/sw-logo.png";
import Gallery from "../../components/Gallery";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../../store/ducks/home/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  const { data, loading } = useSelector(state => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);
  return (
    <div className="d-flex home-bg">
      <Container>
        <Row noGutters>
          <Col xs={12} className="text-center">
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
                onClick="ga('send', 'event', 'Karel Eding link', 'Clicked on kedin Dribble link');"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karel Eding
              </a>
            </div>
            <Button tag={Link} to="/planner/">
              Start Planning
            </Button>
          </Col>
        </Row>
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
                className="text-yellow"
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
      </Container>
    </div>
  );
};

export default Home;
