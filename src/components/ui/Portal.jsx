import "./Portal.css";
import { Button } from "../buttons/Button";
import { Text } from "../text/Text";

export function Portal({ children, isOpen, onClose, headerText })
{
    if(!isOpen) return null;

    return <>   
        <div className="modalPortal" >
            <div className="modalHeader">
                <Text className = { "defaultText" } text = { headerText }/>
                <Button className={ "closeButton" } text = { "X" } action = { onClose }/>
            </div>
            {children}
        </div>
    </>
}