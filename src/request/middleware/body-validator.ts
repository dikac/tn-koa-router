import Validator from "@dikac/t-validator/validator";
import {Middleware} from "koa";
import {Request} from "koa";
import PropertyValidator from "./property-validator";
import Body from "@dikac/t-http/body/body";
import Match from "@dikac/t-validator/match/infer";

export default function BodyValidator<
    ValidatorType extends Validator,
    RequestType extends Request & Body<Match<ValidatorType>> = Request & Body<Match<ValidatorType>>,
>(
    validator : ValidatorType,
    failCode : number = 400,
) : Middleware {

    return PropertyValidator<ValidatorType, RequestType>(validator, 'body', failCode)
}
