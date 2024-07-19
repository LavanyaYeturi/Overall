import http from 'k6/http';
import { check, sleep, Counter  } from 'k6';

const iterationCounter = new Counter('iterations');
export const options = {
  vus: 1,  // virtual users 20
  duration: '30s', // test duration
};

export default function() {
  iterationCounter.add(1);
  let res = http.get('https://www.feuji.com/');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 2000ms': (r) => r.timings.duration < 2000,
  });
  sleep(1);
  console.log(iterationCounter)
}
