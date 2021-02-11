import React from 'react'

import Card from './shared/components/Card'

import Counter from './guis/counter'
import TemperatureConverter from './guis/temperature-converter'

const App = (): JSX.Element => {
  return (
    <div className="container pt-5 pb-5">
      <Card title="Counter" guiComponent={<Counter />} />
      <Card
        title="Temperature Converter"
        guiComponent={<TemperatureConverter />}
      />
    </div>
  )
}

export default App
