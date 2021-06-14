import { Injectable } from '@nestjs/common';
import { Indicator } from './types';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getIndicators(): Indicator {
    const data = fs.readFileSync(
      path.resolve(__dirname, '../resource/indicator.json'),
      'utf-8',
    );
    return JSON.parse(data);
  }
}
