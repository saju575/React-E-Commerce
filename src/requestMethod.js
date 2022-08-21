import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmI4NThhYmMwY2JmY2Y4MDIwZDExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDg0NDg1NCwiZXhwIjoxNjYxMTA0MDU0fQ.l5zXaFVflzqP7Z8vmSBIQ-GNOQFIA1l60YTOQH0nZCI";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
