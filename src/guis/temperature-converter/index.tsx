import React from 'react'

const TemperatureConverter = (): JSX.Element => {
  const [celsius, setCelsius] = React.useState<string>('')
  const [fahrenheit, setFahrenheit] = React.useState<string>('')

  const getInputClassName = (temperature: string): string => {
    if (temperature.match(/^[0-9]*$/)) {
      return 'form-control'
    }
    return 'form-control is-invalid'
  }

  const onCelsiusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.match(/^[0-9]+$/)) {
      const value: number = parseInt(event.target.value)
      setFahrenheit(Math.round(value * (9 / 5) + 32).toString())
    }
    setCelsius(event.target.value)
  }

  const onFahrenheitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.match(/^[0-9]+$/)) {
      const value: number = parseInt(event.target.value)
      setCelsius(Math.round((value - 32) * (5 / 9)).toString())
    }
    setFahrenheit(event.target.value)
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-auto">
          <div className="input-group">
            <input
              className={getInputClassName(celsius)}
              value={celsius}
              onChange={onCelsiusChange}
            />
            <span className="input-group-text">°C</span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-auto">
          <div className="input-group">
            <input
              className={getInputClassName(fahrenheit)}
              value={fahrenheit}
              onChange={onFahrenheitChange}
            />
            <span className="input-group-text">°F</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TemperatureConverter
