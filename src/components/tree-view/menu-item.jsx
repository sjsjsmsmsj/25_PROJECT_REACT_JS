import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";


export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }
    return (
        <li >
            <div style={{ display: 'flex' }} className="menu-item-container">
                <p>{item.label}</p>
                {
                    item?.children?.length ? <span onClick={() => handleToggleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
                    </span> : null
                }
            </div>

            {
                item?.children?.length && displayCurrentChildren[item.label] ? (
                    <MenuList list={item.children} />
                ) : null
            }
        </li >
    )
}