import * as todoModules from './todo';
import * as uiModules from './ui';

const modules = { ...todoModules, ...uiModules };

export default modules;
