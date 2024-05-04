import axios from "axios";

const api = axios.create({
	baseURL : "http://localhost:3000"
})

export const login = async (username, password) => {
	try
	{
		const response = await api.post("/api/login", {
			params : {
				username,
				password
			}
		})
		.then((res) => {
			if (res.status(404))
			{
				console.log("AUTH ERROR...");
				return (0);
			}
			else
			{
				console.log("AUTH SUCCESS ...");
				return (1);
			}
		})
		return (response);
	}
	catch (error)
	{
		console.log("EXEC ERROR ...");
	}
}

