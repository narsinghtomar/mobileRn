/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {FloatingButton} from '../../../../src/components';

it('FloatingButton component renders correctly', () => {
  const tree = renderer.create(<FloatingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
