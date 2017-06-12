import request from 'superagent';
import { setLastRefresh } from './services/lastSessionRefresh';

/*

    This is a simple wrapper for the get/post methods of super agent. The reason
    for this is that with every call we do we want 2 additional things to happen;
        1) The XSRF token needs to be sent back to the server in the header
        2) When the call returns the "setLastRefresh" method needs to be called
            to inform this tab and all others that the user has refreshed their
            sesion and can delay having the signin popup

*/

const verificationToken = () => {
    return { __RequestVerificationToken: getVerificationToken() };
};

/*
    GETs a URL and then executes the call back it's given
    Returns: a Promise that resolves when the response is received and the call back is done executing
    url: The absolute or relative URL to GET. Will include XSRF token
    onEnd: Function to call upon response of the GET. Before calling it the setStaticAnswerOptions
        will be refreshed.

*/
export const get = (url, onEnd) => {
    return request.get(url)
        .set(verificationToken())
        .send()
        .end((err, res) => {
            setLastRefresh(true);
            onEnd && onEnd(err, res);
        });
};

/*
    POST data to a URL and execute the passed callback
    Returns: a Promise that resolves when the response is received and the call back is done executing
    url: The endpoint to POST to
    headerData: any additional headers that need to be set
    bodyData: the object to pass in the body of the request
    onEnd: Callback to execute after refreshing the user session.
*/
export const post = (url, headerData, bodyData, onEnd) => {
    return request.post(url)
        .set(verificationToken())
        .set(headerData || {})
        .send(bodyData || {})
        .end((err, res) => {
            setLastRefresh(true);
            onEnd && onEnd(err, res);
        });
};