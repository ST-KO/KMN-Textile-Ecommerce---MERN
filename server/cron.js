import cron from "node-cron";
import axios from "axios";

const backendUrl = process.env.BACKEND_BASE_URL;

const cronSchedule = "*/14 * * * *";

const callApi = async () => {
  try {
    const response = await axios.get(backendUrl);
    console.log("API call successfull:", response.data);
  } catch (error) {
    console.log("Error calling Api:", error.message);
  }
};

const cronJob = cron.schedule(cronSchedule, () => {
  console.log("Server Restarting");
  callApi();
});

export { cronJob };
