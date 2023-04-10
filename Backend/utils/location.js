async function getCoordsForAddress(address) {
    return new Promise((resolve, reject)=> {
        resolve({
          lat: 40.7484474,
          lng: -73.9871516,
        })
    })    
}

module.exports.getCoordsForAddress = getCoordsForAddress;