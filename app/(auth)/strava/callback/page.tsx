'use client'


import React, { useEffect, useState } from 'react'

function Callback() {

  const [code , setCode] = useState<string | null>(null)
  
  useEffect(() => {
  // Get the current URL
  const url = window.location.href;
  // Create a URLSearchParams object from the URL
  const params = new URLSearchParams(url.split('?')[1]);
  // Example: Get a specific parameter, e.g., 'code'
  setCode(params.get('code'))
  }, [])

  // useEffect(() => {

  //   if(code){
  //     console.log("has code")

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/strava/activities', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ code }),
  //       });
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data); // Handle the fetched data as needed
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  //   }
  // }, [code]) 

  return (
       <div className='pt-16'>Callback Page - Code: {code}</div> // Display the extracted code
  )
}

export default Callback