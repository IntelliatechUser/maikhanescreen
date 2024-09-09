// import Axios from "axios";
// import localStorageUtil from "../utility/utility";



// function apiHeader(apiUrl) {
   
//     const headers = {};


//     const token= localStorageUtil.getItem("token")
//     console.log(">>>>>>>>>>>>>>>>>>token service",token);
//     console.log(">>>>>>>token apiHeader",token)
//     if (token) {
//         headers= { Authorization: `Bearer ${token}` }
       
//     }
 

//     return headers;
// }


// export async function makeApiRequest(url, apiMethod, params) {

//     let apiUrl="http://43.204.36.147:8067"+url;
//     if (!navigator.onLine) {
//         return { status: false, statusCode: null, response: null, error: "No internet connection" };
//     }

//     try {
//         let response;
//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>service response file file",response);
//         switch (apiMethod.toLowerCase()) {
//             case 'get':
//                 response = await Axios.get(apiUrl, {
//                     params,
//                     headers: apiHeader(apiUrl),
//                 });
                
//                 break;
//             case 'post':
//                 response = await Axios.post(apiUrl, params, {
//                     headers: apiHeader(apiUrl),
//                 });
//                 break;
//             case 'put':
//                 response = await Axios.put(apiUrl, params, {
//                     headers: apiHeader(apiUrl),
//                 });
//                 break;
//             case 'delete':
//                 response = await Axios.delete(apiUrl, {
//                     data: params,
//                     headers: apiHeader(apiUrl),
//                 });
//                 break;
//             default:
//                 throw new Error(`Unsupported HTTP method: ${apiMethod}`);
//         }
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>service response file",response);
//         return {
//             status: true,
//             statusCode: response.status,
//             response: response,
//             error: null
//         };
//     } catch (error) {
//         const statusCode = error.response ? error.response.status : null;
//         const response = error.response ? error.response.data : null;
        
//         // if (statusCode === 401 && !apiUrl.startsWith(`${ApiManager.BaseURL}${ApiManager.APIEndPoint.AuthToken}`)) {
//           //  clearAccessToken();
//         //     window.location.href = LOGIN_ROUTE_PATH;
//         //     return;
//         // }

//         return {
//             status: false,
//             statusCode,
//             response,
//             error: error.message
//         };
//     }
// }


import Axios from "axios";
import localStorageUtil from "../utility/utility";

// Define API base URL in a constant
const BASE_API_URL = "http://43.204.36.147:8067";

function apiHeader() {
    let headers = {};

    const token = localStorageUtil.getItem("token");
    console.log("Token from localStorage:", token);
    
    if (token) {
        headers = { Authorization: `Bearer ${token}` };
    }

    return headers;
}

export async function makeApiRequest(url, apiMethod, params = {}) {
    const apiUrl = `${BASE_API_URL}${url}`;
    
    // Check for internet connection
    if (!navigator.onLine) {
        return { status: false, statusCode: null, response: null, error: "No internet connection" };
    }

    try {
        let response;

        switch (apiMethod.toLowerCase()) {
            case 'get':
                response = await Axios.get(apiUrl, {
                    params,
                    headers: apiHeader(),
                });
                break;

            case 'post':
                response = await Axios.post(apiUrl, params, {
                    headers: apiHeader(),
                });
                break;

            case 'put':
                response = await Axios.put(apiUrl, params, {
                    headers: apiHeader(),
                });
                break;

            case 'delete':
                response = await Axios.delete(apiUrl, {
                    data: params,
                    headers: apiHeader(),
                });
                break;

            default:
                throw new Error(`Unsupported HTTP method: ${apiMethod}`);
        }

        console.log("API Response:", response);

        return {
            status: true,
            statusCode: response.status,
            response: response.data, // use `response.data` to extract actual data
            error: null
        };

    } catch (error) {
        const statusCode = error.response ? error.response.status : null;
        const response = error.response ? error.response.data : null;

        console.error("API Error:", error);

        return {
            status: false,
            statusCode,
            response,
            error: error.message
        };
    }
}
