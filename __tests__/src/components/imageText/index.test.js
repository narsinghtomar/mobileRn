/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ImageWithText} from '../../../../src/components';

it('ImageWithText component renders correctly', () => {
  const tree = renderer.create(<ImageWithText />).toJSON();
  expect(tree).toMatchSnapshot();
});
