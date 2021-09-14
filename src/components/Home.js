import React from 'react'


 const Home = () => {
    return (
        <div style={{paddingTop:"40px"}}>
            <h1 style={{textAlign:"center" , padding:"10px"}}>
                Hii{' '} {sessionStorage.getItem("email")} Your password is {sessionStorage.getItem("password")}
            </h1>
        </div>
    )
}

export default Home;