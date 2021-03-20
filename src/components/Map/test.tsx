import { render, screen } from '@testing-library/react'
import Map from './Map'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Santos',
      slug: 'santos',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 1500,
        longitude: -135
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/santos/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
