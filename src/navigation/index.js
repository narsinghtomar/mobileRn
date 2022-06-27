/**
 * Navigation Container
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';

/**
 *
 * @param {*} props
 * @returns
 */
function AppNavigator(props) {
  const {setNavigationRef} = props;
  /**
   * Return
   */
  return (
    <NavigationContainer
      ref={navigationRef => {
        setNavigationRef(navigationRef);
      }}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
