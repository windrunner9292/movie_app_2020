import React from "react";
import PropTypes from "prop-types";

// if the state is not required, the structure of the code can remain in the function level instead of class level.

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;