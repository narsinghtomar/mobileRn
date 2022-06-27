/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Loader} from '../../../../src/components';

it('Loader component renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
