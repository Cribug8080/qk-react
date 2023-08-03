import React from 'react'
import { SheetComponent } from '@antv/s2-react';
import '@antv/s2-react/dist/style.min.css';
import { s2DataConfig } from './data';

const s2Options = {
  width: 600,
  height: 480
}

export default function Table() {
  return (
    <SheetComponent
      dataCfg={s2DataConfig}
      options={s2Options}
    />
  )
}
