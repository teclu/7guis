import React from 'react'

import Card from './shared/components/Card'
import Counter from './guis/counter'

const App = (): JSX.Element => {
  return (
    <div className="container pt-5 pb-5">
      <Card title="Counter" guiComponent={<Counter />} />
    </div>
  )
}

export default App
