#!/usr/bin/env node

import mainIterforAllGames from '../src/index.js';
import { discription, getGameInfo } from '../src/games/calculateGame.js';

mainIterforAllGames(getGameInfo, discription);
