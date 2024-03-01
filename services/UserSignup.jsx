export default class UserSignup {
	getUsers() {
		return fetch("http://127.0.0.1:8000/users", { method: "GET" }).then(
			(response) => response.json()
		);
	}
}
