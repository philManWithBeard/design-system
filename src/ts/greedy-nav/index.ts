// this is just a placeholder file
import { Config, defaultConfig } from './Config';

class GreedyNav {
    constructor(config: Config) {
        Object.assign(defaultConfig, config);
    }
}

export default GreedyNav;
