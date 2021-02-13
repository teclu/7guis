import React from 'react'

const MAX_DURATION: number = 30

const Timer = (): JSX.Element => {
  const [currDuration, setCurrDuration] = React.useState<number>(0)
  const [maxDuration, setMaxDuration] = React.useState<number>(MAX_DURATION / 2)

  const getElapsedTime = (): string => {
    if (currDuration < maxDuration) {
      return `${Math.round((currDuration + Number.EPSILON) * 100) / 100}s`
    }
    return `${maxDuration}s`
  }

  const onResetClick = (): void => setCurrDuration(0)

  const onSliderChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMaxDuration(parseFloat(event.target.value))
  }

  React.useEffect((): (() => void) => {
    const timer: number = setTimeout((): void => {
      if (currDuration + 0.1 < maxDuration) {
        setCurrDuration(currDuration + 0.1)
      }
    }, 100)
    return (): void => clearTimeout(timer)
  })

  return (
    <>
      <div className="row mb-4">
        <div className="col-auto">Elapsed Time:</div>
        <div className="col-auto">
          <div
            className="progress"
            style={{ marginTop: '5px', width: '150px' }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={(currDuration / maxDuration) * 100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: `${(currDuration / maxDuration) * 100}%` }}
            />
          </div>
        </div>
        <div className="col-auto">{getElapsedTime()}</div>
      </div>
      <div className="row mb-4">
        <div className="col-auto">Duration:</div>
        <div className="col-auto">
          <input
            type="range"
            min={0}
            max={MAX_DURATION}
            value={maxDuration}
            onChange={onSliderChange}
            style={{ marginTop: '5px', width: '150px' }}
          />
        </div>
        <div className="col-auto">{maxDuration}s</div>
      </div>
      <button type="button" className="btn btn-primary" onClick={onResetClick}>
        Reset
      </button>
    </>
  )
}

export default Timer
