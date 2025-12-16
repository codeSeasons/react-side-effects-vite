const FetchButton = ({ fetchJoke }) => {
  return (
    <button className="fetch-button" onClick={fetchJoke}>
      Generate New Joke
    </button>
  )
}

export default FetchButton