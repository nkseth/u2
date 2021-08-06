import React, { PureComponent } from "react";
import "./measurement.css";
import { Row, Col } from "antd";

class Measurement extends PureComponent {
  render() {
    return (
      <div className="container">
        <Row justify="space-around">
        <Col
          xs={{ span: 20}}
          md={{ span: 11}}
          lg={{ span: 7}}
        >
          <div className="image-container">
            <a
              href="https://www.youtube.com/watch?v=sHocHrm7yM8"
              target="_blank"
            >
              <img  className="background" src="https://anima-uploads.s3.amazonaws.com/projects/60a90dfbab541f9852965709/img/ellipse-20@2x.png"/>
              <img  className="play" src="https://anima-uploads.s3.amazonaws.com/projects/60a90dfbab541f9852965709/img/vector-5@2x.png" />
            </a>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 11, offset: 1 }}
          lg={{ span: 15, offset: 1 }}
        >
          <div>
            <h1 className="title">Measurement</h1>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
          </div>
        </Col>
      </Row>
      <Row className='section-2' justify="space-around">
        <Col xs={{ span: 20 }}
          md={{ span: 11 }}
          lg={{ span: 15 }}>
        <div>
            <h1 className="title">Simulation</h1>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
          </div>
        </Col>

        <Col xs={{ span: 20, offset: 2 }}
          md={{ span: 11, offset: 1 }}
          lg={{ span: 7, offset: 1 }}>
        <div className="image-container-2">
            <a
              href="https://www.youtube.com/watch?v=sHocHrm7yM8"
              target="_blank"
            >
              <img  className="background" src="https://anima-uploads.s3.amazonaws.com/projects/60a90dfbab541f9852965709/img/ellipse-20@2x.png"/>
              <img  className="play" src="https://anima-uploads.s3.amazonaws.com/projects/60a90dfbab541f9852965709/img/vector-5@2x.png" />
            </a>
          </div>
          
        </Col>
      </Row>
      
      </div>
    );
  }
}
export default Measurement;