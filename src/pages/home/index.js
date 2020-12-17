import { Card, Chip, Typography } from "@material-ui/core";
import React from "react";
import Content from "../../component/content";
import ContentCard from "../../component/HomeCard/HomeCard";
import Index from "../Index/Index";
import "../Index/Index.scss";

const commonApi = require("../../api/common");

const getAutoResponsiveProps = () => ({
  containerWidth: 1,
  itemMargin: 10,
  itemClassName: "item",
  gridWidth: 20,
  transitionDuration: "8",
  itemMargin: 10,
  horizontalDirection: "left",
  transitionTimingFunction: "linear"
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      tag: [],
      content: null,
      success: false,
      isOpen: false
    };
    this.classList = "index-box index-box--home";
    this.classPaper = "paper--home";
    this.navBar = "";
    this.subheader = (
      <Typography
        style={{
          color: "rgba(0, 0, 0, 0.54)",
          fontSize: "14px"
        }}
      >
        且放白鹿青崖间
      </Typography>
    );
  }
  learnMore(open) {
    this.setState({ isOpen: open });
  }
  getContent(data) {
    this.setState({ content: data });
  }
  componentDidMount() {
    commonApi.getArticel().then(res => {
      let list = res.data.articel.map((item, index) => {
        return <Chip label={item.tag} key={index} clickable style={{ margin: '4px' }} />;
      });
      this.setState({
        data: res.data,
        success: true,
        tag: list
      });
    });
  }

  render(h) {
    return (
      <div className='flex flex-row flex--item'>
        {console.log(this.state.data)}
        <Index
          classList={this.classList}
          classPaper={this.classPaper}
          navBar='flex flex--col'
          subheader={this.subheader}
          children={this.state.tag}
        />
        <Card className='index-box--content flex flex--wrap'>
          {this.state.success
            ? this.state.data.articel.map((item, index) => (
              <ContentCard
                key={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
                content={item}
                parent={this}
              ></ContentCard>
            ))
            : ""}
        </Card>
        <Content
          open={this.state.isOpen}
          parent={this}
          content={this.state.content ? this.state.content : {}}
        />
      </div>
    );
  }
}

export default Home;
