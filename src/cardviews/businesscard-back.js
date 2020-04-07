import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Button
} from "reactstrap";

import {
  FaPhone,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaShoppingBag,
  FaCarSide,
  FaCar,
  FaTruck
} from "react-icons/fa";
import * as EmbedMap from '../helpers/embedmap';



const tvserver = "https://tv.9st.one/tvo";
const googleAPIKey = "AIzaSyA1FItXTdaXGNYmvgcUzIXzb7hStkL8c7U";


export default class BusinessCardBack extends React.Component {
  // <CardText><i>Famous for {item.famous}</i></CardText>
  render() {
    const item = this.props.item;

    let orderMethodButtons = [];
    let distributionMethods = [];

    if (!!item.orderMethod) {
      if (!!item.orderMethod.phone) {
        orderMethodButtons.push(
          <Button
            color="success"
            href={"tel: " + item.orderMethod.phone}
            style={{ borderRadius: "50%",  marginLeft: '0.3rem', marginRight: '0.3rem' }}
          >
            <FaPhone
              style={{ minWidth: "30px", height: "42px", margin: '0.1rem' }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.web) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.web}
            style={{ borderRadius: "50%", marginLeft: '0.3rem', marginRight: '0.3rem'}}
          >
            <FaMobileAlt
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.ios) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.ios}
            style={{ borderRadius: "50%", marginLeft: '0.3rem', marginRight: '0.3rem'}}
          >
            <FaApple
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.android) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.android}
            style={{ borderRadius: "50%", marginLeft: '0.3rem', marginRight: '0.3rem' }}
          >
            <FaAndroid
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
    }

    if (!!item.distribution) {
      if (!!item.distribution.takeout) {
        // distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
        distributionMethods.push(
          <FaShoppingBag
            style={{ minWidth: "30px", height: "42px", marginLeft: '0.3rem', marginRight: '0.3rem' }}
          />
        );
      }
      if (!!item.distribution.drivethru) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
        distributionMethods.push(
          <FaCarSide
            style={{ minWidth: "30px", height: "42px", marginLeft: '0.3rem', marginRight: '0.3rem'}}
          />
        );
      }
      if (!!item.distribution.curbside) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaCar style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
        distributionMethods.push(
          <FaCar
            style={{ minWidth: "30px", height: "42px", marginLeft: '0.3rem', marginRight: '0.3rem' }}
          />
        );
      }
      if (!!item.distribution.delivery) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaTruck style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
        distributionMethods.push(
          <FaTruck
            style={{ minWidth: "30px", height: "42px", marginLeft: '0.3rem', marginRight: '0.3rem' }}
          />
        );
      }
    }

    //
    function foodTypeBG(type) {
      switch (type) {
        case "American":
        //   return "#3498DB";
            return "lightblue";
        case "Chinese":
          return "#F4d03f";
        case "Mexican":
          return "#D35400";
        case "Pizza":
          return "#A93226";
        case "Drinks":
          return "#9b59b6";
        case "Fast food":
          return "#8B4513";
        case "Sandwiches":
          return "#27ae60";
        default:
          return "#5D6d7e";
      }
    }

    function cityToZip(city) {
      switch (city) {
        case "Tooele":
          return "84074";
        case "Erda":
          return "84074";
        case "Stansbury":
          return "84074";
        case "Stansbury Park":
          return "84074";
        case "Lake Point":
          return "84074";
        case "Grantsville":
          return "84029";
        default:
          return "UNKNOWN ZIP";
      }
    }

    // var uri = "my test.asp?name=ståle&car=saab";
    // var res = encodeURI(uri);

    // function googleAddress(item) {
    //   let tempStr = `${item.street}, ${item.city}, ${item.state} ${cityToZip(item.city)}`;
    //   return encodeURI(tempStr);
    // }

//           backgroundColor: foodTypeBG(item.type)


/*
// No need to 

  <CardImg
          top
          width="100%"
          height= "50%"
          style={{ objectFit: "cover" }}
          src={tvserver + "/images/" + item.img}
          alt={item.name}
        />






*/

        let newName = item.name
        const twoRests = new RegExp(/(.*?)\s*[/]\s*(.*?)$/)
        const restLoc = new RegExp(/(.*?)\s*[|]\s*(.*?)$/)
        let resTwo = twoRests.exec(item.name)
        let resLoc = restLoc.exec(item.name)
        if (!!resTwo) { newName = <>{resTwo[1] + " &"}<br />{resTwo[2]}</> }
        if (!!resLoc) { newName = <>{resLoc[1]}<br /><small>{resLoc[2]}</small></> }
        

    return (
      <Card
        style={{
          height: '407px',
          width: "100%",
          border: "1pt solid black",
          padding: "1rem",
          position: "relative",
          boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
          backgroundColor: 'rgb(200,200,200)'
        }}
      >
      

        <CardBody style={{ textAlign: "center", padding: "0.5rem" }}>
          <CardTitle
            style={{
              fontSize: "1.15rem",
              fontWeight: 500,
              textAlign: "center",
              height: '2.50rem'
            }}
          >
            {newName}
          </CardTitle>
          {/* <CardSubtitle className="text-muted" style={{textAlign: "center", fontSize: '0.8rem', padding: '0rem'}}>{item.type} </CardSubtitle> */}
          <hr style={{ padding: "0rem", margin: "0.4rem" }} />

          <p style={{height: '2.0rem'}}>{item.famous}</p>
          <p style={{height: '2.0rem'}}>{item.instructions}</p>

          <a
            target="_blank"
            href={encodeURI(`http://maps.google.com/maps?q=${item.street}, ${item.city}, ${item.state} ${cityToZip(item.city)}`)}
            style={{ display: "block" }}
          >
            {item.street}
            <br />
            {item.city}, {item.state} &nbsp;{cityToZip(item.city)}
          </a>
          
          {/* { item.lat ? `<EmbedMap lat=${item.lat} long=${item.long} />` : '<p>coordinates unknown</p>' } */}
          {/* <EmbedMap lat={item.lat} long={item.long} /> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.9861056192885!2d-112.29195408459681!3d40.65223667933834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752bf7e4f4e2921%3A0xde179c4d26297948!2s6777%20UT-36%2C%20Stansbury%20Park%2C%20UT%2084074!5e0!3m2!1sen!2sus!4v1585884724258!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.9861056192885!2d-112.29195408459681!3d40.65223667933834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752bf7e4f4e2921%3A0xde179c4d26297948!2s6777%20UT-36%2C%20Stansbury%20Park%2C%20UT%2084074!5e0!3m2!1sen!2sus!4v1585884844703!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0552324289947!2d-112.30008408460036!3d40.54036887935098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752bc5758202a53%3A0xd918a59285ae0c6e!2sAmerican%20Burgers!5e0!3m2!1sen!2sus!4v1585884924649!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
          <div style={{ position: 'absolute', bottom: '1rem', height: '7.0rem', width: "calc(100% - 3rem)"}} >
          {distributionMethods}
          <br />
          {orderMethodButtons}
          </div>
        </CardBody>
      </Card>
    );
  }
}
