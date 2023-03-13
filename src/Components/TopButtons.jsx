
const TopButtons = ({ setQuery, setClearInput }) => {
    const handleCityNameClick = (cityName) => {
        setQuery({ q: cityName });
        setClearInput(true)
    }
    const cities = [
        {
            id: 1,
            cityName: 'London'
        },
        {
            id: 2,
            cityName: 'Sydney'
        },
        {
            id: 3,
            cityName: 'Tokyo'
        },
        {
            id: 4,
            cityName: 'Mumbai'
        },
        {
            id: 5,
            cityName: 'New York'
        }
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {
                cities.map(({ cityName, id }) => {
                    return <button
                        key={id}
                        className="text-white text-lg font-medium"
                        onClick={() => { handleCityNameClick(cityName) }}>
                        {cityName}
                    </button>
                })
            }
        </div>
    )
}

export default TopButtons