/**
 * Button
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonBlock} from '../../../../../src/components';

it('ButtonBlock component renders correctly', () => {
  const tree = renderer.create(<ButtonBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});
