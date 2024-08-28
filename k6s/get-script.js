import http from "k6/http";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  insecureSkipTLSVerify: true,
  stages: [
    { duration: "5s", target: 100 },
    { duration: "10s", target: 500 },
    { duration: "5s", target: 10000 },
    { duration: "10s", target: 10 }
  ],
};

export default function () {
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const short_id_list = ["2lHzWyUZ", "2lHzfPCO", "hdjdjd"];
  var randomShortId = getRandomElement(short_id_list);

  const url = `https://dsandbox.online/api/analytic/stats/${randomShortId}`;
  http.get(url);
}
