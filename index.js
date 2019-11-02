/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContenedorApp from './src/App/ContenedorApp';

AppRegistry.registerComponent(appName, () => ContenedorApp);
