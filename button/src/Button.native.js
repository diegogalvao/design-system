import React from 'react';
import { StyleSheet, Button as RN_Button } from 'react-native';

export default class Button extends React.Component  {
    render() {

        let {type, children, onClick, ...props} = this.props;

        let buttonStyles = {
            'primary': {
                buttonContainer: {
                    padding: 10,
                    width: '100%',
                    maxWidth: 400,
                    overflow: 'hidden',
                    borderRadius: 4,
                    backgroundColor: '#40cd28',
                    margin: 10,
                    elevation:2,                    
                },
                button: {
                    color:'#fff',
                    fontSize:28,
                    fontWeight: 'normal',
                }
            },
            'default': {
                buttonContainer: {
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingRight: 36,
                    paddingLeft: 36,
                    width: 'auto',
                    overflow: 'hidden',
                    borderRadius: 4,
                    backgroundColor: '#00adef',
                    margin: 10,
                    elevation:2,
                },
                button: {
                    color:'#fff',
                    fontSize:18,
                    fontWeight: 'normal',
                }
            }
        }

        const styles = StyleSheet.create(buttonStyles[type]);

        return (<RN_Button
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                    accessibilityLabel={children}
                    onPress={onClick}
                    title={children}
                    {...props}>
                </RN_Button>);
    }
}
