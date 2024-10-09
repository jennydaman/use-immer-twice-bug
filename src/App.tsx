import React from "react";
import { useImmer } from "use-immer";

function App() {
	const [foo, setFoo] = useImmer([]);
	const [bar, setBar] = useImmer([]);

	const onClick = () => {
		setFoo((draft) => {
			draft.push(1);
		});
		console.count("onClick");
		setBar((draft) => {
			console.count("setBar");
			draft.push(2);
		});
	};

	React.useEffect(() => {
		console.count("useEffect");
	}, [bar]);

	return <button onClick={onClick}>click me</button>;
}

export default App;
