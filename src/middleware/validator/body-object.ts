import Context from "../context/context";
import ValueAll from "@dikac/t-array/validator/value-all";
import Object_ from "@dikac/t-object/validator/object";
import NotEmpty from "@dikac/t-object/validator/not-empty";
import ObjectMessage from "@dikac/t-object/validatable/string/object";
import ObjectEmpty from "@dikac/t-object/validatable/string/not-empty";
import MsgAnd from "@dikac/t-array/message/message/list/invalid";
import And from "@dikac/t-array/validatable/and";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export default function BodyObject<Ctx extends Context>(
    messages : (messages : (Message & Validatable)[]) => any = MsgAnd,
    type : (object: Readonly<Validatable & Value>) => string = ObjectMessage,
    empty : (object: Readonly<Validatable & Value<object>>) => string = ObjectEmpty,
) : ValidatorInterface<any, object, Instance<any>> {

    let validators : ValidatorInterface<any, object, Instance<any, string>>[] = [
        new Object_(type) as ValidatorInterface<any, object, Instance<any, string>>,
        new NotEmpty(empty) as ValidatorInterface<any, object, Instance<any, string>>,
    ];

    let validator = ValueAll(validators, And, messages);

    return <ValidatorInterface<any, object, Instance<any>>> validator;
};

