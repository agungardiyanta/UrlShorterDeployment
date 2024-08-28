import http from "k6/http";
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  insecureSkipTLSVerify: true,
  stages: [
    { duration: '30s', target: 500 },   // Ramp-up to 500 RPS
    { duration: '1m', target: 500 },   // Stay at 500 RPS for 3 minutes
    { duration: '10s', target: 10000 }, // Spike to 10,000 RPS
    { duration: '30s', target: 500 },   // Ramp-down back to 500 RPS
    { duration: '10s', target: 0 },
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
  const res = http.get(url);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
