import { useRouteError } from "react-router-dom";
const Error =()=>{
    const error=useRouteError();
    console.error(error);
return (
    <>
    <h1>Opps something went Wrong!!!!</h1>
    <h3>{error.status}:{error.statusText}</h3>
    </>
)
}
export default Error ;