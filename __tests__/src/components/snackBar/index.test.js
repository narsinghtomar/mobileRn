/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {SnackBar} from '../../../../src/components';

it('SnackBar component renders correctly', () => {
  const tree = renderer.create(<SnackBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
