import React from "react"

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todos</h1>
            <p style={{ fontSize: "19px" }}>Go ahead!</p>
        </header>
    )
}

export default Header