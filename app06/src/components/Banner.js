
const Banner = ({title}) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title||"UnTitled"}</a>
        </div>
    </nav>
);

export default Banner;