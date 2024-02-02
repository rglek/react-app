export const Message  = () =>{
    const name = ''
    if (name){
      return <h1>Hello {name}'s world</h1>;  
    }
    else{
     return <h1>Hello Default World</h1>;       
    }

}

export default Message;