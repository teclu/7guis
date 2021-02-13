import React from 'react'

interface Person {
  id: number
  name: string
  surname: string
}

const DEFAULT_PERSONS: Person[] = [
  {
    id: 0,
    name: 'Joojoo',
    surname: 'Bird'
  },
  {
    id: 1,
    name: 'Lithium',
    surname: 'Tim'
  },
  {
    id: 2,
    name: 'Pwa',
    surname: 'Aao'
  }
]

const Crud = (): JSX.Element => {
  const [searchFilter, setSearchFilter] = React.useState<string>('')
  const [persons, setPersons] = React.useState<Person[]>(DEFAULT_PERSONS)
  const [selectedPersonId, setSelectedPersonId] = React.useState<number>(-1)
  const [personDetails, setPersonDetails] = React.useState<Person>({
    id: -1,
    name: '',
    surname: ''
  })

  const isPersonSelected: boolean = selectedPersonId === -1

  const filteredPersons: Person[] = persons.filter((person: Person): boolean =>
    person.surname.toLowerCase().includes(searchFilter.toLowerCase())
  )

  const onSearchFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setSearchFilter(event.target.value)

  const onSelectedPersonClick = (id: number): void => setSelectedPersonId(id)

  const onPersonDetailsChange = (key: 'name' | 'surname') => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setPersonDetails({ ...personDetails, [key]: event.target.value })

  const onCreatePersonClick = (): void =>
    setPersons(persons.concat({ ...personDetails, id: persons.length }))

  const onUpdatePersonClick = (): void => {
    const updatedPersons: Person[] = [...persons]
    for (const person of updatedPersons) {
      if (person.id === selectedPersonId) {
        person.name = personDetails.name
        person.surname = personDetails.surname
        break
      }
    }
    setPersons(updatedPersons)
    setSelectedPersonId(-1)
  }

  const onDeletePersonClick = (): void => {
    const updatedPersons: Person[] = persons.filter(
      (person: Person): boolean => person.id !== selectedPersonId
    )
    updatedPersons.forEach((person: Person, index: number): void => {
      person.id = index
    })
    setPersons(updatedPersons)
    setSelectedPersonId(-1)
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-auto">
          <div className="input-group">
            <span className="input-group-text">Filter Prefix:</span>
            <input
              className="form-control"
              value={searchFilter}
              onChange={onSearchFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-auto">
          <div className="input-group">
            <span className="input-group-text">Name:</span>
            <input
              className="form-control"
              value={personDetails.name}
              onChange={onPersonDetailsChange('name')}
            />
            <span className="input-group-text">Surname:</span>
            <input
              className="form-control"
              value={personDetails.surname}
              onChange={onPersonDetailsChange('surname')}
            />
          </div>
        </div>
      </div>
      <select className="form-select mb-3" multiple>
        {filteredPersons.map(
          (person: Person): JSX.Element => (
            <option
              key={person.id}
              value={person.id}
              onClick={(): void => onSelectedPersonClick(person.id)}
            >
              {person.surname}, {person.name}
            </option>
          )
        )}
      </select>
      <div className="row mb-3">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onCreatePersonClick}
          >
            Create
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className={`btn ${
              isPersonSelected ? 'btn-secondary' : 'btn-primary'
            }`}
            onClick={onUpdatePersonClick}
            disabled={isPersonSelected}
          >
            Update
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className={`btn ${
              isPersonSelected ? 'btn-secondary' : 'btn-danger'
            }`}
            onClick={onDeletePersonClick}
            disabled={isPersonSelected}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
}

export default Crud
