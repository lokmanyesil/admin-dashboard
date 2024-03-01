export default class GetProcess {
	getProcess() {
		return fetch("http://127.0.0.1:8000/processes", { method: "GET" }).then(
			(response) => response.json()
		);
	}
}
