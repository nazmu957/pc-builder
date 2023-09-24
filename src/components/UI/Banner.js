import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import DrawingImage from "@/assets/images/banner-images/banner1.jpg";
import EagleImage from "@/assets/images/banner-images/banner2.jpg";

const contentStyle = {
  height: "550px",
  color: "#000",
  marginLeft: "8rem"

};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "0px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        

        <Col
          lg={{
            span: 20,
          }}
          style={contentStyle}
        >
          <Image src={DrawingImage} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>

        <Col
          lg={{
            span: 20,
          }}
          style={contentStyle}
        >
          <Image
            src={EagleImage}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
