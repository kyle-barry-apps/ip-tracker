import { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import { useContext } from 'react'
import { CoordinatesContext } from '../contexts/CoordinatesContext'
import icon from '../icon'

const MarkerPosition = () => {
  
  const { coordinates } = useContext(CoordinatesContext)

  const map = useMap()

  useEffect(() => {
    map.flyTo(coordinates, 15, {
      animate: true,
    }, [map, coordinates])
  })

  return (
    <> 
    <Marker icon={icon} position={coordinates}>
      <Popup>
        A popup
      </Popup>
    </Marker>
    </>
  )
}

export default MarkerPosition