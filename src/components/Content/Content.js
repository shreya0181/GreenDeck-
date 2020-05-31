import React, { useState, useEffect, Component } from "react";
import "./content.css";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import useAxios from "axios-hooks";

const options = [
  {
    title: "Kerluke, Weimann and Ziemann",
    description: "Reverse-engineered dynamic task-force",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/craigelimeliah/128.jpg",
    price: "$61.70",
  },
  {
    title: "Dicki Inc",
    description: "Business-focused content-based project",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/vijaykarthik/128.jpg",
    price: "$52.54",
  },
  {
    title: "Mayert, Swift and Kessler",
    description: "Robust intangible adapter",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nathalie_fs/128.jpg",
    price: "$93.11",
  },
  {
    title: "Hessel - Metz",
    description: "Open-source executive help-desk",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tumski/128.jpg",
    price: "$31.39",
  },
  {
    title: "Shields, Senger and Wisozk",
    description: "Reactive multimedia collaboration",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/joelcipriano/128.jpg",
    price: "$36.56",
  },
];

// const Content = () => {
//   // const [{ data, loading, error }, refetch] = useAxios({
//   //   url:
//   //     "https://greendeck-datasets-2.s3.amazonaws.com/netaporter_gb_similar.json",
//   //   method: "get",
//   //   crossDomain: true,
//   // });
//   // console.log({ data });

//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Error!</p>;
//   return (
//     <div className="contentContainer">
//       <Grid columns={3}>
//         <Grid.Row style={{ paddingBottom: "5px" }}>
//           {options.map((option) => (
//             <Grid.Column style={{ paddingBottom: "9px" }}>
//               <Card>
//                 <Image src={option.image} wrapped ui={false} />
//                 <Card.Content>
//                   <Card.Header>{option.title}</Card.Header>
//                   <Card.Meta>
//                     <span className="date">Joined in 2015</span>
//                   </Card.Meta>
//                   <Card.Description>{option.description}</Card.Description>
//                 </Card.Content>
//                 <Card.Content extra>{option.price}</Card.Content>
//               </Card>
//             </Grid.Column>
//           ))}
//         </Grid.Row>
//       </Grid>
//     </div>
//   );
// };
class Content extends Component {
  constructor() {
    super();
    this.state = {
      cont: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/", {
      method: "GET",
    })
      .then((res) => res.json)
      .then((res) => {
        this.setState({ cont: res });
      });
  }
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row style={{ paddingBottom: "5px" }}>
          {options.map((option) => (
            <Grid.Column style={{ paddingBottom: "9px" }}>
              {" "}
              <Card>
                <Image src={option.image} wrapped ui={false} />{" "}
                <Card.Content>
                  <Card.Header>{option.title}</Card.Header>{" "}
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>{option.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>{option.price}</Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}
export default Content;
