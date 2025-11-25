import { v4 as uuidv4 } from "uuid";

export function getUuid()
{
    let uuid = uuidv4();
    const savedUuid = localStorage.getItem("uuid");
    if(savedUuid)
    {
        uuid = savedUuid;
    }
    else
    {
        localStorage.setItem("uuid", uuid);
    }
    return uuid;
}