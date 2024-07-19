import http from 'k6/http';
import {sleep,check} from 'k6';

export const options = {
    scenarios: {
        my_scenario: {
            executor: 'per-vu-iterations',
            vus: 10,
            iterations: 10,
            maxDuration: '30s',
        },
    },
}

export default function(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9jb2RlIjoiY21yLWI3MmVjYWNhNjc0NDQxMDNiMDAzMmM2ZGE3ZTExOTRiIiwidGVuYW50X2NvZGUiOiJ0ZW4tZWNhZGEyMWU1NzE1NDkyOGEyYmI5NTllODM2NWI4YjQiLCJyb2xlIjoic3Vic2NyaWJlciIsImV4cCI6MTcxOTkwMzMxOSwiZW52IjoiRGV2ZWxvcG1lbnQiLCJpc3MiOiJTdW5ueVJld2FyZHMiLCJhdWQiOiJIZWxpb3MifQ.PIbdVaX6_deZN3GTmp3w8kBq-LUHt0C_w-O3LR5Tz1s';
       const url ='https://api.dev.sunnyrewards.com/api/v1/bff/consumer-summary';
    const payload =JSON.stringify({
        "consumerId": 2,
        "consumerCode": "cmr-b72ecaca67444103b0032c6da7e1194b"
    });
    const params ={
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
    }
    const res = http.post(url, payload, params);
    console.log(`Response status: ${res.status}`);
    console.log(`Response status: ${res}`);
     check(res,{
        "is response status 200": (res) => res.status ===200,
        "is body has email": (res) => res.body.includes('fredfadel@yopmail.com')
    })
}



