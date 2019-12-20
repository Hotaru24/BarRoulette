import React, { Fragment } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';


const Bar = ({ name, address, hour, style }) => (
  <Card>
    <CardItem><Text>{name}</Text></CardItem>
    <CardItem><Text>{address}</Text></CardItem>
    <CardItem><Text>{hour}</Text></CardItem>
    <CardItem><Text>{style}</Text></CardItem>
  </Card>
);

export default Bar;
