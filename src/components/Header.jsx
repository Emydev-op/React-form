import { useState } from "react";

const Header = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>React Form  and Modal</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    );
};

export default Header