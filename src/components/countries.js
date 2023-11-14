import React,{useState,useEffect} from 'react';
import axios from 'axios';


const URL="https://restcountries.com/v3.1/all"
export default function (props) {
    const[countries,setCountries]=useState([])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");  //search state
    useEffect(()=>{
        axios.get(URL)
        .then((res)=>{
            
            setCountries(res.data)
           
        })
        .catch((error) => console.error('Error fetching data:', error));
       
    },[])

    const filteredCountry = countries.filter((country) =>

    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
   
  );
 
    
  return (
    <div>

<div class="bg-gray-200 sticky top-0 z-10">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
         
            <span class="ml-2 text-xl font-bold tracking-wide text-black uppercase">
              Rest Countries
            </span>
          
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
               
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Countries
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
               
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Population
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li> */}
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                       
                        class="inline-flex items-center"
                      >
                       
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                         Rest Countries
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                         
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Countries
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                         
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Population
                        </a>
                      </li>
                     
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className=" mx-20 w-[80%]">
    <div style={{display:"flex",width:"90%",}} >
      <input
        type="Search"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", maxWidth: "400px", margin: "10px 0",padding:"10px",outline:"none",borderRadius:"5px 5px 5px 5px"}}
      />
      </div>
    </div>
      
    <div className=" flex justify-evenly flex-wrap px-2 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-3 lg:py-10">
    {
       filteredCountry?.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-80 lg:w-[26%] mb-16  transform  hover:shadow-sm transition-shadow duration-400">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={item?.flags?.png}
                        className="object-fit w-full h-64"
                        alt={item?.flags?.alt}
                    />
                    <div className="p-5 border border-t-0">
                        <a
                            href="/"
                            aria-label="Category"
                            title="Film It!"
                            className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            {item?.name?.common}
                        </a>
                        <p className="mb-3 text-sm font-semibold tracking-wide">
                            {
                                item.currencies ? (
                                    <>
                                        Currency - {Object.values(item.currencies)[0]?.name} {Object.values(item.currencies)[0]?.symbol}
                                    </>
                                ) : (
                                    <>Currency information not available</>
                                )
                            }
                        </p>
                        <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                           aria-label="Category"
                           title="">
                            Time Zone :
                            <span className="text-gray-600 text-sm px-4">{item?.timezones}</span>
                        </p>
                        <p className="mb-2 text-gray-700">
                            <p
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title=""
                            >
                                Population :
                                <span className="text-gray-600 px-4 py-2">{item?.population} </span>
                            </p>
                            <p className="mb-2 text-gray-700">
                                <p
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title=""
                                >
                                    Capital <span className="text-gray-600 ml-7 py-2">:</span>
                                    <span className="text-gray-600 m-4 py-2">{item?.capital} </span>
                                </p>
                            </p>
                        </p>
                        <a
                            href={item?.maps?.googleMaps}
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            target='blank' no-referrer>
                            Map
                        </a>
                    </div>
                </div>
            </div>
        ))
    }
</div>
      
     

       
    </div>
  )
}
