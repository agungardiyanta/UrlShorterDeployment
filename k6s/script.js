import http from 'k6/http';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1,
  insecureSkipTLSVerify: true,
  duration: '5s',
};

export default function () {
  const url = 'https://dsandbox.online/api/core/create';
  const payload = JSON.stringify({
    original_url: 'https://youtube.com',
    short_id: ''
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
