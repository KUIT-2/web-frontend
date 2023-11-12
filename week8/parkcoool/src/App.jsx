import Router from "./pages";

function App() {
    const style = {
        margin: "0 auto",
        width: "50vw",
        minWidth: "320px",
    };

    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default App;
