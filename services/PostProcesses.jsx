export default class PostProcesses {
	async addProcess(processData) {
		const response = await fetch("http://127.0.0.1:8000/add_process", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(processData),
		});

		return await response.json();
	}
}
