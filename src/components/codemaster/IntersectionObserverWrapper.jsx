import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import OverflowMenu from "./overflow-menu";

const useIntersectionStyles = makeStyles(() => ({
    visible: {
        order: 0,
        visibility: "visible",
        opacity: 1
    },
    inVisible: {
        order: 100,
        visibility: "hidden",
        pointerEvents: "none"
    },
    overflowStyle: {
        order: 99,
        position: "sticky",
        right: "0",
        backgroundColor: "white"
    }
}));

export default function IntersectionObserverWrap({ children }) {
    const classes = useIntersectionStyles();
    const navRef = useRef(null);
    const [visibilityMap, setVisibilityMap] = useState({});
    const handleIntersection = (entries) => {
        const updatedEntries = {};
        entries.forEach((entry) => {
            const { targetid } = entry.target.dataset;
            if (entry.isIntersecting) {
                updatedEntries[targetid] = true;
            } else {
                updatedEntries[targetid] = false;
            }
        });

        setVisibilityMap((prev) => ({
            ...prev,
            ...updatedEntries
        }));
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: navRef.current,
            threshold: 1
        });

        // We are addting observers to child elements of the container div
        // with ref as navRef. Notice that we are adding observers
        // only if we have the data attribute observerid on the child elemeent
        Array.from(navRef.current.children).forEach((item) => {
            if (item.dataset.targetid) {
                observer.observe(item);
            }
        });
        return () => observer.disconnect();
    }, []);
    return (
        <div className="flex" style={{ width: "75%" }} ref={navRef}>
            {React.Children.map(children, (child) => React.cloneElement(child, {
                className: classnames(child.props.className, {
                    [classes.visible]: !!visibilityMap[child.props["data-targetid"]],
                    [classes.inVisible]: !visibilityMap[child.props["data-targetid"]]
                })
            }))}
            <OverflowMenu
                visibilityMap={visibilityMap}
            >
                {children}
            </OverflowMenu>
        </div>
    );
}
