import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Response from "@dikac/t-http/response/response";
import Context from "../middleware/context/context";
export default function FromResponse<Subject extends Value & Validatable & Message<string>>(context: Context, response: Response): void;
