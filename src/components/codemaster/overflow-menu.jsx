import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
    inOverflowMenu: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
}));

export default function OverflowMenu({ children, visibilityMap }) {
    const classes = useStyles();
    const [show, setShow] = useState(false)
    const shouldShowMenu = useMemo(
        () => Object.values(visibilityMap).some((v) => v === false),
        [visibilityMap]
    );
    if (!shouldShowMenu) {
        return null;
    }
    return (
        <div className="relative">
            <button onClick={() => setShow(prev => !prev)} type="button" className="py-2 px-2 md:px-3 inline-flex hover:bg-gray-900 rounded font-bold items-center">
                <span className="mr-1">More</span>
                {
                    show ? <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" width="24" fill="currentColor"><path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" /></svg>
                    </span> : <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 24 24" width="24" fill="currentColor"><path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z" /></svg>
                    </span>
                }
            </button>
            {
                show && <div className="absolute flex flex-col space-y-4 bg-gray-800 shadow-md mt-3 p-4 rounded z-20 w-44 right-0">
                    {React.Children.map(children, (child) => {
                        if (!visibilityMap[child.props["data-targetid"]]) {
                            return (
                                React.cloneElement(child, {
                                    className: classnames(
                                        child.className,
                                        classes.inOverflowMenu
                                    ),
                                    key: child
                                })
                            );
                        }
                        return null;
                    })}
                </div>
            }
        </div>
    );
}
