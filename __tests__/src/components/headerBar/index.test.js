/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderBar} from '../../../../src/components';

it('HeaderBar component renders correctly', () => {
  const tree = renderer.create(<HeaderBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
