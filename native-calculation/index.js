/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from "modules/app-module/App";

AppRegistry.registerComponent(appName, () => App);
