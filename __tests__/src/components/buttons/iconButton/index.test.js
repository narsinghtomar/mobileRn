/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {IconButton} from '../../../../../src/components';

it('IconButton component renders correctly', () => {
  const tree = renderer.create(<IconButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
