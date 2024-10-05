const axios=require('axios'); //to import api, axios should be imported
import{expect} from '@playwright/test';


async function getApiBaseUrl(){
    apiUrl =process.env.API_BASE
}

async function createEntity(userData,accessToken,module,{request})
{
    const apiUrl=await getApiBaseUrl();
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json',
        'authorisation':"Bearer"+accessToken,
    };
    const response=await request.post(apiUrl + module,{
        headers,
        data:JSON.stringify(userData),
    });
    
    const reponseBody=await response.json();
    const statusCode=response.status();
    expect(statusCode).toBe(201);
}

async function aunthenticateUser(username,password,{request}){
    const apiUrl=await getApiBaseUrl();
    const headers={
        'Content-Type':'application/json';
    };
    const requestBody={
        email:username,
        password:password,
    };
    const response=await request.post(apiUrl +"/users/login",{
        data:JSON.stringify(requestBody),
        headers,
    });
    const statusCode=response.status();
    expect(statusCode).toBe(200);
    const cookiesHeader =response.headers()['set-cookie'];
    expect(cookiesHeader).toBeDefined();
    let token;
    if(typeof cookiesHeader==='string'){
        if(cookiesHeader.includes('token=')){
            token=cookiesHeader.split('token=')[1].split(';')[0].trim();
        }
        else if(Array.isArray(cookiesHeader)){
            for(const cookie of cookiesHeader){
                if(cookie.includes('token=')){
                    token=cookies.split('token=')[1].split(';')[0].trim();
                    break;
                }
            }
        }
        else{
            console.log("unexpected format for Set-Cookie header");
        }
        expect(token).toBeDefined();
        return token;
    }
}
