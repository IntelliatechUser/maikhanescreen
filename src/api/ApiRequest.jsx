import Axios from "axios";
import localStorageUtil from "../utility/utility";
//import { isLoggedIn, getAccessToken, clearAccessToken } from "../utility/utility.jsx";
//import { API_KEY, API_KEY_VALUE, AUTH_HEADER_KEY, APP_VERSION } from '../api/ApiManager';
//import { LOGIN_ROUTE_PATH } from "../constants/RoutingPathConstants";
//import * as ApiManager from "./ApiManager.js";


function apiHeader(apiUrl) {
   
    const headers = {};

  //  if (!apiUrl.startsWith(ApiManager.BaseURL)) return headers;

    // headers[API_KEY] = API_KEY_VALUE;
    // headers[APP_VERSION] = "4.0.6";
    const token= localStorageUtil.getItem("token")
    console.log(">>>>>>>token apiHeader",token)
    if (token) {
        headers= { Authorization: `Bearer ${token}` }
       
    }
    // } else if (!apiUrl.startsWith(`${ApiManager.BaseURL}${ApiManager.APIEndPoint.AuthToken}`)) {
    //     headers["x-demo-mode"] = true;
    // }

    return headers;
}


export async function makeApiRequest(url, apiMethod, params) {

    let apiUrl="http://43.204.36.147:8067"+url;
    if (!navigator.onLine) {
        return { status: false, statusCode: null, response: null, error: "No internet connection" };
    }

    try {
        let response;

        switch (apiMethod.toLowerCase()) {
            case 'get':
                response = await Axios.get(apiUrl, {
                    params,
                    headers: apiHeader(apiUrl),
                });
                break;
            case 'post':
                response = await Axios.post(apiUrl, params, {
                    headers: apiHeader(apiUrl),
                });
                break;
            case 'put':
                response = await Axios.put(apiUrl, params, {
                    headers: apiHeader(apiUrl),
                });
                break;
            case 'delete':
                response = await Axios.delete(apiUrl, {
                    data: params,
                    headers: apiHeader(apiUrl),
                });
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${apiMethod}`);
        }
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",response);
        return {
            status: true,
            statusCode: response.status,
            response: response,
            error: null
        };
    } catch (error) {
        const statusCode = error.response ? error.response.status : null;
        const response = error.response ? error.response.data : null;
        
        // if (statusCode === 401 && !apiUrl.startsWith(`${ApiManager.BaseURL}${ApiManager.APIEndPoint.AuthToken}`)) {
          //  clearAccessToken();
        //     window.location.href = LOGIN_ROUTE_PATH;
        //     return;
        // }

        return {
            status: false,
            statusCode,
            response,
            error: error.message
        };
    }
}
