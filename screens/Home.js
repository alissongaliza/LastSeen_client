import React from "react";
import { View, Text } from "react-native";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";


export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* <Query query={gql`{
                    rates(currency: "USD") {
                        currency
                        rate
                      }
                }`}>
                    {({ loading, error, data }) => {
                        if (loading) return <Text>Loading...</Text>;
                        if (error) return <Text>Error :(</Text>;
                            return data.rates.map(({ currency, rate }) => (
                                <View key={currency}>
                                  <Text>{currency}: {rate}</Text>
                                </View>
                              ));

                    }}
                </Query>*/}
                <Text>Home Screen</Text>
            </View>
        )

    }

}