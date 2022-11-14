import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>HOMEです</h1>
            <div>
                <Link to={`/about/`}>Aboutへ</Link>
                <Link to={`/company`}>Companyへ</Link>
            </div>
        </>
    )
}