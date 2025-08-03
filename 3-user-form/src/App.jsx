import styles from "./App.module.css"
import Form from "./components/Form";

function App() {

    return (
        <>
            <div className={`${styles['main-container']}`}>
                <Form />
            </div>
        </>
    );
}

export default App;
