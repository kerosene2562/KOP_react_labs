import "./Header.css"

export function Header()
{
    return <>
        <div className="header">
            <div className="gameName">
                <div className="logoContainer">
                    <img src="src/assets/logo.png" alt="logo" className="logo"/>
                </div>
                <div className="name">
                    <p>mathbro</p>
                </div>
            </div>

            <div className="userPanel">
                <p>settings</p>
                <p>results</p>
            </div>
        </div>
    </>
}