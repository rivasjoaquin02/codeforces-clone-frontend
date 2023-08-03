import { getSession } from "@/services/session/session";
import { Session } from "@/services/session/types";
import { createContext } from "react";


const SessionContext = createContext<Session | undefined>()


export const useSession = (): Session |  => {

}