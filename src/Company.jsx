import { Link } from "react-router-dom"

export const Company = () => {
    return (
        <>
            <h1>Companyです</h1>
            <div>
                <Link to={`/`}>Homeへ</Link>
                <Link to={`/about/`}>Aboutへ</Link>
            </div>
        </>
    )
}