import axios from "axios";

class AouthService {
    async login(username: string, password: string): Promise<string> {
        try {
            return await axios.post("http://localhost:3030/api/auth/login", { username, password })
        } catch (e) {
            console.error(e);
            return '';
        }
    }

    async register(firstName: string, lastName: string, username: string, password: string): Promise<string> {
        try {
            const { data } = await axios.post("http://localhost:3030/api/auth/register", { firstName, lastName, username, password })
            return data;
        } catch (e) {
            console.error(e);
            return '';
        }
    }
}



const aouthService = new AouthService();
export default aouthService;