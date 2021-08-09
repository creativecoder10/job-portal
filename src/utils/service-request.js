import { BASE_URL } from '../AppConstants';

const ServerRequest = async (endPoint, method) => {
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`, {
      method,
    });

    const json = res.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
};
export default ServerRequest;
