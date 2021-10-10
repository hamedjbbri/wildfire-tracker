import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'


const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyC49ILwXgUmdFN4_RDyN_XoZ50XJXlWBA0'
                }}
                defaultCenter = { center }
                defaultZoom = { zoom }
            >
                <LocationMarker lat={center.lat}/>
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },

    zoom: 6
}

export default Map;
