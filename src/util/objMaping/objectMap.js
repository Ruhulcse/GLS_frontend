const transferObj = (obj) =>{
    return Object.keys(obj).reduce((acc,crr)=>{
      acc[crr] = {
        ...obj[crr],
        value:''
  
      }
      return acc
    },{})
  }

  const objectToArray = (obj) =>{
    return Object.keys(obj).map((key)=>({name:key,...obj[key]}))
  }

  export {transferObj, objectToArray}