import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay, Button } from 'reactstrap'

import { FaPhone, FaMobileAlt, FaApple, FaAndroid, FaShoppingBag, FaCarSide, FaCar, FaTruck } from 'react-icons/fa'

const tvserver = "https://tv.9st.one/tvo"

export default class BusinessCard extends React.Component {

// <CardText><i>Famous for {item.famous}</i></CardText>
    render() {
        
        const item = this.props.item

        let orderMethodButtons = []
        let distributionMethods = []

        if (!!item.orderMethod) {
            if (!!item.orderMethod.phone) {
                orderMethodButtons.push(<Button color="success" href={"tel: " + item.orderMethod.phone} style={{borderRadius: '50%', marginLeft: '0.3rem', marginRight: '0.3rem'}}><FaPhone style={{ minWidth: '30px', height: '42px', margin: '0.1rem'}}/></Button>)
            }
            if (!!item.orderMethod.web) {
                orderMethodButtons.push(<Button color="primary" href={item.orderMethod.web} style={{borderRadius: '50%', marginLeft: '0.3rem', marginRight: '0.3rem'}}><FaMobileAlt style={{ minWidth: '30px', height: '42px', margin: '0.1rem'}}/></Button>)
            }
            if (!!item.orderMethod.ios) {
                orderMethodButtons.push(<Button color="primary" href={item.orderMethod.ios} style={{borderRadius: '50%', marginLeft: '0.3rem', marginRight: '0.3rem'}}><FaApple style={{ minWidth: '30px', height: '42px', margin: '0.1rem'}}/></Button>)
            }
            if (!!item.orderMethod.android) {
                orderMethodButtons.push(<Button color="primary" href={item.orderMethod.android} style={{borderRadius: '50%', marginLeft: '0.3rem', marginRight: '0.3rem'}}><FaAndroid style={{ minWidth: '30px', height: '42px', margin: '0.1rem'}}/></Button>)
            }

        }

        if (!!item.distribution) {
            if (!!item.distribution.takeout) {
               // distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
               distributionMethods.push(<FaShoppingBag style={{ minWidth: '30px', height: '42px', marginLeft: '0.3rem', marginRight: '0.3rem'}}/>)
            }
            if (!!item.distribution.drivethru) {
                //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
                distributionMethods.push(<FaCarSide style={{ minWidth: '30px', height: '42px', marginLeft: '0.3rem', marginRight: '0.3rem'}}/>)
            }
            if (!!item.distribution.curbside) {
                //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaCar style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
                distributionMethods.push(<FaCar style={{ minWidth: '30px', height: '42px', marginLeft: '0.3rem', marginRight: '0.3rem'}}/>)
            }
            if (!!item.distribution.delivery) {
                //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaTruck style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
                distributionMethods.push(<FaTruck style={{ minWidth: '30px', height: '42px', marginLeft: '0.3rem', marginRight: '0.3rem'}}/>)
            }

        }

// 
// , filter: "drop-shadow(0.3rem 0.3rem 0.8rem rgba(0,0,0,0.2))"
//


        let newName = item.name
        const twoRests = new RegExp(/(.*?)\s*[/]\s*(.*?)$/)
        const restLoc = new RegExp(/(.*?)\s*[|]\s*(.*?)$/)
        let resTwo = twoRests.exec(item.name)
        let resLoc = restLoc.exec(item.name)
        if (!!resTwo) { newName = <>{resTwo[1] + " &"}<br />{resTwo[2]}</> }
        if (!!resLoc) { newName = <>{resLoc[1]}<br /><small>({resLoc[2]})</small></> }
        
        console.log('Results: ', resLoc)

        return <Card style={{ height: '407px', width: '100%',  border: "1pt solid black",  padding: '1rem', boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)", position: 'relative'}}>

                <CardImg top  maxWidth="100%" style={{height: "10rem", objectFit: "contain"  }} src={tvserver + '/images/' + item.img } alt={item.name} />

                <CardBody style={{textAlign: 'center', padding: '0.5rem'}}>
                <CardTitle style={{height: '2.50rem', fontSize: '1.10rem', fontWeight: 500, textAlign: "center"}}>{newName}</CardTitle>                                              
                <CardSubtitle className="text-muted" style={{textAlign: "center", fontSize: '0.8rem', padding: '0.3rem'}}>{item.type} </CardSubtitle>
                <hr style={{padding: '0rem', margin: "0.4rem"}} />

                
                <div style={{ height: '7.0rem', position: 'absolute', bottom: '1rem', width: "calc(100% - 3rem)"}}>
                { distributionMethods }
                <br />
                { orderMethodButtons }
                </div>
            </CardBody>

        </Card>

    }



}