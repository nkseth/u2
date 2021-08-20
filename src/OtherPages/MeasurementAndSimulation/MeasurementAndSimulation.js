import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import Container from "../../utils/Container/container";
import style from "./MeasurementAndSimulation.module.scss";

const MeasurementAndSimulation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Container footerOnAllView>
      <div className={style.Measurement_Simulation}>
        <section className={style.Measurement_Simulation_1}>
          <div>
            <h1>
              Measurement & <br /> Simulation
            </h1>
            <p>{dummytext2}</p>
          </div>
        </section>
        {/* Here Your Path */}
        {matches ? (
          <>
            <section className={style.Measurement_Simulation_2}>
              <div>
                <h1>Measurement </h1>
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/26/14/30/woman-6494461__340.jpg"
                  alt="dd"
                />
                <p>{dummytext}</p>
              </div>
            </section>
            <section className={style.Measurement_Simulation_3}>
              <div>
                <h1>Simulation</h1>
                <img
                  src="https://cdn.pixabay.com/photo/2018/09/18/21/08/couple-3687274__340.jpg"
                  alt="aa"
                />
                <p>{dummytext}</p>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className={style.Measurement_Simulation_2}>
              <img
                src="https://cdn.pixabay.com/photo/2021/07/26/14/30/woman-6494461__340.jpg"
                alt="dd"
              />
              <div>
                <h1>Measurement </h1>
                <p>{dummytext}</p>
              </div>
            </section>
            <section className={style.Measurement_Simulation_3}>
              <img
                src="https://cdn.pixabay.com/photo/2018/09/18/21/08/couple-3687274__340.jpg"
                alt="aa"
              />
              <div>
                <h1>Simulation</h1>
                <p>{dummytext}</p>
              </div>
            </section>
          </>
        )}
      </div>
    </Container>
  );
};

export default MeasurementAndSimulation;

const dummytext = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantiuores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantiuores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantiuores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantiuores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantium consectetur maiores, esse reiciendis e!`;
const dummytext2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic necessitatibus facilis delectus non vel, nostrum tempora illum officia est eos laudantiuores hic   est eos laudantium consectetur maiores, esse reiciendis e!`;
