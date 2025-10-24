import React from 'react';

// Sample data - ideally fetched from backend API
const companiesByLetter = {
  A: [
    'A & A Associates',
    'A & B Business Solutions',
    'A & J Global Solutions Private Limited',
    'A & S Associates',
    'A & T Video Networks Pvt Ltd',
    // add more company names starting with A
  ],
  B: [
    'Bharat Enterprises',
    'Blue Ocean Technologies',
    // add more company names starting with B
  ],
   C: [
    'A & A Associates',
    'A & B Business Solutions',
    'A & J Global Solutions Private Limited',
    'A & S Associates',
    'A & T Video Networks Pvt Ltd',
    // add more company names starting with A
  ],
   D: [
    'A & A Associates',
    'A & B Business Solutions',
    'A & J Global Solutions Private Limited',
    'A & S Associates',
    'A & T Video Networks Pvt Ltd',
    // add more company names starting with A
  ],
  // Add other letters as needed
};

function BrowseCompanies() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse Companies by Letter</h1>

        <ol className='flex justify-between align-middle h-20 '>
           <a href="" className='decoration:none'>A</a>
           <a href="" className='decoration:none'>B</a>
           <a href="" className='decoration:none'>C</a>
           <a href="" className='decoration:none'>D</a>
           <a href="" className='decoration:none'>E</a>
           <a href="" className='decoration:none'>F</a>
           <a href="" className='decoration:none'>G</a>
           <a href="" className='decoration:none'>H</a>
           <a href="" className='decoration:none'>I</a>
           <a href="" className='decoration:none'>J</a>
           <a href="" className='decoration:none'>K</a>
           <a href="" className='decoration:none'>L</a>
           <a href="" className='decoration:none'>M</a>
           <a href="" className='decoration:none'>N</a>
           <a href="" className='decoration:none'>O</a>
           <a href="" className='decoration:none'>P</a>
           <a href="" className='decoration:none'>Q</a>
           <a href="" className='decoration:none'>R</a>
           <a href="" className='decoration:none'>S</a>
           <a href="" className='decoration:none'>T</a>
           <a href="" className='decoration:none'>U</a>
           <a href="" className='decoration:none'>V</a>
           <a href="" className='decoration:none'>W</a>
           <a href="" className='decoration:none'>X</a>
           <a href="" className='decoration:none'>Y</a>
           <a href="" className='decoration:none'>Z</a>
           
        </ol>
    

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {Object.keys(companiesByLetter).sort().map(letter => (
          <div key={letter}>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-1">{letter}</h2>
            <ul className="space-y-1 max-h-60 overflow-y-auto">
              {companiesByLetter[letter].map((company, idx) => (
                <li key={idx}>
                  {/* Example link to company detail page */}
                  <a
                    href={`/companies/${encodeURIComponent(company)}`}
                    className="text-indigo-600 hover:underline hover:text-indigo-800"
                  >
                    {company}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCompanies;
