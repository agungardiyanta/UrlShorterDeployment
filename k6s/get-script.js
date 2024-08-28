import http from "k6/http";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  insecureSkipTLSVerify: true,
  stages: [
    { duration: "10s", target: 500 }, // ramp up to 400 users
    { duration: "10s", target: 1000 }, // stay at 400 for ~4 hours
    { duration: "5s", target: 10000 },
    { duration: "5s", target: 0 }, // scale down. (optional)
  ],
};

export default function () {
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const short_id_list = ["2lHzWyUZ", "2lHzfPCO", "hdjdjd"];
  var randomShortId = getRandomElement(short_id_list);

  const url = `https://dsandbox.online/s/${randomShortId}`;
  http.get(url);
}
