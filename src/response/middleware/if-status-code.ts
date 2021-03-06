import Context from "../../middleware/context/context";
import {Middleware} from "koa";

export default function IfStatusCode(
    middleware : Middleware,
    status : (status:number)=>boolean
) : Middleware {

    return function (context : Context , next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
