export default function IfStatusCode(middleware, status) {
    return function (context, next) {
        if (status(context.response.status)) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=if-status-code.js.map