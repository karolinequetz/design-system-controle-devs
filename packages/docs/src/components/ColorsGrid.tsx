import React from 'react';
import { colors } from '@controle-devs-ui/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
  return Object.entries(colors).map(([keyColor, color]) => {
    return Object.entries(color).map(([key, value]) => {
      return (
        <div
          key={`${keyColor}-${key}`}
          style={{ backgroundColor: value, padding: '2rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>
              ${keyColor} - {key}
            </strong>
            <span>{value}</span>
          </div>
        </div>
      );
    });
  });
}
