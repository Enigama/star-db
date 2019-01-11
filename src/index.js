const getResource = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`)
  }
  const body = await response.json();
  return body
}

getResource('https://swapi.co/api/people/1/')
  .then( body => {
    console.log(body);
  })
.catch(reject => {
  console.log(reject);
})