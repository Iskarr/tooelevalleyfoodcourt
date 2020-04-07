import React from "react";
import { CardDeck, CardColumns, Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import BusinessCard from "./businesscard";
import BusinessCardBack from "./businesscard-back";

// Helpers and API's
import { tvoapi } from "../helpers/tvoapi";

export default class CardStack extends React.Component {
  // we need to map over what we get from the API and put them into this card deck

  constructor(props) {
    super(props);
    this.state = { cardList: [], filterTags: [], filterShow: false, helpShow: false, legendShow: false, };
  }

  componentDidMount() {
    this.loadAll();
  }

  loadAll() {
    tvoapi.queryBusiness("/all", (json) => {
      json.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      this.setState({ cardList: json });
    });
  }

  toggleFilter(tag) {
    const filterTags = this.state.filterTags;
    if (filterTags.some((e) => e === tag)) {
      this.setState({
        filterTags: this.state.filterTags.filter((e) => e !== tag),
      });
    } else {
      filterTags.push(tag);
      this.setState(filterTags);
    }
  }

  checkFilter(tag) {
    return this.state.filterTags.some((e) => e === tag);
  }

  toggleShow(showItem) {
      const whatToShow = !this.state[showItem]
      this.setState({[showItem]: whatToShow})
  }

  render() {
    const cardListOrig = this.state.cardList;
    const filterTags = this.state.filterTags;

    let cardList = cardListOrig;

    if (filterTags.length) {
      cardList = cardListOrig.filter((e) => {
        const intersection = e.tags.filter((t) => filterTags.includes(t));
        return intersection.length === filterTags.length;
      });
    }

    let mTagList = {};
    for (let entry in cardList) {
      const tags = cardList[entry].tags;
      for (let i in tags) {
        mTagList[tags[i]] = true;
      }
    }
    let tagList = [];
    for (let tag in mTagList) {
      tagList.push(tag);
    }
    tagList.sort();

    //console.log('Taglist: ', tagList)


    return (
      <Container>

            <Modal fade={false} isOpen={this.state.helpShow} toggle={this.toggleShow.bind(this, "helpShow")} >
            <ModalHeader toggle={this.toggleShow.bind(this, "helpShow")}>Help</ModalHeader>
            <ModalBody>
              <p>This is helpful information</p>
            </ModalBody>
            </Modal>

            <Modal fade={false} isOpen={this.state.legendShow} toggle={this.toggleShow.bind(this, "legendShow")} >
            <ModalHeader toggle={this.toggleShow.bind(this, "legendShow")}>Legend</ModalHeader>
            <ModalBody>
              <p>Here is the legend</p>
            </ModalBody>
            </Modal>

            <Modal fade={false} isOpen={this.state.filterShow} toggle={this.toggleShow.bind(this, "filterShow")} >
            <ModalHeader toggle={this.toggleShow.bind(this, "filterShow")}>Filters</ModalHeader>
            <ModalBody>
              {tagList.map((tag) => {
                return (
                  <Button
                    color={this.checkFilter(tag) ? "primary" : "info"}
                    onClick={() => this.toggleFilter(tag)}
                    style={{margin: "0.1rem"}}
                  >
                    {tag}
                  </Button>
                );
              })}
            </ModalBody>
            </Modal>
 
          
        <Row>
          <Col>
          <Button onClick={this.toggleShow.bind(this,"filterShow")}>Filters</Button>
          <Button onClick={this.toggleShow.bind(this,"legendShow")}>Legend</Button>
          <Button onClick={this.toggleShow.bind(this,"helpShow")}>Help</Button>
          </Col>
        </Row>

        <Row xs="1" sm="1" md="2" lg="3">
          {cardList.map((item) => {
            return (
              <Col
                key={item._id}
                style={{
                  maxWidth: "100vw",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <Flippy
                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  /// these are optional style, it is not necessary
                >
                  <FrontSide style={{ padding: "0rem", boxShadow: "none" }}>
                    <BusinessCard item={item} />
                  </FrontSide>
                  <BackSide style={{ padding: "0rem", boxShadow: "none" }}>
                    <BusinessCardBack item={item} />
                  </BackSide>
                </Flippy>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
