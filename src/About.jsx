import { Link } from "react-router-dom"

export const About = () => {
    return (
        <>
            <h1>Aboutです</h1>
            <div>
                <Link to={`/`}>Homeへ</Link>
                <Link to={`/company/`}>Companyへ</Link>
            </div>
        </>
    )
}