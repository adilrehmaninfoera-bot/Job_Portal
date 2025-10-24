import React from 'react'

function Jobcard() {
    const Jobcard = ({ title, company, location, snippet }) => {
  return (
    <div>
      <h4 className="text-lg font-bold text-amber-600 mb-1">{title}</h4>
      <p className="text-sm text-gray-700 font-medium">{company}</p>
      <p className="text-sm text-gray-500 mb-3">{location}</p>
      <p className="text-gray-600 text-sm">{snippet}</p>
    </div>
  )
}
}

export default Jobcard;