/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import Context from "./context/context";
export default function PropertyFilter<Body = unknown, Type extends 'response' | 'request' = 'response' | 'request', Property extends keyof Context[Type] = keyof Context[Type], Return extends Context[Type][Property] = Context[Type][Property]>(type: Type, filter: (body: Context[Type][Property]) => Return, property: Property): Middleware;