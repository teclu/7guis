import React from 'react'

import Card from './shared/components/Card'

import Counter from './guis/counter'
import TemperatureConverter from './guis/temperature-converter'
import FlightBooker from './guis/flight-booker'
import Timer from './guis/timer'
import Crud from './guis/crud'

const App = (): JSX.Element => {
  return (
    <div className="container pt-5 pb-5">
      <Card title="Counter" guiComponent={<Counter />} />
      <Card
        title="Temperature Converter"
        guiComponent={<TemperatureConverter />}
      />
      <Card title="Flight Booker" guiComponent={<FlightBooker />} />
      <Card title="Timer" guiComponent={<Timer />} />
      <Card title="CRUD" guiComponent={<Crud />} />
    </div>
  )
}

export default App
