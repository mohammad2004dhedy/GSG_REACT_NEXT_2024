import React from 'react';
interface Iprops{
    params:Promise<{slug:string[]}>
}
const page = async(props:Iprops) => {
    const {slug}=await props.params;
  return (
    <div>details page
        <h1>{slug[0]}</h1>
    </div>
  )
}

export default page;