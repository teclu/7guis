import React from 'react'

// Date Format: DD MM YYYY
// Credits: https://stackoverflow.com/questions/8647893/regular-expression-leap-years-and-more/8648129
const DATE_REGEX: RegExp = /^((31[\/.-](0[13578]|1[02])[\/.-](18|19|20)[0-9]{2})|((29|30)[\/.-](01|0[3-9]|1[1-2])[\/.-](18|19|20)[0-9]{2})|((0[1-9]|1[0-9]|2[0-8])[\/.-](0[1-9]|1[0-2])[\/.-](18|19|20)[0-9]{2})|((29)[\/.-]02[\/.-](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)))$/

const TYPES: string[] = ['one-way flight', 'return flight']

const isValidDate = (date: string): boolean => date.match(DATE_REGEX) !== null

const parseDate = (date: string): Date => {
  const dateParts: number[] = date
    .split(/[\/.-]/)
    .map((part: string): number => parseInt(part))
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}

const FlightBooker = (): JSX.Element => {
  const [type, setType] = React.useState<number>(0)
  const [startDate, setStartDate] = React.useState<string>(
    new Date().toLocaleDateString('en-GB')
  )
  const [returnDate, setReturnDate] = React.useState<string>(
    new Date().toLocaleDateString('en-GB')
  )

  const isBookEnabled = (): boolean => {
    if (type === 0) {
      return isValidDate(startDate)
    }
    console.debug(parseDate(returnDate))
    console.debug(parseDate(startDate))
    console.debug(parseDate(returnDate) >= parseDate(startDate))
    return (
      isValidDate(startDate) &&
      isValidDate(returnDate) &&
      parseDate(returnDate) >= parseDate(startDate)
    )
  }

  const getInputClassName = (date: string, isReturnDate?: boolean): string => {
    if (isReturnDate && type === 0) {
      return 'form-control'
    } else if (isValidDate(date)) {
      return 'form-control is-valid'
    }
    return 'form-control is-invalid'
  }

  const onTypeChange = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    setType(parseInt(event.target.value))

  const onStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setStartDate(event.target.value)

  const onReturnDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setReturnDate(event.target.value)

  const onBookClick = (): void => {
    const message: string = `You have booked a ${TYPES[0]}`
    if (type === 0) {
      alert(`${message} for ${startDate}`)
    } else {
      alert(`${message} from ${startDate} to ${returnDate}`)
    }
  }

  React.useEffect((): void => {
    if (type === 1) {
      setReturnDate(new Date().toLocaleDateString('en-GB'))
    }
  }, [type])

  return (
    <div className="row">
      <div className="col-auto">
        <select className="form-select" value={type} onChange={onTypeChange}>
          {TYPES.map(
            (option: string, index: number): JSX.Element => (
              <option key={option} value={index}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
      <div className="col-auto">
        <input
          className={getInputClassName(startDate)}
          value={startDate}
          onChange={onStartDateChange}
        />
      </div>
      <div className="col-auto">
        <input
          className={getInputClassName(returnDate, true)}
          value={type === 0 ? '' : returnDate}
          onChange={onReturnDateChange}
          disabled={type === 0}
        />
      </div>
      <div className="col-auto">
        <button
          type="button"
          className={`btn ${
            !isBookEnabled() ? 'btn-secondary' : 'btn-primary'
          }`}
          disabled={!isBookEnabled()}
          onClick={onBookClick}
        >
          Book
        </button>
      </div>
    </div>
  )
}

export default FlightBooker
