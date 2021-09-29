import React from "react";
import {View, Text} from 'react-native';

import {Container} from './styles';

import Header from "../../components/Header";

function Home() {
    return (
        <Container>
            <Header />
            <Text>Tela Home</Text>
        </Container>
    )
}

export default Home;